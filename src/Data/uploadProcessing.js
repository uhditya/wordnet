const express = require('express');
const multer  = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;

const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST'], // Allow only specified methods
  allowedHeaders: ['Content-Type'], // Allow only specified headers
};

app.use(cors(corsOptions));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), function (req, res, next) {

  const { spawn } = require('child_process');
  const pythonProcess = spawn('python', ['/Users/aditya/Coding/WebDev/React/wordnet/src/Data/pdf.py', 'uploads/' + req.file.originalname]);

  pythonProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  pythonProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    res.download(path.join(__dirname, 'downloads/processed_' + req.file.originalname));
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
