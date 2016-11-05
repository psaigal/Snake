createGrid(40);
  $("#20").css("background-color","red");
    var food = {
    position: randomNumber(),
    setPosition: function()
    {
      $("#" + this.position).css("background-color","green")
    }
  }

  food.setPosition();


var snake = {
  frontPosition: 20,
  direction: "down"
}

var growingSnake = [20];

 $("body").keydown(function(event) {
    direction(event);
 });

function direction(e) {
    if (e.keyCode == 38) { //up
      if (upOrDownEndGame(growingSnake[0])) {
        return gameOver();
      }
      else {
        snake.direction = "up";
        move("up", 40, "subtract");
      }
    }
    else if (e.keyCode == 40) { //down
      if (upOrDownEndGame(growingSnake[0])) {
        return gameOver();
      }
      else {
        snake.direction = "down";
        move("down", 40, "add");
      }
    }
    else if (e.keyCode == 39) { //right
      if (rightOrLeftEndGame(growingSnake[0])) {
        return gameOver();
      }
      else {
        snake.direction = "right";
        move("right", 1, "add");
      }
    }
     else if (e.keyCode == 37) { //left
        if (rightOrLeftEndGame(growingSnake[0]-1)) {
          return gameOver();
        }
        else {
          snake.direction = "left";
          move("left", 1, "subtract");
        }
    }
};

function move(direction, position, operator) {
  var blah = growingSnake.slice();
  for(i = 0; i < growingSnake.length; i++) {
    if (growingSnake.length == 1) {
      $('#' + (growingSnake[i])).css("background-color","#d3d3d3");
      if (operator == "add") {
        growingSnake[i] = growingSnake[i] + position;
      }
      else {
        growingSnake[i] = growingSnake[i] - position;
      }
      $('#' + (growingSnake[i])).css("background-color","red");
      if (growingSnake[i] == food.position) {
        findFood();
      }
      console.log(growingSnake + " growing-snake!");
    }
    else if (growingSnake.length !=1) {
      if(i == 0) {
        if (operator == "add") {
          $('#' + (blah[i])).css("background-color","#d3d3d3");
          growingSnake[i] = blah[i] + position;
          if (growingSnake[i] > 1600 || growingSnake[i] < 0){
            console.log('Game Over');
          }
          $('#' + (growingSnake[i])).css("background-color","red");
        }
        else {
          $('#' + (blah[i])).css("background-color","#d3d3d3");
          growingSnake[i] = blah[i] - position;
          $('#' + (growingSnake[i])).css("background-color","red");
        }
        if (growingSnake[0] == food.position) {
          findFood();
        }
      }
      else if(i != 0) {
        $('#' + (blah[i])).css("background-color","#d3d3d3");
        growingSnake[i] = blah[i-1];
        $('#' + (growingSnake[i])).css("background-color","red");
        if (growingSnake[0] == food.position) {
          findFood();
        }
      }
    }
  }
};

function findFood() {
  console.log("Found food!");
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
  console.log("Game Over!");
}

function createGrid(v){
      var body = document.getElementById("hello"); // whatever you want to append the rows to:
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
