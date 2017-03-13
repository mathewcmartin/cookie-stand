'use strict';
var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'Total'];
var storeSales = [];
var randomCust = [];
var uniqueStore = {
  storeName: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  hourlySales: [],
  randomCust: function(){
    return math.floor(math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  storeSales: function(){
    var total = 0;
    for (var i = 0; i < storeHours.length - 1; i++) {
      this.hourlySales.push(Math.ceil(this.randomCust() * this.avgSales));
      console.log('sales is: ' + this.hourlysales);
      total = total + this.hourlysales[i];
      console.log('total is: ' + total);
    }
  }
};
