const Inquiry = require('../../models/inquiry');

module.exports = {
  getAllForUser,
  create,
  respond,
};

async function getAllForUser(req, res) {
  try {
    const inquiries = await Inquiry.find({ user: req.user._id }).populate('product');
    res.json(inquiries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}

async function create(req, res) {
  try {
    const { productId, message } = req.body;
    const newInquiry = new Inquiry({
      user: req.user._id,
      product: productId,
      message: message,
      status: 'Pending', // Set initial status to Pending
    });
    await newInquiry.save();
    res.status(201).json(newInquiry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}

async function respond(req, res) {
  try {
    const { inquiryId, response, status, subReason } = req.body;
    const inquiry = await Inquiry.findById(inquiryId);
    if (!inquiry) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }

    // Check if the user making the request is an admin
    if (req.user.role === 'admin') {
      // Update inquiry's response and status
      inquiry.response = response;
      inquiry.status = status; // Update status based on admin's choice
      // If status is 'Closed' and there's a sub reason, update sub reason
      if (status === 'Closed' && subReason) {
        inquiry.subReason = subReason;
      }
    } else {
      // Check if the inquiry is already closed
      if (inquiry.status === 'Closed') {
        return res.status(403).json({ error: 'Inquiry is already closed' });
      }
      // Update inquiry's user response
      inquiry.userResponse = response;
      inquiry.status = status; // Update status based on user's choice
    }

    await inquiry.save();
    res.json(inquiry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}
