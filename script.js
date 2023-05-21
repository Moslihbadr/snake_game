let score = document.getElementById('score');
let highScore = document.getElementById('high-score');
let gameBoard = document.querySelector('.gameBoard');
let foodX, foodY;
let headX, headY;
let x = 0, y = 0;
let snake = [];

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
  boardHTML += `<span class="head" style="grid-area:${headY} / ${headX}"></span>`;
  gameBoard.innerHTML = boardHTML;
}

// Update the snake's position and draw the game board
function updateGame() {
  headX += x;
  headY += y;
  if (headX === foodX && headY === foodY) {
    snake.push({
      x:headX, y:headY
    })
    changeFoodPosition();
  }
  drawGameBoard();
}

// Initialize the game
function init() {
  changeFoodPosition();
  changeHeadPosition();
  drawGameBoard();
  setInterval(updateGame, 300);
  move();
}

init();
