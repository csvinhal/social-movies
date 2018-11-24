const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/social-movies'));

app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname + '/dist/social-movies/index.html'))
);

app.listen(process.env.PORT || 8080);
