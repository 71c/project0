var cols = 19;
var rows = 15;
var direction = "right";
var row = 7;
var col = 9;
var draws = 0;
var snakeLength = 3;
var snake = [];
var gameOver = false;
var egg;
var score;

function setup() {
  var canvas = createCanvas(570, 450);
  canvas.parent("right");
  snake.push([col - 2, row]);
  snake.push([col - 1, row]);
  snake.push([col, row]);
  egg = [int(random(cols)), int(random(rows))];
  textSize(30);
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

      gameOver = col < 0 || col >= cols || row < 0 || row >= rows;

      if(snake.length == snakeLength)
        snake.splice(0, 1);
      snake.push([col, row]);

      for(var i = 0; i < snake.length - 1; i++) {
        if(snake[i][0] == col && snake[i][1] == row)
          gameOver = true;
      }
    }

    // draw snake
    for (let pos of snake) {
      rect(pos[0] * width / cols, pos[1] * height / rows, width / cols, height / rows);
    }

    // draw egg
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
