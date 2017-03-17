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
//  this.storeSales();
  this.createTblFunc = function(){
    var body = document.getElementById('body');
    console.log(body);
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
  //    td.innerText = this.name;
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
  storeList.push(this);

}

/*
function renderHTML() {
  var table = document.createElement('table')[0];
  body.appendChild(table);
  var thead = document.createElement('thead');
  table.appendChild(thead);
  var tbody = document.createElement('tbody');
  thead.appendChild(tbody);
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td = document.createElement('td');
  td.innerText = StoreName;
  thead.appendChild(td);
  for(var i = 0; i < storeHours.length; i++) {
    var tblHead = document.createElement('th');
    tblHead.innerText = storeHours[i];
    thead.appendChild(tblHead);
  }
  renderHTML();
};*/
var newStoreForm = document.getElementById('newStoreInputForm');
function newStoreName(event){
  event.preventDefault();
  var storeEntryForm = event.target;
  //Amanda's   var name = event.target.elements.storeName.value;
  console.log('storeEntryForm');
  var newStoreName = storeEntryForm.elements['formButton'].value;
  //var name = event.target.elements.minCust.value
  console.log('newStoreForm logic');
  var newMinCustValues = storeEntryForm.elements['minCust'].value;
  var newMaxCustValues = storeEntryForm.elements['maxCust'].value;
  var newAvgSalesValues = storeEntryForm.elements['avgSales'].value;
  form.reset();
  button.addEventListener('submit', newStoreName);
}
//var newStoreName = event.target

document.getElementsByTagName('newStoreName');
document.getElementsByTagName('newMinCust');
document.getElementsByTagName('newMaxCust');
document.getElementsByTagName('newAvgSales');
/*

event.addEventListener('submit', newStoreName);

var newStoreForm = form.getElementById('newStoreInputForm');
function newStoreName(event){
  event.preventDefault();
  var storeEntryForm = event.target;
  console.log(storeEntryForm);
  var newStoreName = storeEntryForm.elements['name'].value;
  console.log(newStoreName);
  var newMinCustValues = storeEntryForm.elements['minCust'].value;
  var newMaxCustValues = storeEntryForm.elements['maxCust'].value;
  var newAvgSalesValues = storeEntryForm.elements['avgSales'].value;
  form.getElementById('newStoreInputForm').reset();
}
newStoreForm.addEventListener('submit', newStoreName);
  /*
name, minCust, maxCust, avgSales
'use strict';

var form = form.getElementById('the-form');
function alertTheUser(event){
  event.preventDefault(); // stops the form from submitting and leaving the page.
  // time for the harvest
  var theFormItself = event.target;
  // the "elements" attribute of the event.target object holds (for a form) all of the form fields by name
  console.log(theFormItself.elements['firstname'].value);
};
form.addEventListener('submit', alertTheUser);

var firstname = form.getElementById('firstname');
function capitalizeEverything(event){
  // var theText = this.value;
  this.value = "You've focused on me!";
  console.log(this);
  console.log(event.target);
}
firstname.addEventListener('focus', capitalizeEverything);

  form.getElementById('newStoreName')
  form.getElementById('newMinCust')
  form.getElementById('newMaxCust')
  form.getElementById('newAvgSales')
}

form.getElementById('form1').addEventListener('submit', function(evt){
    evt.preventDefault();

/*
var firstnpike = new StoreName('1st and Pike', 23, 65, 6.3);
var seatacAirport = new StoreName('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new StoreName('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreName('Capitol Hill', 20, 38, 2.3);
var alki = new StoreName('Alki', 2, 16, 4.6);

firstnpike.createListItems();
seatacAirport.createListItems();
seattleCenter.createListItems();
capitolHill.createListItems();
alki.createListItems();

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
var body = form.getElementsByTagName('body')[0];
var firstList = form.createElement('ul');
var seatacAirportHourly = seatacAirport.storeSales();
console.log(seatacAirportHourly);
for (var i = 0; i < storeHours.length; i++){
  var firstlistItem = form.createElement('li');
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
var body = form.getElementsByTagName('body')[0];
var firstList = form.createElement('ul');
var seattleCenterHourly = seattleCenter.storeSales();
console.log(seattleCenterHourly);
for (var i = 0; i < storeHours.length; i++){
  var firstlistItem = form.createElement('li');
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
var body = form.getElementsByTagName('body')[0];
var firstList = form.createElement('ul');
var capitolHillHourly = capitolHill.storeSales();
console.log(capitolHillHourly);
for (var i = 0; i < storeHours.length; i++){
  var firstlistItem = form.createElement('li');
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
var body = form.getElementsByTagName('body')[0];
var firstList = form.createElement('ul');
var alkiHourly = alki.storeSales();
console.log(alkiHourly);
for (var i = 0; i < storeHours.length; i++){
  var firstlistItem = form.createElement('li');
  firstlistItem.textContent = alki[1];
};
form.body.appendChild(firstList);

*/
