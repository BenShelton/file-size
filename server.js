// dependencies
const express = require('express');

// environment variables
const port = process.env.PORT;

// server setup
const app = express();

// setup static files
app.use(express.static(__dirname + '/public'));

// routing **

// 404 handling
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

// start server
app.listen(port, () => console.log('Listening on port ' + port));