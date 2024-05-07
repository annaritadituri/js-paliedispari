'use strict';

//////////////////////////////////////////////////////////

//ACQUISIRE LA PAROLA IN INPUT
const inputIniziale = prompt("Inserisci la parola o frase che vuoi controllare:");
let input = inputIniziale;
let corretto = true;
//console.log({input});

//NON CONTARE GLI SPAZI NEL CASO DI UNA FRASE
let i = 0;
while(i < input.length) {

    if (input[i] === " ") {

        input = input.replace(" ", "");
        //console.log({input});
        
    }

    i++;

}

//RENDERE L'INPUT UTILIZZABILE
input = input.toUpperCase();
//console.log({input});

//CREARE UN CICLO PER CONTROLLARE LETTERA PER LETTERA
i = 0;
let j = input.length;

while (i < input.length && corretto === true) {

    if (input[i] !== input.charAt(j - 1)) {

        corretto = false;

    }

    i++;
    j--;

}

//STAMPARE L'ESITO
if (corretto === true) {

    console.log(`La parola o frase inserita (${inputIniziale}) è palindroma.`);

} else {

    console.log(`La parola o frase inserita (${inputIniziale}) non è palindroma.`);

}