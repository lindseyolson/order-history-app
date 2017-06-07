var express = require('express');
var router = express.Router();
var pg = require ('pg');
var config = {
  database: 'omega'
};
var pool = new pg.Pool(config);

router.get('/', function(req, res) {
  console.log('connected with db');
  pool.connect()
    .then(function (dbClient) {
      dbClient.query('SELECT * FROM customers')
      .then(function (customers) {
        dbClient.release();
        res.send(customers.rows); //created
      });
    }) // end then
    .catch(function(err) {
      dbClient.release();
      res.sendStatus(500); //server error
    }); //end catch
}); // end get

module.exports = router;
