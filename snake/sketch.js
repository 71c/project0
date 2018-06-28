var cols;
var rows;
var direction;
var row;
var col;
var draws;
var snakeLength;
var snake;
var egg;
var gameOver;
var score;
var font;

function setup() {
  createCanvas(570, 450);
  rows = 15;
  cols = 19;
  direction = "right";
  row = 7;
  col = 9;
  draws = 0;
  snakeLength = 3;
  snake = [];
  snake.push([col - 2, row]);
  snake.push([col - 1, row]);
  snake.push([col, row]);
  egg = [int(random(cols)), int(random(rows))];
  gameOver = false;
}

function draw() {
  background(114);
  stroke(114);
  strokeWeight(4);
  fill(0);
  if(!gameOver) {
    draws++;
    if (draws % 9 == 0) {
      if (direction == "up")
        row--;
      else if (direction == "down")
        row++;
      else if (direction == "left")
        col--;
      else if (direction == "right")
        col++;
      if(col == egg[0] && row == egg[1]) {
        egg = [int(random(cols)), int(random(rows))];
        snakeLength++;
      }

      if(col < 0 || col > 18 || row < 0 || row > 14)
        gameOver = true;

      if(snake.length == snakeLength)
        snake.splice(0, 1);
      snake.push([col, row]);

      for(var i = 0; i < snake.length - 1; i++) {
        if(snake[i][0] == col && snake[i][1] == row)
          gameOver = true;
      }
    }
    for (let pos of snake) {
      rect(pos[0] * width / cols, pos[1] * height / rows, width / cols, height / rows);
    }
    rect(egg[0] * width / cols, egg[1] * height / rows, width / cols, height / rows);

    fill(255);
    text("score: " + (snakeLength - 3), 10, 30);
  } else {
    text("Game Over", 10, 30);
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    if(direction != "down")
      direction = "up";
  } else if (keyCode == DOWN_ARROW) {
    if(direction != "up")
      direction = "down";
  } else if (keyCode == LEFT_ARROW) {
    if(direction != "right")
      direction = "left";
  } else if (keyCode == RIGHT_ARROW) {
    if(direction != "left")
      direction = "right";
  }
}