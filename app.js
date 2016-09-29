'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allLocations = [];
var salesDataTable = document.getElementById('salesdata');

function CookieStand(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randomCustPerHour = [];
  this.totalCookiesSoldEachHour = [];
  this.totalDailyCookieSales = 0;
  this.calcRandomCustPerHour = function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  };
  this.calcTotalCookiesSoldEachHour = function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailyCookieSales += this.totalCookiesSoldEachHour[i];
    }
  };
  this.render = function() {
    this.calcTotalCookiesSoldEachHour();

    var rowElement = document.createElement('tr');

    var headerCell = document.createElement('th');
    headerCell.textContent = this.locationName;
    rowElement.appendChild(headerCell);

    for (var i = 0; i < hours.length; i++) {
      var dataCell = document.createElement('td');
      dataCell.textContent = this.totalCookiesSoldEachHour[i];
      rowElement.appendChild(dataCell);
    }

    dataCell = document.createElement('td');
    dataCell.textContent = this.totalDailyCookieSales;
    rowElement.appendChild(dataCell);

    salesDataTable.appendChild(rowElement);

  };
  allLocations.push(this);
}

new CookieStand('First and Pike', 23, 65, 6.3);
new CookieStand('Seatac Airport', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7);
new CookieStand('Capitol Hill', 20, 38, 2.3);
new CookieStand('Alki', 2, 16, 4.6);


function makeHeaderRow() {
  var rowElement = document.createElement('tr');

  var headerCell = document.createElement('th');
  headerCell.textContent = 'Locations';
  rowElement.appendChild(headerCell);

  for (var i = 0; i < hours.length; i++) {
    headerCell = document.createElement('th');
    headerCell.textContent = hours[i];
    rowElement.appendChild(headerCell);
  }

  headerCell = document.createElement('th');
  headerCell.textContent = 'Location Total';
  rowElement.appendChild(headerCell);

  salesDataTable.appendChild(rowElement);
}

function renderAllLocations() {
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
}

function makeFooterRow() {
  var rowElement = document.createElement('tr');

  var headerCell = document.createElement('th');
  headerCell.textContent = 'Hourly Totals';
  rowElement.appendChild(headerCell);

  var dailyTotalAllLocations = 0;
  for (var i = 0; i < hours.length; i++) {
    var total = 0;
    for (var j = 0; j < allLocations.length; j++) {
      total += allLocations[j].totalCookiesSoldEachHour[i];
    }
    headerCell = document.createElement('th');
    headerCell.textContent = total;
    rowElement.appendChild(headerCell);
    dailyTotalAllLocations += total;
  }

  headerCell = document.createElement('th');
  headerCell.textContent = dailyTotalAllLocations;
  rowElement.appendChild(headerCell);

  salesDataTable.appendChild(rowElement);
}


makeHeaderRow();
renderAllLocations();
makeFooterRow();

document.body.appendChild(salesdata);


var pikePlaceMarket = new CookieStand('Pike Place Market', 23, 65, 6.3);
var seaTac = new CookieStand('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStand('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStand('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStand('Alki', 2, 16, 4.6);

pikePlaceMarket.makeList();
seaTac.makeList();
seattleCenter.makeList();
capitolHill.makeList();
alki.makeList();

var handleForm = function(event) {
  event.preventDefault();

  if (!event.target.locationname.value || !event.target.mincust.value || !event.target.maxcust.value || !event.target.avgcust.value) {
    return alert('Fields cannot be empty!');
  }

  var loc = event.target.locationname.value;
  var min = parseInt(event.target.mincust.value);
  var max = parseInt(event.target.maxcust.value);
  var avg = parseInt(event.target.avgcust.value);

  event.target.locationname.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.avgcust.value = null;


  var newShop = new CookieStand(loc, min, max, avg);

  newShop.makeList();


};


form.addEventListener('submit', handleForm);
