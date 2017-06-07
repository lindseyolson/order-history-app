var express = require('express');
var router = express.Router();
var pg = require ('pg');
var config = {
  database: 'omega'
};
var pool = new pg.Pool(config);


router.get ('/', function(req,res){
  console.log('connected to get orders');
  pool.connect()
    .then(function(dbClient){
      dbClient.query('SELECT customers.id, customers.first_name, customers.last_name, orders.id, orders.order_date, orders.total, addresses.address_type, addresses.street, addresses.city, addresses.state, addresses.zip FROM customers JOIN addresses ON customers.id = addresses.customer_id JOIN orders ON addresses.id = orders.address_id')
      .then(function(orders){
        dbClient.release();
        res.send(orders.rows);
      });
    })
    .catch(function (err){
      dbClient.release();
      res.sendStatus(500); // server error
    });
});


module.exports = router;
