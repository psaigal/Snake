$(document).ready(function(){
  createGrid(40);


});


function createGrid(v){
      var body = document.body; // whatever you want to append the rows to:
      for (var i = 0; i < v; i++) {
        var row = document.createElement("div");
        row.className = "row";
        for(var x = 1; x <= v; x++){
            var square = document.createElement("div");
            square.className = "square";
            // square.innerText = (i * v) + x;
            row.appendChild(square);
        }
        body.appendChild(row);
      }
    };

