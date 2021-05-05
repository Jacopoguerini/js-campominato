/*
I numeri non possono essere duplicati.
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.*/

// variabili
var randomStart = 1;
var randomEnd = 100;
// numero di bombe
var bombsNumber = 16;
// elenco bombe
var bombsList = [];
// numeri da inserire da parte dell'utente
var numbersToInsert = randomEnd - bombsNumber;
var playerNumbers = [];
// vite
var lives = 5;
// punteggio
var score = 0;

// Funzione per generare numeri casuali tra 1 e 100
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione per univocità 
function arrayPresence(element, list) {

    for (var i = 0; i < list.length; i++) {
        if (element == list[i]) {
            return true;
        }
    }
    return false;
}

// Creazione di 16 numeri casuali: funzione e creazione array
for (var i = 0; i < bombsNumber; i++) {
    bombsList.push(randomNumber(randomStart, randomEnd));
}
console.log(bombsList);

// Ciclo per far inserire i numeri all'utente x volte con x = NumbersToInsert

for (var i = 0; i < 5; i++) {
    playerNumbers.push(parseInt(prompt("Inserisci qui un numero tra 1 e 100, diverso ogni volta")));
}
console.log(playerNumbers);