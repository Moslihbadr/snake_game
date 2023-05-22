let scoreElement  = document.getElementById('score');
let highScoreElement = document.getElementById('high-score');
let gameBoard = document.querySelector('.gameBoard');
let foodX, foodY;
let headX, headY;
let x = 0, y = 0;
let snake = [];
let score = 0;
let highScore = localStorage.getItem('high-score');


// Update the score and highScore elements
function updateScore() {
  scoreElement.innerText = score;
  highScoreElement.innerText = highScore;
}

// Update the high score if the current score exceeds it
function updateHighScore() {
  if (score > highScore) {
    highScore = score;
    highScoreElement.innerText = highScore;
    localStorage.setItem('high-score', highScore);
  }
}


// Change the food position randomly from 1 to 30
function changeFoodPosition() {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
}

// Change the head position randomly from 1 to 30
function changeHeadPosition() {
  headX = Math.floor(Math.random() * 30) + 1;
  headY = Math.floor(Math.random() * 30) + 1;
}

// Change snake position
function move() {
  window.addEventListener('keydown', (e) => {
    if (e.key === "ArrowUp") {
      x = 0;
      y = -1;
    } else if (e.key === "ArrowDown") {
      x = 0;
      y = 1;
    } else if (e.key === "ArrowRight") {
      x = 1;
      y = 0;
    } else if (e.key === "ArrowLeft") {
      x = -1;
      y = 0;
    }
  });
}

// Draw the food and snake
function drawGameBoard() {
  let boardHTML = '';
  boardHTML += `<span class="food" style="grid-area:${foodY} / ${foodX}"></span>`;

  // Update the position of each segment of the snake's body
  for (let i = snake.length - 1; i > 0; i--) {
    snake[i] = snake[i-1];
  }

  // Set the position of the snake's head
  snake[0] = [headX , headY];

  // Add an HTML element for each segment of the snake's body to the board  
  for (let i = 0; i < snake.length; i++) {
    boardHTML += `<span class="head" style="grid-area:${snake[i][1]} / ${snake[i][0]}"></span>`;
  }

  // Update the game board on the screen with the new positions of the snake and the food
  gameBoard.innerHTML = boardHTML;
}

// Update the snake's position and draw the game board
function updateGame() {
  // Update the head position
  headX += x;
  headY += y;

  // Check if the head position matches the food position
  if (headX === foodX && headY === foodY) {
    // Add a new body part to the snake
    snake.push([foodX, foodY]);

    // increment the score
    score ++

    // Check if there is a high score stored in localStorage
    if (localStorage.getItem('high-score')) {
      // Retrieve the high score from localStorage
      highScore = parseInt(localStorage.getItem('high-score'));

      // Update the highScore variable
      highScoreElement.innerText = highScore;
    }
    updateScore();
    updateHighScore();
    
    // Generate a new food position
    changeFoodPosition();
  }

  // Draw the game board with updated positions
  drawGameBoard();
}

// Initialize the game
function init() {
  changeFoodPosition();
  changeHeadPosition();
  drawGameBoard();
  setInterval(updateGame, 300);
  move();
  updateScore()
}

init();
