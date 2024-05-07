<!--
TRACCIA

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
-->

<!--
ACQUISIRE LA PAROLA IN INPUT
-->
-Creare una variabile che riceva la parola in input dall'utente

<!--
NON CONTARE GLI SPAZI NEL CASO DI UNA FRASE
-->
-Creare un ciclo while per scorrere tutta la lunghezza della stringa
    <!--
    nel ciclo
    -->
    -SE alla posizione i c'è uno spazio
        -Sovrascriviamo l'input scambiando il carattere " " con ""

<!--
RENDERE L'INPUT UTILIZZABILE
-->
-Uniformare tutti i caratteri per evitare che la stessa lettera non venga riconosciuta

<!--
CREARE UN CICLO PER CONTROLLARE LETTERA PER LETTERA
-->
-Creare un ciclo while che faccia i controlli solo se la variabile "corretto" (che abbiamo impostato a 1 dall'inizio) rimanga sempre === 1 e continui a controllare fino a che non arriva alla fine della parola
    -SE trova un carattere diverso
        -La variabile "corretto" diventa === 0

<!--
non serve far controllare TUTTA la parola, basta metà (differenza tra pari e dispari)
-->

<!--
STAMPARE L'ESITO
-->
-Creare un console.log con il messaggio giusto controllato con un if