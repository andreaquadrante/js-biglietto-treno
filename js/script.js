var ticketPricePerKm = 0.21;

var userKm = prompt('Quanti chilometri vuoi percorrere?');
var userAge = prompt('Quanti anni hai?');

var ticketPrice = userKm * ticketPricePerKm + '€';

console.log(ticketPrice)
