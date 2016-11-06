$(document).ready(function(){
  createGrid(40);
  $("#20").css("background-color","red");
  food.setPosition();
  $("body").keydown(function(event) {
    direction(event);
  });
});

var snake = {
  frontPosition: 20,
  direction: undefined
}

var food = {
  position: randomNumber(),
  setPosition: function()
  {
    $("#" + this.position).css("background-color","green")
  }
}

var growingSnake = [20];

var currentTimer;

 // $("body").keydown(function(event) {
 //    direction(event);
 // });

function direction(e) {
  if (e.keyCode == 38) { //up
    snake.direction = "up";
    if (upOrDownEndGame(growingSnake[0])) {
      return gameOver();
    }
    else {
      window.clearInterval(currentTimer);
      var up = setInterval(function(){move("up", 40, "subtract")},100);
      currentTimer = up;
    }
  }
  else if (e.keyCode == 40) { //down
    snake.direction = "down";
    if (upOrDownEndGame(growingSnake[0])) {
      return gameOver();
    }
    else {
      window.clearInterval(currentTimer);
      var down = setInterval(function(){move("down", 40, "add")},100);
      currentTimer = down;
    }
  }
  else if (e.keyCode == 39) { //right
    snake.direction = "right";
    window.clearInterval(currentTimer);
    var right = setInterval(function(){move("right", 1, "add")},100);
    currentTimer= right;
  }
  else if (e.keyCode == 37) { //left
    snake.direction = "left";
    window.clearInterval(currentTimer);
    var left = setInterval(function(){move("left", 1, "subtract")},100);
    currentTimer= left;
  }
};

function move(direction, position, operator) {
  var growingSnakeDuplicate = growingSnake.slice();
  for(i = 0; i < growingSnake.length; i++) {
    if(i == 0) {
      if (operator == "add") {
        $('#' + (growingSnakeDuplicate[i])).css("background-color","white");
        growingSnake[i] = growingSnakeDuplicate[i] + position;
        if (growingSnake[i] > 1600 || growingSnake[i] < 0){
          console.log('Game Over');
        }
        $('#' + (growingSnake[i])).css("background-color","red");
      }
      else {
        $('#' + (growingSnakeDuplicate[i])).css("background-color","white");
        growingSnake[i] = growingSnakeDuplicate[i] - position;
        $('#' + (growingSnake[i])).css("background-color","red");
      }
      if (growingSnake[0] == food.position) {
        findFood();
      }
    }
    else if(i != 0) {
      $('#' + (growingSnakeDuplicate[i])).css("background-color","white");
      growingSnake[i] = growingSnakeDuplicate[i-1];
      $('#' + (growingSnake[i])).css("background-color","red");
      if (growingSnake[0] == food.position) {
        findFood();
      }
    }
    if (rightOrLeftEndGame(growingSnake[0]) && snake.direction == "right") {
      return gameOver();
    }
    if (rightOrLeftEndGame(growingSnake[0]-1) && snake.direction == "left") {
      return gameOver();
    }
  }
  if (snakeEatsItself(growingSnake)){
    return gameOver();
  }
};

function findFood() {
  food.position = randomNumber();
  food.setPosition();
  if (snake.direction == "down") {
    growingSnake.push(growingSnake[growingSnake.length-1]-40)
  }
  else if (snake.direction == "right") {
    growingSnake.push(growingSnake[growingSnake.length-1]-1)
  }
  else if (snake.direction == "up") {
    growingSnake.push(growingSnake[growingSnake.length-1]+40)
  }
  else {
    growingSnake.push(growingSnake[growingSnake.length-1]+1)
  }
}

function snakeEatsItself(array) {
  var sortedArray = array.slice().sort(); //duplicate original array and then sort it
  for (var i = 0; i < array.length - 1; i++) {
    if (sortedArray[i + 1] == sortedArray[i]) {
        return true;
    }
  }
  return false;
}

function randomNumber() {
  return Math.floor((Math.random() * 1600) + 1);
}

function rightOrLeftEndGame(position) {
  if (position % 40 == 0) {
    return true;
  }
}

function upOrDownEndGame(position) {
  if (position > 1600 || position < 0){
    return true;
  }
}

function gameOver() {
  alert("Game Over!");
}


function createGrid(v){
var body = document.body; // whatever you want to append the rows to:
  for (var i = 0; i < v; i++) {
    var row = document.createElement("div");
    row.className = "row";
    row.id = "row-" + (i + 1)
    for(var x = 1; x <= v; x++){
      var square = document.createElement("div");
      square.className = "square";
      square.id = (i * v) + x
      row.appendChild(square);
    }
    body.appendChild(row);
  }
};
