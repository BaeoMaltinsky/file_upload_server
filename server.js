const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;
const dir = 'uploads/';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir) 
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully.');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
