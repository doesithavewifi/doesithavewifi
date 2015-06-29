var path = require('path');

var express = require('express');
var serveStatic = require('serve-static');

var app = express();

var buildFolder = path.join(__dirname, 'build');


app.use(serveStatic(buildFolder));

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server listening on port ' + port);
