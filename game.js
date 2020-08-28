import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './model/snake.js';
import {update as updateFood, draw as drawFood} from './model/food.js';
import {outsideGrid} from './model/grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {

  if(gameOver) {
    if(confirm('Nigga you lost. \nPress ok to try again, fool')){
      window.location = '/';
    }
    return alert('Oh nigga, you gave up, huh?')
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / SNAKE_SPEED)
    return;

  lastRenderTime = currentTime;

  update();
  draw();
}



window.requestAnimationFrame(main);

function update(){
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

