/*
I numeri non possono essere duplicati.
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.*/

// variabili
var randomStart = 1;
// numero di bombe
var bombsNumber = 16;
// elenco bombe
var bombsList = [];
// tentativi utente
var attempts = [];
// fine gioco
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
var difficultyLevel = [0, 1, 2];
do {
    var difficulty = parseInt(prompt("Inserisci un numero tra 0 e 2 per selezionare la difficoltà.\n0: facile\n1: intermedio\n2: difficile"));
} while (isNaN(difficulty) || arrayPresence(difficulty, difficultyLevel) == false);
console.log("Difficoltà selezionata: "+ difficulty);

// SWITCH -- test
var randomEnd;
switch (difficulty) {
    case 1:
        randomEnd = 80;
        alert("La difficoltà scelta è: INTERMEDIO");
        break;
    case 2:
        randomEnd = 50;
        alert("La difficoltà scelta è: DIFFICILE");
        break;
    default:
        randomEnd = 100;
        alert("La difficoltà scelta è: FACILE");
}
console.log("Massimo del range: "+ randomEnd);

//LISTA BOMBE
// Creazione di 16 numeri casuali e univoci: lista numeri delle bombe
while (bombsList.length < bombsNumber) {
    var bomb = randomNumber(randomStart, randomEnd);
    
    if (arrayPresence(bomb, bombsList) == false) {
        bombsList.push(bomb);
    }
}
console.log("Elenco bombe: ", bombsList);

//GIOCO
// Inserimento numeri da parte dell'utente x volte
var maxAttempts = randomEnd - bombsNumber;
while (attempts.length < maxAttempts && gameOver == false) {
    var playerNumber;
    do {
        var playerNumber = parseInt(prompt("Inserisci qui un numero tra 1 e 100:"));
    } while (isNaN(playerNumber) || playerNumber < randomStart || playerNumber > randomEnd)

    // Condizione di fine gioco -- SCONFITTA
    if (arrayPresence(playerNumber, bombsList) == true) {
        gameOver = true;
        alert("Purtroppo hai perso!\nIl tuo punteggio è: " + attempts.length)
    } else if (arrayPresence(playerNumber, attempts) == false) {
        attempts.push(playerNumber);
    }
    console.log(playerNumber, attempts.length);
}
// Condizione di fine gioco -- VITTORIA
if (attempts.length == maxAttempts) {
    alert("Complimenti, hai vinto!\nIl tuo punteggio è: "+ attempts.length);
}

console.log(attempts);