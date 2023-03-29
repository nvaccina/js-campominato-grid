//HTML ELEMENTS
const play = document.querySelector('.play-button');
const container = document.querySelector('.container');
let counterBox = 0;

container.classList.add('hide');

//AZIONE PLAY
play.addEventListener('click', function(){

  container.classList.remove('hide');
  play.classList.add('hide');
  console.log(container, play);


  for(let i = 0; i < 100; i++){
    const currentbox = createBox();
    container.appendChild(currentbox);

    //aggiungo al box l'id con un numero progressivo da 1 a 100
    currentbox.boxId = i + 1;

    //al click del box, il box si colora
    currentbox.addEventListener('click',function(){
      this.classList.toggle('clicked');

      //
      counterBox = this.boxId;
      console.log(this.boxId);
    })
  }
})


/*----------------------FUNCTION------------------------*/
//genero il box
function createBox() {
  const newBox = document.createElement('div');
  newBox.className = 'box';  
  return newBox;
}