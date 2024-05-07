<!--
TRACCIA

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
-->

<!--
FUNZIONE genNumeroRandom()
-->
-Prende in input due valori: min, max
--Genera un numero random in questo range
---Return : risultato

<!--
FUNZIONE pariDispari()
-->
-Prende in input un valore: totale
--SE il totale % 2 === 0
    -Variabile valore = "pari"
-- ELSE se il totale % 2 !== 0
    -Variabile valore = "dispari"
---Return : valore

<!--
ACQUISIRE IN INPUT
-->
-Mettere un ciclo che chieda l'input dall'utente (pari o dispari) fino a che non scrive una delle due alternative corrette
--Mettere un ciclo che chieda l'input dall'utente (numero) fino a che non scrive un numero da 1 a 5

<!--
RICHIAMARE FUNZIONE genNumeroRandom()
-->
-Creare la variabile numeroComputer = genNumeroRandom(1, 5)

<!--
CALCOLARE LA SOMMA DI DUE NUMERI
-->
-Creare la variabile somma = numeroComputer + numeroUtente

<!--
RICHIAMARE FUNZIONE pariDispari()
-->
-Creare la variabile risultato = pariDispari(somma)

<!--
CAPIRE IL VINCITORE
-->
-SE l'utente aveva scelto "pari" e risultato = "pari"
    -Stampare il messaggio di vittoria per l'utente
-ELSE SE l'utente aveva scelto "dispari" e risultato = "dispari"
    -Stampare il messaggio di vittoria per l'utente
-ELSE
    -Stampare il messaggio di vittoria per il computer