$(document).ready(function(){
  createGrid(40);
  $("#20").css("background-color","blue");
  var food = $("#" + randomNumber()).css("background-color","green");

  $("body").keyup(function(e) {
    if (e.keyCode == 38) { //up
      snake.direction = "up";
      setInterval(function() {
      ($('#' + (snake.frontPosition[1]))).css("background-color","none");
      ($('#' + (snake.frontPosition[1] -= 40))).css("background-color","blue");
    }, 300);
    }
    else if (e.keyCode == 40) { //down
      snake.direction = "down";
      setInterval(function() {
      ($('#' + (snake.frontPosition[1]))).css("background-color","none");
      ($('#' + (snake.frontPosition[1] += 40))).css("background-color","blue");
    }, 300);
    }
    else if (e.keyCode == 39) { //right
      snake.direction = "right";
      setInterval(function() {
      ($('#' + (snake.frontPosition[1]))).css("background-color","none");
      ($('#' + (snake.frontPosition[1] += 1))).css("background-color","blue");
    }, 300);
    }
    else if (e.keyCode == 37) { //left
      snake.direction = "left";
      setInterval(function() {
      ($('#' + (snake.frontPosition[1]))).css("background-color","none");
      ($('#' + (snake.frontPosition[1] -= 1))).css("background-color","blue");
    }, 300);
    };
  });




});

var snake = {
  frontPosition: [1,20],
  direction: "right"
}


// function move() {
//   if (snake.direction == "left") {
//     console.log($("#" + snake.position[1]-1))
//     $("#" + snake.position[1]-1).css("background-color","red");
//   }
// }

// if left is clicked,
//   #(position[2]-1).css("background-color","red");

//position of snake is specified by [row#, square#]


//if left is pressed, snake position is [row#, square#-1]
//

//if right is pressed, snake position is [row#, square#+1]
//

//if up is pressed, snake position is [row#+1, square#]
//

//if down is pressed, snake position is [row#-1, square#]
//




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





function randomNumber() {
  return Math.floor((Math.random() * 1600) + 1);
}







// var food = randomNumber

// var currentSnake =  [[20,20]]



// function move() {





