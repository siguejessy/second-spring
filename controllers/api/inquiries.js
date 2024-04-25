const Inquiry = require('../../models/inquirySchema');

const createInquiry = async (req, res) => {
  try {
    const { user, product, message } = req.body;
    if (!user || !product || !message) {
      return res.status(400).json({ error: 'User, product, and message are required' });
    }
    const newInquiry = await Inquiry.create({ user, product, message });
    res.status(201).json({ message: 'Inquiry sent successfully', inquiry: newInquiry });
  } catch (error) {
    console.error('Error sending inquiry:', error);
    res.status(500).json({ error: 'Failed to send inquiry' });
  }
};


const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.status(200).json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
};

const getInquiriesByProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const inquiries = await Inquiry.find({ productId });
    res.status(200).json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries by product:', error);
    res.status(500).json({ error: 'Failed to fetch inquiries by product' });
  }
};


module.exports = { createInquiry, getAllInquiries, getInquiriesByProduct };
