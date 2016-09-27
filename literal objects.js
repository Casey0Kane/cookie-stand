var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  randomCustPerHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookieSales: 0,
  calcRandomCustPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour.push = (math.floor(Math.random()*(this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    return console.log('Random hourly customers have been calculated');
  },
  calcTotalCookiesSoldEachHour: function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailyCookieSales += this.totalCookiesSoldEachHour[i];
    }
  }
  render: function() {
    this.calcTotalCookiesSoldEachHour();
    var firstAndPikeUL = document.getElementById('firstAndPikeUL');
    for (var i = 0; i < hours.length; i++) {
    //create an element
    var liEl = document.getElementById('firstAndPikeUL');
    // give it contenet
    //6am: 16 cookies
    liEl.textContent = hours[i] + ': 'this.totalCookiesSoldEachHour[i]; + 'cookies';
    // append it
    firstAndPikeUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
    firstAndPikeUL.appendChild(liEl);
  }
};

firstAndPike.render();

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seaTacAirport = {
  locationName: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  randomCustPerHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookieSales: 0,
  calcRandomCustPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour.push = (math.floor(Math.random()*(this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    return console.log('Random hourly customers have been calculated');
  },
  calcTotalCookiesSoldEachHour: function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailyCookieSales += this.totalCookiesSoldEachHour[i];
    }
  }
  render: function() {
    this.calcTotalCookiesSoldEachHour();
    var seaTacUl = document.getElementById('seaTacUl');
    for (var i = 0; i < hours.length; i++) {
    //create an element
    var liEl = document.getElementById('seaTacUl');
    // give it contenet
    //6am: 16 cookies
    liEl.textContent = hours[i] + ': 'this.totalCookiesSoldEachHour[i]; + 'cookies';
    // append it
    seaTacUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
    seaTacUl.appendChild(liEl);
  }
};

seaTacAirport.render();

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seattleCenter = {
  locationName: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  randomCustPerHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookieSales: 0,
  calcRandomCustPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour.push = (math.floor(Math.random()*(this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    return console.log('Random hourly customers have been calculated');
  },
  calcTotalCookiesSoldEachHour: function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailyCookieSales += this.totalCookiesSoldEachHour[i];
    }
  }
  render: function() {
    this.calcTotalCookiesSoldEachHour();
    var seattleCenterUl = document.getElementById('seattleCenterUl');
    for (var i = 0; i < hours.length; i++) {
    //create an element
    var liEl = document.getElementById('seattleCenterUl');
    // give it contenet
    //6am: 16 cookies
    liEl.textContent = hours[i] + ': 'this.totalCookiesSoldEachHour[i]; + 'cookies';
    // append it
    seattleCenterUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
    seattleCenterUl.appendChild(liEl);
  }
};

seattleCenter.render();

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var capitolHill = {
  locationName: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  randomCustPerHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookieSales: 0,
  calcRandomCustPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour.push = (math.floor(Math.random()*(this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    return console.log('Random hourly customers have been calculated');
  },
  calcTotalCookiesSoldEachHour: function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailyCookieSales += this.totalCookiesSoldEachHour[i];
    }
  }
  render: function() {
    this.calcTotalCookiesSoldEachHour();
    var capitolHillUl = document.getElementById('capitolHillUl');
    for (var i = 0; i < hours.length; i++) {
    //create an element
    var liEl = document.getElementById('capitolHillUl');
    // give it contenet
    //6am: 16 cookies
    liEl.textContent = hours[i] + ': 'this.totalCookiesSoldEachHour[i]; + 'cookies';
    // append it
    capitolHillUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
    capitolHillUl.appendChild(liEl);
  }
};

capitolHill.render();

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var alki = {
  locationName: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  randomCustPerHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookieSales: 0,
  calcRandomCustPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour.push = (math.floor(Math.random()*(this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    return console.log('Random hourly customers have been calculated');
  },
  calcTotalCookiesSoldEachHour: function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailyCookieSales += this.totalCookiesSoldEachHour[i];
    }
  }
  render: function() {
    this.calcTotalCookiesSoldEachHour();
    var alkiUl = document.getElementById('alkiUl');
    for (var i = 0; i < hours.length; i++) {
    //create an element
    var liEl = document.getElementById('alkiUl');
    // give it contenet
    //6am: 16 cookies
    liEl.textContent = hours[i] + ': 'this.totalCookiesSoldEachHour[i]; + 'cookies';
    // append it
    alkiUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
    alkiUl.appendChild(liEl);
  }
};

alki.render();
