var express = require('express');
var fs = require('fs');
const PORT=8080;

var app = express();

app.use(express.static(__dirname + '/public'));






var server = app.listen(PORT, function (){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});