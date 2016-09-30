'use strict';

var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
var storeLocations = [];
var salmonTable = document.getElementById('salmonTable');
var salesInput = document.getElementById('salesInput');

function Store(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.averageCustomersPerHour = [];
  this.averageCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  this.numOfCustomersPerHour();
  this.cookiesPerCustomer();
  storeLocations.push(this);
}

Store.prototype.render = function() {
  var trRowName = document.createElement('tr');
  var tdStore = document.createElement('td');
  tdStore.textContent = this.name;
  trRowName.appendChild(tdStore);
  for (var i = 0; i < this.averageCookiesPerHour.length; i++) {
    var tdCell = document.createElement('td');
    tdCell.textContent = this.averageCookiesPerHour[i];
    trRowName.appendChild(tdCell);
  };

  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookiesPerDay;
  trRowName.appendChild(tdTotal);
  salmonTable.appendChild(trRowName);
};

Store.prototype.numOfCustomersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.averageCustomersPerHour.push(singleHourCustomers);
  }
};

Store.prototype.cookiesPerCustomer = function() {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.averageCustomersPerHour[i] * this.avgCookies);
    this.averageCookiesPerHour.push(singleHourCookies);
    this.totalCookiesPerDay += singleHourCookies;
  }
};

function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = null;
  salmonTable.appendChild(tableRow);
  tableRow.appendChild(thElement);
  for (var i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    tableRow.appendChild(thElement);
  }

  thElement = document.createElement('th');
  thElement.textContent = 'Location Total';
  tableRow.appendChild(thElement);
  salmonTable.appendChild(tableRow);
};

function renderAllStores() {
  for (var i = 0; i < storeLocations.length; i++) {
    storeLocations[i].render();
  }
};

function makeFooterRow() {
  var tableRow = document.createElement('tr');
  tableRow.textContent = 'Totals';
  salmonTable.appendChild(tableRow);
  var totalCookies = 0;
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < storeLocations.length; j++) {
      hourlyTotal = hourlyTotal + storeLocations[j].averageCookiesPerHour[i];
      totalCookies += storeLocations[j].averageCookiesPerHour[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = totalCookies;
  tableRow.appendChild(tdElement);
}

new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


function dataInput(event) {
  event.preventDefault();
  if (!event.target.name.value || !event.target.minCustomers.value || !event.target.maxCustomers.value || !event.target.avgCookies.value) {
    return alert('Fields cannot be empty!');
  }

  event.target.name = null;
  event.target.minCustomers = null;
  event.target.maxCustomers = null;
  event.target.avgCookies = null;

  var name = event.target.name.value;
  var minCustomers = parseInt(event.target.minCustomers.value);
  var maxCustomers = parseInt(event.target.maxCustomers.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);

  salmonTable.textContent = null;

  var storeExist = doesStoreExist(storeLocations, name);
  var i;

  function doesStoreExist(x,y) {
    for (var i = 0; i < x.length; i++) {
      if (x[i].name === y) {
        index = i;
        return true;
      }
    }
    return false;
  }

  doesStoreExist(storeLocations, name);

  if (storeExist === true) {
    storeLocations[i].minCustomers = parseInt(minCustomers);
    storeLocations[i].maxCustomers = parseInt(maxCustomers);
    storeLocations[i].avgCookies = parseFloat(avgCookies);
    storeLocations[i].averageCustomersPerHour = [];
    storeLocations[i].averageCookiesPerHour = [];
    storeLocations[i].totalCookiesPerDay = 0;
    storeLocations[i].numOfCustomersPerHour();
    storeLocations[i].cookiesPerCustomer();
  }

  if (storeExist === false) {
    var newStore = new Store(name, minCustomers, maxCustomers, avgCookies);
  }

  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
}


makeHeaderRow();
renderAllStores();
makeFooterRow();

salesInput.addEventListener('submit', dataInput);
