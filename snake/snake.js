var cols = 19;
var rows = 15;
var direction = "right";
var row = 7;
var col = 9;
var draws = 0;
var startingSnakeLength = 3;
var snakeLength = startingSnakeLength;
var snake = [];
var gameOver = false;
var egg;
var score;

function setup() {
  var canvas = createCanvas(570, 450);
  canvas.parent("right");
  for (var i = startingSnakeLength - 1; i >= 0; i--) {
    snake.push([col - i, row]);
  }
  egg = [int(random(cols)), int(random(rows))];
  textSize(30);
  strokeWeight(4);
  stroke(114);
}

function drawSquare(pos) {
  rect(pos[0] * width / cols, pos[1] * height / rows, width / cols, height / rows);
}

function draw() {
  background(114);
  if (! gameOver) {
    draws++;
    if (draws % 9 === 0) {
      if (direction === "up")
        row--;
      else if (direction === "down")
        row++;
      else if (direction === "left")
        col--;
      else if (direction === "right")
        col++;

      if(col === egg[0] && row === egg[1]) {
        egg = [int(random(cols)), int(random(rows))];
        snakeLength++;
      }

      if (snake.length === snakeLength)
        snake.splice(0, 1);

      var headOnEdge = col < 0 || col >= cols || row < 0 || row >= rows;
      var headOnSelf = snake.some(element => element[0] === col && element[1] === row);
      gameOver = headOnEdge || headOnSelf;

      snake.push([col, row]);
    }

    fill(0);
    for (let pos of snake) {
      drawSquare(pos);
    }
    drawSquare(egg);

    fill(255);
    score = snakeLength - startingSnakeLength;
    text("score: " + score, 10, 30);
  } else {
    text("Game Over. Score: " + score, 10, 30);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW && direction !== "down")
    direction = "up";
  else if (keyCode === DOWN_ARROW && direction !== "up")
    direction = "down";
  else if (keyCode === LEFT_ARROW && direction !== "right")
    direction = "left";
  else if (keyCode === RIGHT_ARROW && direction !== "left")
    direction = "right";
}
