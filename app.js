var express = require('express');
var jade = require('jade');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index.jade');
});

app.get('*', function(req, res) {
  res.send('404');
});

app.listen(3000);
console.log("App started");
