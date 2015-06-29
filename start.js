var path = require('path'),
  fs = require('fs');

var express = require('express'), 
  serveStatic = require('serve-static');

var app = express();

var buildFolder = path.join(__dirname, 'build');

app.use(serveStatic(buildFolder, {
  index: false
}));


var content = fs.readFileSync(path.join(buildFolder, 'index.html')).toString();

app.get('/', function(req, res, next) {
  res.send(content);
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server listening on port ' + port);
