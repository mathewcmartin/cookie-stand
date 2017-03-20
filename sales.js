'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'];

var storeList = [];

var firstnpike = new StoreName('1st and Pike', 23, 65, 6.3);
var seatacAirport = new StoreName('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new StoreName('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreName('Capitol Hill', 20, 38, 2.3);
var alki = new StoreName('Alki', 2, 16, 4.6);

function StoreName(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.hourlySalesArr = [];
  this.randomCust = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.storeSales = function() {
    var total = 0;
    for (var i = 0; i < storeHours.length - 1; i++){
      var cookiesHourly = Math.floor(this.randomCust() * this.avgSales);
      this.hourlySalesArr.push(cookiesHourly);
      total += cookiesHourly;
      console.log(this.cookiesHourly);
    }
    this.hourlySalesArr.push(total);
    console.log(this.hourlySalesArr);
  };
  this.createTblFunc = function(){
    var body = document.getElementById('body');
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    for (var i = 0; i < storeHours.length; i++){
      var td = document.createElement('td');
      td.innerText = this.hourlySalesArr[i];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);
    body.appendChild(table);
  };
  this.storeSales();
  this.createTblFunc();
  // storeList.push(this);
}
