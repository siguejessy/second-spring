const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {User, Customer, Admin} = require('../../models/user');


const SALT_ROUNDS = 6;

module.exports = {
  create,
  login,
  checkToken,
  getUser,
  updateUser,
  getAdmin,
};
async function create(req, res) {
  try {
    const user = await User.create(req.body);
    if (user.role === 'customer') {
      // Create a customer linked to the user
      const customerData = {
        user: user._id,
        first_name: 'Fist Name',
        last_name: 'Last Name',
        phone: 'Default Phone Number',
      };
      await Customer.create(customerData);
    } else if (user.role === 'admin') {
      // Creating customer & admin role for admin user
      const customerData = {
        user: user._id,
        first_name: 'Fist Name',
        last_name: 'Last Name',
        phone: 'Default Phone Number',
      };
      await Customer.create(customerData);

//linking admin role to admin user
      const adminData = {
        user: user._id,
        address: 'Default Address',
        phone: 'Default Phone Number',
      };
      await Admin.create(adminData);
    }
    // token will be a string
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

async function getUser(req, res) {
  try{
    const user = await User.findOne({email: req.params.id});
    if (!user) throw new Error();
    if (user.role === 'customer') {
      const customer = await Customer.findOne({user: user._id});
      res.json({user, customer});
    } else if (user.role === 'admin') {
      const customer = await Customer.findOne({user: user._id});
      const admin = await Admin.findOne({user: user._id});
      res.json({user, customer, admin});
    }
  } catch (err) {
    res.status(400).json('Profile not found');
  }
}

async function getAdmin(req, res) {
  try{
    const admin = await Admin.findOne({_id: req.params.id});
    const user = await User.findOne({_id: admin.user});
    res.json(user);
  }catch(err){
    res.status(400).json('Admin not found');
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.findOne({email: req.params.id});
    const userId = user._id;

    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, SALT_ROUNDS);
    }
    // Update the user in the db
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });

    // Depending on the role, update corresponding entries
    if (updatedUser.role === 'customer') {
      // Update the customer linked to the user
      const updatedCustomerData = {
        first_name: req.body.first_name || 'Default First Name',
        last_name: req.body.last_name || 'Default Last Name',
        phone: req.body.customerphone || 'Default Phone Number',
      };
      await Customer.findOneAndUpdate({ user: userId }, updatedCustomerData);
    } else if (updatedUser.role === 'admin') {
      // Update the customer linked to the user
      const updatedCustomerData = {
        first_name: req.body.first_name || 'Default First Name',
        last_name: req.body.last_name || 'Default Last Name',
        phone: req.body.customerphone || 'Default Phone Number',
      };
      await Customer.findOneAndUpdate({ user: userId }, updatedCustomerData);

      // Update the vendor linked to the user
      const updatedAdminData = {
        phone: req.body.adminphone || 'Default Phone Number',
      };
      await Admin.findOneAndUpdate({ user: userId }, updatedAdminData);
    }

    res.status(200).json({ message: 'User updated successfully' });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
