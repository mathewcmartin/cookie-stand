'use strict';

var storeList = [];
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'];

var firstnpike = new StoreName('1st and Pike', 23, 65, 6.3);
var seatacAirport = new StoreName('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new StoreName('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreName('Capitol Hill', 20, 38, 2.3);
var alki = new StoreName('Alki', 2, 16, 4.6);

var body = document.getElementByTagName('body')[0]; // CHECK D.Lim html ********** why TAG?
var table = document.createElement('table');
var tbody = document.createElement('tbody');

function StoreName(name, minCust, maxCust, avgCookies) {
  this.name = name;
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
      console.log(this.cookiesHourly);
    }
    this.salesArr.push(total);
    console.log(this.salesArr);
  };
  this.generateTableRow = function(){
    this.storeSales();
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    var tData = document.createElement('td')
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
    th.innerText = storeHours[i]
    thead.appendChild(th);
  }
};
for (var i = 0; i < storeList.length; i++){
  storeList[i].generateTableRow();
}
// this.newTblRow = function() {
//   this.storeSales();
//   var tr = document.createElement('tr');
//   var tbody = document.getElementById('tbody');
//   tbody.appendChild(tr);
//   var newStoreName = document.createElement('th');
//   newStoreName.innerText = this.name;
//   tr.appendChild(newStoreName);
//
//   for (var i = 0; i < storeHours.length - 2; i++) {
//     var newTd = document.createElement('td');
//     newTd.innerText = this.salesArr[i];
//     tr.appendChild(newTd);
//   };
//   storeList.push(this);
// };
//appended code from code review. Cite Nick and Michael's work.
function createTable() {
  var table = document.createElement('table');
  .appendChild(table);
  table.id = 'bodyTable';
  var thead = document.createElement('thead');
  table.appendChild(thead);
  var tr = document.createElement('tr');
  thead.appendChild(tr);
  for (var i = 0; i < hours.length - 1; i++) {
    var th = document.createElement('th');
    th.innerText = hours[i];
    tr.appendChild(th);
  }
  var th = document.createElement('th');
  th.innerText = hours[i];
  tr.appendChild(th);
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  tbody.id = 'tableBody';
  var tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);
  tfoot.id = 'tableFoot';
};
createTable();

function hourlySalesTotal() {
  var table = document.getElementById("bodyTable");
  var tfoot = document.getElementById('tableFoot');
  table.appendChild(tfoot);
  var tr = document.createElement('tr');
  tfoot.appendChild(tr);
  tr.id = 'totalsRow';
  var th = document.createElement('th');
  th.innerText = 'Total';
  tr.appendChild(th);
  for (var i = 0; i < hours.length - 2; i++) {
    var hrlyTotal = 0;
    for (var x = 0; x < storeList.length; x++) {
      hrlyTotal += storeList[x].salesArray[i];
    }
    var footTD = document.createElement('td');
    footTD.innerText = hrlyTotal;
    footTD.style.backgroundColor = '#40B27C';
    tr.appendChild(footTD);
  }
  // For adding that last cell of the total of totals
  var totalTotal = 0;
  for (var i = 0; i < storeList.length; i++) {
    totalTotal += storeList[i].total;
  }
  var totalTd = document.createElement('td');
  totalTd.innerText = totalTotal;
  totalTd.style.backgroundColor = '#40B27C';
  tr.appendChild(totalTd);
};
// hourlyStoresTotal(); // this was in the wrong place

for (var i = 0; i < storeList.length; i++) {
  storeList[i].generateTableRow();
}
hourlyStoresTotal(); // moved it down here, so that it executes AFTER sales are generated above.

var elStoreForm = document.getElementById('newStoreForm');

function submitButton(event) {
  event.preventDefault();
  var newStoreForm = event.target;
  var strLoc = event.target.newStoreName;
  var minCst = event.target.newMinCust;
  var maxCst = event.target.newMaxCust;
  var avgCook = event.target.newAvgCookies;
  if (minCst > maxCst) {
    alert('Please double check the number values for accuracy and re-submit the form. Thank you.');
  } else {
    var formVariables = new CreateStore(strLoc.value, minCst.value, maxCst.value, avgCook.value);
    formVariables.generateTableRow();
    // making sure we add appropriate totals
    var tfoot = document.getElementById('tableFoot');
    var totalsRow = document.getElementById('totalsRow');
    tfoot.removeChild(totalsRow); // first remove the existing totals row
    hourlyStoresTotal(); // then append a new, updated totals row
  }
  elStoreForm.reset();
}

elStoreForm.addEventListener('submit',submitButton);
