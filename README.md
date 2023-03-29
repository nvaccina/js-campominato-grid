Campominato
===
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette un messaggio in console con il numero della cella cliccata.<br>
**Bonus**<br>
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
## Steps
- Creare la struttra del container, bottone e box su html;
- Dare stili agli elementi;
- Creare una costante per il container e una per il bottone;
- Al click del bottone il container diventa display:block e il bottone display:none;
- Genero il box con la classe "box";
- Al click del box aggiungo la classe clicked e visualizzo in cosole l'id con il numero rispettivo al box cliccato;
- Aggiungo una select per i 3 diversi livelli di difficoltà;
- Creo 3 classi differenti con 3 larghezze dei box diverse, che poi andrò ad aggiungere al box a seconda della selezione fatta nella select; 
