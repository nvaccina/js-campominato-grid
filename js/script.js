//ELEMENTS
const play = document.querySelector('.play-button');
const container = document.querySelector('.container');
const levelsSelect = document.getElementById('levels');

let counterBox = 0;
let totBox;

//aggiungo la classe hide al container
container.classList.add('hide');

//AZIONE PLAY
play.addEventListener('click', function(){
  //al click il button play e la select prendono la classe hide e il container la rimuove
  play.classList.add('hide');
  levelsSelect.classList.add('hide');
  container.classList.remove('hide');
  
  const currentbox = createBox();

  for(let i = 0; i < totBox; i++){
    const currentbox = createBox();
    container.appendChild(currentbox);
    console.log(totBox);    

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
  //inserisco le dimensioni del box e il numero tot dei box in base al livello selezionato
  let indiceSelezionato = levelsSelect.selectedIndex;
  let optionSelezionata = levelsSelect.options[indiceSelezionato];
  let valueOption = optionSelezionata.value;

  if(valueOption == easy.value){
    newBox.classList.add('easy-box');
    totBox = 49;
  }else if(valueOption === medium.value){
    newBox.classList.add('medium-box');
    totBox = 81;
  }else if(valueOption === difficult.value){
    newBox.classList.add('difficult-box');
    totBox = 100;
  }
  return newBox;  
}
