var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var txt = JSON.parse(fs.readFileSync('index.html'));
  buf = new Buffer(256);
  len = buf.write(txt, 0);
  response.send(buf.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
