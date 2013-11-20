var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  response.send("Hello World");
});

app.get('/', function(request1, response1) {
  var read = fs.readFileSync('index.html','utf8');
  response1.send(read);
});

app.get('/', function(request2, response2) {
  var read = fs.readFileSync('index.html');
  response2.send(read.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
