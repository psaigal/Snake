$(document).ready(function(){
  createGrid(40);
  food.setPosition();
  $("#20").css("background-color","red");


  $("body").keydown(function(e) {
    if (e.keyCode == 38) { //up
      snake.direction = "up";
      setInterval(function() {
        for (i = 0; i < snake.position.length; i ++) {
          $('#' + (snake.position[i])).css("background-color","none");
          snake.position[i] -= 40;
           $('#' + (snake.position[i])).css("background-color","red");
        }
        if (snake.position[0] == food.position) {
            food.setPosition();
            var x = snake.position[snake.position.length-1];
            snake.position.push(x+40);
            console.log(snake.position.length)

          }

      }, 600);
    }
    else if (e.keyCode == 40) { //down
      snake.direction = "down";
      setInterval(function() {
        for (i = 0; i < snake.position.length; i ++) {
          $('#' + (snake.position[i])).css("background-color","none");
          snake.position[i] += 40;
           $('#' + (snake.position[i])).css("background-color","red");
        }
        if (snake.position[0] == food.position) {
            food.setPosition();
            var x = snake.position[snake.position.length-1];
            snake.position.push(x-40);
          }

      }, 1000);
    }

    else if (e.keyCode == 39) { //right
      snake.direction = "right";
      setInterval(function() {
        for (i = 0; i < snake.position.length; i ++) {
          $('#' + (snake.position[i])).css("background-color","none");
          snake.position[i] += 1;
           $('#' + (snake.position[i])).css("background-color","red");
        }
        if (snake.position[0] == food.position) {
            food.setPosition();
            var x = snake.position[snake.position.length-1];
            snake.position.push(x-1);
            console.log(snake.position.length)

          }

      }, 1000);


    }



    else if (e.keyCode == 37) { //left
      snake.direction = "left";
      setInterval(function() {
        for (i = 0; i < snake.position.length; i ++) {
          $('#' + (snake.position[i])).css("background-color","none");
          snake.position[i] -= 1;
           $('#' + (snake.position[i])).css("background-color","red");
        }
        if (snake.position[0] == food.position) {
          food.setPosition();
              var x = snake.position[snake.position.length-1];
              snake.position.push(x+1);
              console.log(snake.position.length)

          }

      }, 600);

}




  });
});


function randomNumber() {
  return Math.floor((Math.random() * 1600) + 1);
}

var food = {
  position: 140,
  setPosition: function() {$("#" + this.position).css("background-color","green")}

}

function eat() {
  if ($('#' + snake.frontPosition) == $("#" + food.position)) {
    alert("Hello! I am an alert box!!");
  };
}

var snake = {
  frontPosition: 20,
  position: [20],
  direction: "right"
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








