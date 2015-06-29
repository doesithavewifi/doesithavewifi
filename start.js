var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic(
  path.join(__dirname, 'build'), {
    'index': ['index.html']
  }
));

app.listen(3000);

console.log('Server listening on port 3000');
