'use strict';

var storeList = [];
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'];

var firstnpike = new Store('1st and Pike', 23, 65, 6.3);
var seatacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var body = document.getElementsByTagName('body')[0];
var table = document.createElement('table');
var tbody = document.createElement('tbody');

function Store(storeName, minCust, maxCust, avgCookies) {
  this.name = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.salesArr = [];
  this.randCust = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.storeSales = function() {
    var total = 0;
    for (var i = 0; i < storeHours.length - 1; i++){
      var cookiesHourly = Math.floor(this.randCust() * this.avgCookies);
      this.salesArr.push(cookiesHourly);
      total += cookiesHourly;
    }
    this.salesArr.push(total);
  };
  this.generateTableRow = function(){
    this.storeSales();
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    var tData = document.createElement('td');
    tr.appendChild(tData);
    tData.innerText = this.name;
    for (var i = 0; i < storeHours.length; i++){
      var td = document.createElement('td');
      td.innerText = this.salesArr[i];
      tr.appendChild(td);
    }
    table.appendChild(tbody);
  };
  storeList.push(this);
}

function renderHeader (){
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  var blank = document.createElement('th');
  thead.appendChild(tr);
  thead.appendChild(blank);
  table.appendChild(thead);
  body.appendChild(table);
  blank.innerText = 'Store Name';
  for (var i = 0; i < storeHours.length; i++){
    var th = document.createElement('th');
    th.innerText = storeHours[i];
    thead.appendChild(th);
  }
};

for (var i = 0; i < storeList.length; i++){
  storeList[i].generateTableRow();
}

var form = document.getElementById('newStoreForm');

function submitButton(event) {
  event.preventDefault();
  var theFormItself = event.target;
  var storeName = theFormItself.elements['storeName'].value;
  var minCust = Math.floor(theFormItself.elements['minCust'].value);
  var maxCust = Math.floor(theFormItself.elements['maxCust'].value);
  var avgCookies = theFormItself.elements['avgCookies'].value;
  if (maxCust < minCust) {
    confirm('Max number of customers should be greater than the minimum number. Please correct and resubmit');
  } else {
    var userStore = new Store(storeName, minCust, maxCust, avgCookies);
    var table = document.getElementsByTagName('table')[0];
    userStore.generateTableRow();
  }
  form.reset();
};

form.addEventListener('submit', submitButton);

var footTr = document.createElement('tr');

function renderFooter(){
  var footTd = document.createElement('td');
  footTd.innerText = 'Hourly Totals';
  footTr.appendChild(footTd);
  for (var i = 0; i < storeHours.length; i++){
    var hourlyTotal = 0;
    for(var j = 0; j < storeList.length; j++){
      hourlyTotal += storeList[j].salesArr[i];
    }
    footTd = document.createElement('td');
    footTd = innerText = hourlyTotal;
    footTr = appendChild(footTd);
  }
  tbody.appendChild(footTr);
}
renderHeader();
renderFooter();
