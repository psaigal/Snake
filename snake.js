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
      snake.direction = "up";
      move("up", 40, "subtract");
    }
    else if (e.keyCode == 40) { //down
        snake.direction = "down";
        move("down", 40, "add");
    }
    else if (e.keyCode == 39) { //right
        snake.direction = "right";
        move("right", 1, "add");
    }
     else if (e.keyCode == 37) { //left
        snake.direction = "left";
        move("left", 1, "subtract");
    }
};

function move(direction, position, operator) {
  if (growingSnake[0] == food.position) {
    findFood();
  }
  else {
    var blah = growingSnake;
    for(i = 0; i < growingSnake.length; i++) {
      if (growingSnake.length == 1) {
        $('#' + (growingSnake[i])).css("background-color","white");
        if (operator == "add") {
          growingSnake[i] = growingSnake[i] + position;
        }
        else {
          growingSnake[i] = growingSnake[i] - position;
        }
        $('#' + (growingSnake[i])).css("background-color","red");
     }
     else if (growingSnake.length !=1) {
        if(i == 0) {
          if (operator == "add") {
            growingSnake[i] = blah[i] + position;
            console.log(growingSnake);
          }
          else {
            growingSnake[i] = blah[i] - position;
            console.log(growingSnake);
          }
        }
        else if(i != 0) {
          growingSnake[i] = blah[i-1];
          console.log(growingSnake);
        }
        $('#' + (growingSnake[i])).css("background-color","red");
        $('#' + (blah[blah.length-1])).css("background-color","white");
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
  $('#' + (growingSnake[growingSnake.length-1])).css("background-color","red");
}

function randomNumber() {
  return Math.floor((Math.random() * 1600) + 1);
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
