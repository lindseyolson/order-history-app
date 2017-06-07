var express = require('express');
var app = express();
var path = require ('path');
var bodyParser = require ('body-parser');
var port = 1616;
var customers = require ('./routes/customers');
var orders = require ('./routes/orders');

// uses
app.use (express.static('public'));
app.use (bodyParser.urlencoded({extended:true}));
app.use ('/customers', customers);
app.use ('/orders', orders);

// listen
app.listen(port, function() {
  console.log('listening on port', port);
}); // end listen

// base url
app.get('/', function(req, res) {
  console.log('connected');
  res.sendFile(path.resolve('public/views/index.html'))
}); // end get

// GET requests
