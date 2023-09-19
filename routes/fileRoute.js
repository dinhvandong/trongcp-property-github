const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
// const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); 
  },
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), (req, res) => {
  const file = req.file;
  console.log('Uploaded file:', file);

  res.status(200).json({status:200, message: 'File uploaded successfully' , data:file.filename});
});


router.get('/image/:filename', (req, res) => {
    const filename = req.params.filename;
    const imagePath = path.join(__dirname, '../uploads', filename);
  
    // Check if the file exists
    if (fs.existsSync(imagePath)) {
      // Read the file and send it as the response
      res.sendFile(imagePath);
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  });
  module.exports = router;
