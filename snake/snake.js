var cols = 19;
var rows = 15;
var direction = "R";
var row = 7;
var col = 9;
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
  frameRate(7);
}

function drawSquare(pos) {
  rect(pos[0] * width / cols, pos[1] * height / rows, width / cols, height / rows);
}

function draw() {
  background(114);
  if (direction === "U")
    row--;
  else if (direction === "D")
    row++;
  else if (direction === "L")
    col--;
  else if (direction === "R")
    col++;

  if (col === egg[0] && row === egg[1]) {
    egg = [int(random(cols)), int(random(rows))];
    snakeLength++;
  }

  if (snake.length === snakeLength)
    snake.splice(0, 1);

  var headOnEdge = col < 0 || col >= cols || row < 0 || row >= rows;
  var headOnSelf = snake.some(v => v[0] === col && v[1] === row);
  gameOver = headOnEdge || headOnSelf;

  snake.push([col, row]);

  fill(0);
  snake.forEach(v => {
   drawSquare(v);
  });
  fill(255,0,0);
  drawSquare(egg);

  if (gameOver) {
    text("Game Over. Score: " + score, width / 57, height / 15);
    noLoop();
  } else {
    fill(255);
    score = snakeLength - startingSnakeLength;
    text("score: " + score, width / 57, height / 15);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW && direction !== "D")
    direction = "U";
  else if (keyCode === DOWN_ARROW && direction !== "U")
    direction = "D";
  else if (keyCode === LEFT_ARROW && direction !== "R")
    direction = "L";
  else if (keyCode === RIGHT_ARROW && direction !== "L")
    direction = "R";
}
