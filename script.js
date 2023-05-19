let score = document.getElementById('score');
let highScore = document.getElementById('high-score');
let gameBoard = document.querySelector('.gameBoard');
let foodX ,foodY;
let headX ,headY;

// change the food position randomly from 1 to 30
function changeFoodPosition() {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
}

// change the head position randomly from 1 to 30
function changeHeadPosition() {
  headX = Math.floor(Math.random() * 30) + 1;
  headY = Math.floor(Math.random() * 30) + 1;
}

// draw the food
function drawFood() {
  gameBoard.innerHTML += `<span class="food" style="grid-area:${foodY} / ${foodX}"></span>`;
}

// draw the sanke
function drawSnake() {
  gameBoard.innerHTML += `<span class="head" style="grid-area:${headY} / ${headX}"></span>`;
}

function init() {
  drawFood();
  drawSnake();
}

changeFoodPosition();
changeHeadPosition();
init();