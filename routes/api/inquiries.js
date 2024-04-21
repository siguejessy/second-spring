const express = require('express');
const router = express.Router();
const inquiriesCtrl = require('../../controllers/api/inquiries');

// GET /api/profile/inquiries
router.get('/', inquiriesCtrl.getAllForUser);

module.exports = router;