let score = document.getElementById('score');
let highScore = document.getElementById('high-score');
let gameBoard = document.querySelector('.gameBoard');

function updatePosition() {
  let x = Math.round(Math.random() * 30);
  let y = Math.round(Math.random() * 30);
  return [x, y]; // return an array with both x and y values
}

let foodPosition = updatePosition();
let foodX = foodPosition[0];
let foodY = foodPosition[1];

function drawFood(x,y) {
  return `<span class="head" style="grid-template-area:${y} / ${x}"></span>`;
}

// drawSnake(headY, headX);
gameBoard.innerHTML = `<span class="food" style="grid-area:${foodY} / ${foodX}"></span>`;