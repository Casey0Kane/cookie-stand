'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var tbl = document.createElement('table');

function CookieStand (location, minHourCust, maxHourCust, avgCookieCust) {
  this.location = location;
  this.minHourCust = minHourCust;
  this.maxHourCust = maxHourCust;
  this.avgCookieCust = avgCookieCust;
  this.hourTotals = [];
  this.dailyTotal = 0;
//
  this.cookiesPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.floor(this.avgCookieCust * this.randomCustHour());
      console.log('The amount of cookies purchased per hour is ' + cookiesPerHour);
      this.hourTotals.push(cookiesPerHour);
      this.dailyTotal += cookiesPerHour;
      console.log('The sum of the hourly totals is ' + this.dailyTotal);
    }
  };
  this.randomCustHour = function() {
    return Math.floor(Math.random() * (this.maxHourCust - this.minHourCust + 1)
      + this.minHourCust);
  };


  this.makeList = function() {
    this.cookiesPerHour();
    console.log('The hourly totals are: ' + this.hourTotals);
    console.log('The daily total is: ' + this.dailyTotal);
    var heading = document.createElement('tr');
    console.log(heading);
    var blank = document.createElement('td');
    blank.textContent = 'Location';

    var headerRow = document.createElement('thead');
    headerRow.appendChild(blank);

    for (i = 0; i < hours.length; i++) {
      var td = document.createElement('td');
      td.innerHTML = hours[i];
      headerRow.appendChild(td);
    }

    tbl.appendChild(headerRow);

    var row = document.createElement('tr');
    var location = document.createElement('th');
    location.textContent = this.location;
    row.appendChild(location);

    for(var i = 0; i < hours.length; i++) {
      var numCookie = document.createElement('td');
      numCookie.textContent = this.hourTotals[i];
      row.appendChild(numCookie);
      tbl.appendChild(row);
    }
  };
  document.body.appendChild(tbl);
};

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
