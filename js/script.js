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
// var maxAttempts = randomEnd - bombsNumber;
// variabile sotto da commentare, solo debug. Decommentare la variabile qui sopra
var maxAttempts = 5;
var attempts = [];
// punteggio
var score = 0;
var gameOver = false;

// Funzione per generare numeri casuali
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione per univocità di un numero all'interno di un array
function arrayPresence(element, list) {

    for (var i = 0; i < list.length; i++) {
        if (element == list[i]) {
            return true;
        }
    }
    return false;
}

// Selezione difficoltà
var difficulty;
do {
    var difficulty = parseInt(prompt("Inserisci un numero tra 0 e 2 per selezionare la difficoltà.\n0: facile\n1: intermedio\n2: difficile"));
} while (isNaN(playerNumber) || difficulty == 0)
console.log("Difficoltà selezionata: "+ difficulty);

// Creazione di 16 numeri casuali e univoci: lista numeri delle bombe
while (bombsList.length < bombsNumber) {
    var bomb = randomNumber(randomStart, randomEnd);
    
    if (arrayPresence(bomb, bombsList) == false) {
        bombsList.push(bomb);
    }
}
console.log("Elenco bombe: ", bombsList);

// Inserimento numeri da parte dell'utente x volte, con x = NumbersToInsert
while (attempts.length < maxAttempts && gameOver == false) {
    var playerNumber;
    do {
        var playerNumber = parseInt(prompt("Inserisci qui un numero tra 1 e 100:"));
    } while (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 100)

    // Condizione di fine gioco

    if (arrayPresence(playerNumber, bombsList) == true) {
        gameOver = true;
        alert("Purtroppo hai perso!\nIl tuo punteggio è: " + attempts.length)
    } else if (arrayPresence(playerNumber, attempts) == false) {
        attempts.push(playerNumber);
    }
    console.log(playerNumber, attempts.length);
}
score = attempts.length;
if (attempts.length == maxAttempts) {
    alert("Complimenti, hai vinto!\nIl tuo punteggio è: "+ score);
}

console.log(attempts);