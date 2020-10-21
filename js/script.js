var userKm = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
var userAge = parseInt(prompt('Quanti anni hai?'));

var ticketPricePerKm = 0.21;
var ticketPrice = userKm * ticketPricePerKm;
var under18Discount = 0.2;
var over65Discount = 0.4;

if (!isNaN(userKm) || !isNaN(userAge)) {
  if (userAge < 18) {
    ticketPrice = ticketPrice - (ticketPrice * under18Discount);
  } else if (userAge >= 65) {
    ticketPrice = ticketPrice - (ticketPrice * over65Discount);
  }
} else {
    alert('Attenzione! Inserisci soltanto valori numerici.');
}

document.getElementById('ticket').innerHTML = 'Il tuo biglietto ha un prezzo di ' + ticketPrice.toFixed(2) + '€';
