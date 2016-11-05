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
      move();
    }
    else if (e.keyCode == 40) { //down
        snake.direction = "down";
        move();
    }
    else if (e.keyCode == 39) { //right
        snake.direction = "right";
        move();
    }
     else if (e.keyCode == 37) { //left
        snake.direction = "left";
        move();
    }
};

function move() {
    findFood();
    if(snake.direction == "down") {
        for(i = 0; i < growingSnake.length; i++) {
          if (growingSnake.length == 1) {
            $('#' + (growingSnake[i])).css("background-color","none");
          }
          else {
            $('#' + (growingSnake[growingSnake.length-1])).css("background-color","none");
          }
          growingSnake[i] = growingSnake[i] + 40;
          $('#' + (growingSnake[i])).css("background-color","red");
        }
    }
    if(snake.direction == "up") {
        for(i = 0; i < growingSnake.length; i++) {
          if (growingSnake.length == 1) {
            $('#' + (growingSnake[i])).css("background-color","none");
          }
          else {
            $('#' + (growingSnake[growingSnake.length-1])).css("background-color","none");
          }
          growingSnake[i] = growingSnake[i] - 40;
          $('#' + (growingSnake[i])).css("background-color","red");
        }
    }
    if(snake.direction == "right") {
        for(i = 0; i < growingSnake.length; i++) {
          if (growingSnake.length == 1) {
            $('#' + (growingSnake[i])).css("background-color","none");
          }
          else {
            $('#' + (growingSnake[growingSnake.length-1])).css("background-color","none");
          }
          growingSnake[i] = growingSnake[i] + 1;
          $('#' + (growingSnake[i])).css("background-color","red");
        }
    }
    if(snake.direction == "left") {
        for(i = 0; i < growingSnake.length; i++) {
          if (growingSnake.length == 1) {
            $('#' + (growingSnake[i])).css("background-color","none");
          }
          else {
            $('#' + (growingSnake[growingSnake.length-1])).css("background-color","none");
          }
          growingSnake[i] = growingSnake[i] - 1;
          $('#' + (growingSnake[i])).css("background-color","red");
        }
    }
};
console.log(food);
function findFood() {
  console.log(food);
  if (growingSnake[0] == food.position) {
    food.position;
    food.setPosition();
    if (snake.direction == "down") {
      growingSnake.push(growingSnake[growingSnake.length-1]-40)
    }
    if (snake.direction == "right") {
      growingSnake.push(growingSnake[growingSnake.length-1]-1)
    }
    if (snake.direction == "up") {
      growingSnake.push(growingSnake[growingSnake.length-1]+40)
    }
    if (snake.direction == "left") {
      growingSnake.push(growingSnake[growingSnake.length-1]+1)
    }
  }
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
