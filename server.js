// dependencies
const express = require('express');
const multer = require('multer');

// environment variables
const port = process.env.PORT;

// server setup
const app = express();

// setup static files
app.use(express.static(__dirname + '/public'));

// routing
app.post('/filesize', multer().single('uploadFile'), (req, res) => {
    if (!req.file) {
        res.json({error: 'No File Uploaded'});
    } else {
        res.json({
           filename: req.file.originalname,
           size: req.file.size
        });
    }
});

// 404 handling
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

// start server
app.listen(port, () => console.log('Listening on port ' + port));