'use strict';

//////////////////////////////////////////////////////////

//ACQUISIRE IN INPUT

let inputParola;

do {

    inputParola = prompt("Scegli pari o dispari");
    console.log({inputParola});
    inputParola = inputParola.toLowerCase();
    console.log({inputParola});

} while (inputParola !== "pari" && inputParola !== "dispari");

let inputNumero;

do {

    inputNumero = prompt ("Scegli un numero tra 1 e 5 che vuoi giocare:");
    console.log({inputNumero});
    inputNumero = parseInt(inputNumero);
    console.log({inputNumero});

} while (inputNumero > 5 || inputNumero < 1);

//RICHIAMARE FUNZIONE genNumeroRandom()
let numeroComputer = genNumeroRandom(1, 5);
console.log({numeroComputer});

//CALCOLARE LA SOMMA DI DUE NUMERI
let somma = numeroComputer + inputNumero;
console.log({somma});

//RICHIAMARE FUNZIONE pariDispari()
let risultato = pariDispari(somma);
console.log({risultato});

//CAPIRE IL VINCITORE
if (inputParola === "pari" && risultato === "pari") {
    console.log("hai vinto con pari");
} else if (inputParola === "dispari" && risultato === "dispari") {
    console.log("hai vinto con dispari");
} else {
    console.log("hai perso");
}

///////////////////////////////////////////////////////////

/*
FUNZIONE genNumeroRandom()
*/
function genNumeroRandom(min, max) {

    let numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);

    return numeroRandom;

}

/*
FUNZIONE pariDispari()
*/
function pariDispari(totale) {

    let valore;

    if (totale % 2 === 0) {

        valore = "pari";

    } else {

        valore = "dispari";

    }

    return valore;

}