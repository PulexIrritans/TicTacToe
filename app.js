//start game part

const startGameBtnElement = document.querySelector('.btn-container .submit-btn');
const gamePlayElement = document.getElementById('gameplay');

function startGame() {

    // hier muss noch eine Clear-Board-Funktion rein
    gamePlayElement.style.display='block';
}

startGameBtnElement.addEventListener('click', startGame);

// gameplay part

const gameFieldArray = document.querySelectorAll('.field');
const gameFieldGridElement = document.getElementById('gamefield');
console.log(gameFieldGridElement);


function test(event) {

    
    // der EventListener auf einem Grid gibt mir das exakte List-Item mit aus, das geklickt wurde.
}


gameFieldGridElement.addEventListener('click', test)

let playerID = 1;

