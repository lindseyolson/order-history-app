$(document).ready(function() {
  console.log('JS, JQ');
  getCustomers();
  $('#customerList').on('click', '.getOrdersButton', getOrders);

}) // end onReady

function getCustomers() {
  $.get('/customers')
   .done(updateDOM)
   .fail(failed);
} // end getCustomers

function getOrders() {
  $.get('/orders')
    .done(getCustomers)
    .fail(failed);
}// end getOrders



///// DOM MANIPULATIONS
function updateDOM(customers) {
  console.log(customers);
  // take in customer object received from server/db
  //apppend customer object to DOM inside <li>
  for (var i = 0; i < customers.length; i++) {
  $('#customerList').append('<li>');
  $('#customerList').append(customers[i].first_name + ' ' + customers[i].last_name);
  $('#customerList').append('<button id="getOrders">See Orders</button>');
  // $('#orderInfo').append()
  } // end for
} // end updateDOM

function appendToDOM() {

} // end appendToDOM


///// UTILITY FUNCTIONS
function failed() {
  console.log('failed');
} // end failed
