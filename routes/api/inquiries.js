const express = require('express');
const router = express.Router();
const { createInquiry, getAllInquiries, getInquiriesByProduct } = require('../../controllers/api/inquiries');

router.post('/', createInquiry);
router.get('/', getAllInquiries);
router.get('/product/:productId', getInquiriesByProduct);

module.exports = router;