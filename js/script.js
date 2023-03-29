//ELEMENTS
const play = document.querySelector('.play-button');
const container = document.querySelector('.container');
let counterBox = 0;

//aggiungo la classe hide al container
container.classList.add('hide');
console.log(container);

//AZIONE PLAY
play.addEventListener('click', function(){
  //al click il button play prende la classe hide e il container la rimuove
  play.classList.add('hide');
  container.classList.remove('hide');

  for(let i = 0; i < 100; i++){
    const currentbox = createBox();
    container.appendChild(currentbox);
    //inserisco le condizioni a seconda dei livelli

    //aggiungo al box l'id con un numero progressivo da 1 a 100
    currentbox.boxId = i + 1;

    //Al click del box, il box si colora e restituisce il numero id in console
    currentbox.addEventListener('click',function(){
      //ali click del box assegno la classe 'clicked'
      this.classList.toggle('clicked');
      //assegno l'id alla variabile counterBox
      counterBox = this.boxId;
      //al click di un box, visualizzo in console il numero corrispondente tramite l'id
      console.log(this.boxId);
    })
  }
})

/*----------------------FUNCTION------------------------*/
//genero il box
function createBox(){
  const newBox = document.createElement('div');
  newBox.className = 'box';  
  return newBox;
}