const multer = require('multer');
const path = require('path'); // Add this line to import the path module

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Generate a unique filename for the uploaded file
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Set a file size limit (optional)
  fileFilter: function(req, file, cb) {
    // Add file filtering logic here (optional)
    // For example, you can filter files by type or extension
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG and PNG files are allowed'));
    }
  }
});

module.exports = upload;
