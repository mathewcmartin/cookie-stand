'use strict';

var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'Total'];

var firstnpike = {
  storeName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  hourlySales: [],
  randomCust: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  storeSales: function(){
    var total = 0;
    for (var i = 0; i < storeHours.length - 1; i++) {
      this.hourlySales.push(Math.ceil(this.randomCust() * this.avgSales));
      console.log('sales is: ' + this.hourlySales);
      total = total + this.hourlySales[i];
      console.log('total is: ' + total);

    }
  }
};
var body = document.getElementsByTagName('body')[0];
var firstList = document.createElement('ul');
var firstnpikeHourly = firstnpike.storeSales();
console.log(firstnpikeHourly);
for (var i = 0; i < storeHours.length; i++){
  var firstlistItem = document.createElement('li');
  firstlistItem.textContent = firstnpike[1];
};
body.appendChild(firstList);

var seatacAirport = {
  storeName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSales: 1.2,
  hourlySales: [],
  randomCust: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  storeSales: function(){
    var total = 0;
    for (var i = 0; i < storeHours.length - 1; i++) {
      this.hourlySales.push(Math.ceil(this.randomCust() * this.avgSales));
      console.log('sales is: ' + this.hourlySales);
      total = total + this.hourlySales[i];
      console.log('total is: ' + total);
    }
  }
};
var body = document.getElementsByTagName('body')[0];
var firstList = document.createElement('ul');
var seatacAirportHourly = seatacAirport.storeSales();
console.log(seatacAirportHourly);
for (var i = 0; i < storeHours.length; i++){
  var firstlistItem = document.createElement('li');
  firstlistItem.textContent = seatacAirport[1];
};
body.appendChild(firstList);

var seattleCenter = {
  storeName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSales: 3.7,
  hourlySales: [],
  randomCust: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  storeSales: function(){
    var total = 0;
    for (var i = 0; i < storeHours.length - 1; i++) {
      this.hourlySales.push(Math.ceil(this.randomCust() * this.avgSales));
      console.log('sales is: ' + this.hourlySales);
      total = total + this.hourlySales[i];
      console.log('total is: ' + total);
    }
  }
};
var body = document.getElementsByTagName('body')[0];
var firstList = document.createElement('ul');
var seattleCenterHourly = seattleCenter.storeSales();
console.log(seattleCenterHourly);
for (var i = 0; i < storeHours.length; i++){
  var firstlistItem = document.createElement('li');
  firstlistItem.textContent = seattleCenter[1];
};
body.appendChild(firstList);

var capitolHill = {
  storeName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSales: 2.3,
  hourlySales: [],
  randomCust: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  storeSales: function(){
    var total = 0;
    for (var i = 0; i < storeHours.length - 1; i++) {
      this.hourlySales.push(Math.ceil(this.randomCust() * this.avgSales));
      console.log('sales is: ' + this.hourlySales);
      total = total + this.hourlySales[i];
      console.log('total is: ' + total);
    }
  }
};
var body = document.getElementsByTagName('body')[0];
var firstList = document.createElement('ul');
var capitolHillHourly = capitolHill.storeSales();
console.log(capitolHillHourly);
for (var i = 0; i < storeHours.length; i++){
  var firstlistItem = document.createElement('li');
  firstlistItem.textContent = capitolHill[1];
};
body.appendChild(firstList);

var alki = {
  storeName: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSales: 4.6,
  hourlySales: [],
  randomCust: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  storeSales: function(){
    var total = 0;
    for (var i = 0; i < storeHours.length - 1; i++) {
      this.hourlySales.push(Math.ceil(this.randomCust() * this.avgSales));
      console.log('sales is: ' + this.hourlySales);
      total = total + this.hourlySales[i];
      console.log('total is: ' + total);
    }
  }
};
var body = document.getElementsByTagName('body')[0];
var firstList = document.createElement('ul');
var alkiHourly = alki.storeSales();
console.log(alkiHourly);
for (var i = 0; i < storeHours.length; i++){
  var firstlistItem = document.createElement('li');
  firstlistItem.textContent = alki[1];
};
document.body.appendChild(firstList);
