// COSTANTI
var PRICE_PER_KM = 0.21;
var UNDER_18_DISCOUNT = 0.2;
var OVER_65_DISCOUNT = 0.4;
var MIN_WAGON = 1;
var MAX_WAGON = 16;
var MIN_CODE = 9000;
var MAX_CODE = 10000;

var generateButtonEl = document.getElementById('generateButton');

var userNameEl = document.getElementById('userName');
var userKmEl = document.getElementById('userKm');
var userAgeEl = document.getElementById('userAge');

var ticketNameEl = document.getElementById('ticketName');
var ticketOfferEl = document.getElementById('ticketOffer');
var ticketWagonEl = document.getElementById('ticketWagon');
var ticketCodeEl = document.getElementById('ticketCode');
var ticketPriceEl = document.getElementById('ticketPrice');

generateButtonEl.addEventListener('click', function() {

  var userName = userNameEl.value;
  var userKm = userKmEl.value;
  var userAge = userAgeEl.value;

  var ticketPrice = parseInt(userKm.value) * PRICE_PER_KM;
  var ticketOfferDescription = 'Biglietto Standard';

  if (userAge == 'under18') {
    ticketPrice = ticketPrice -= (ticketPrice * UNDER_18_DISCOUNT);
    ticketOfferDescription = 'Biglietto Under 18';
  } else if (userAge == 'over65') {
    ticketPrice = ticketPrice -= (ticketPrice * OVER_65_DISCOUNT);
    ticketOfferDescription = 'Biglietto Over 65';
  }

  var ticketWagon = Math.floor(Math.random() * (MAX_WAGON - MIN_WAGON) + MIN_WAGON);
	var ticketCode = Math.floor(Math.random() * (MAX_CODE - MIN_CODE) + MIN_CODE);

  ticketNameEl.innerHTML = userName;
  ticketOfferEl.innerHTML = ticketOfferDescription;
  ticketWagonEl.innerHTML = ticketWagon;
  ticketCodeEl.innerHTML = ticketCode;
  ticketPriceEl.innerHTML = ticketPrice + '€';

})
