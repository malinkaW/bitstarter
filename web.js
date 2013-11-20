var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 4!');
  //var read = fs.readFileSync('index.html');
  //response.send(read.toString());
  var read = fs.readFileSync('index.html','utf8');
  response.send(read);
    
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
