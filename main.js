let mainContainer = document.querySelector('.main-container');
let btn = document.getElementById('game-btn') 
const div = document.createElement('div');

// Create Grid 
function createGrid(rowCol) {
    mainContainer.style.setProperty('--grid-rows', rowCol);
    mainContainer.style.setProperty('--grid-cols', rowCol);
    for (let i = 0; i < (rowCol*rowCol); i++) {
        let div = document.createElement('div');
        div.className = 'square';
        
        mainContainer.appendChild(div);
    };
  };

//   button click function to set board from user input
btn.addEventListener('click', () => {
    mainContainer.innerHTML = ""
    let boardSize = prompt('Enter Board Size:');
    if (boardSize < 100) {
        createGrid(boardSize);
        let randomColor = setBg()
        let square = document.querySelectorAll('.square')
        for (let i =0; i < square.length; i++){
           square[i].addEventListener('mouseover', () => {
               square[i].style.background = randomColor;
           })
       }
    } else if (boardSize => 100) {
        boardSize = prompt('please enter number below 100')
        createGrid(boardSize);
        let square = document.querySelectorAll('.square')
        for (let i =0; i < square.length; i++){
           square[i].addEventListener('mouseover', () => {
               square[i].style.background = 'red';
           })
       }
    }

 })


 const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor
    // document.body.style.backgroundColor = "#" + randomColor;
    // color.innerHTML = "#" + randomColor;
  }
  