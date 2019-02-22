function showResults(){

      var side1 = parseInt(document.getElementById("a").value);
      var side2 = parseInt(document.getElementById("b").value);
      var side3 = parseInt(document.getElementById("c").value);

    var sides = [side1,side2,side3];

    if (sides[0] + sides[1] <= sides[2] || sides[0] + sides[2] <= sides[1] || sides[1] + sides[2] <= sides[0]){
    alert("Sorry cant form a triangle");
    }

    else if (sides[0]===sides[1] && sides[1]===sides[2] && sides[0]===sides[2]){
    alert("Equilateral triangle");
    }

    else if (sides[0] === sides[1]||sides[0] === sides[2] || sides[1] === sides[2]){
    alert("Isoceles triangle");
    }
    else (sides[0] + sides[1] > sides[2] || sides[1] + sides[2] > sides[0] || sides[0] + sides[2] > sides[1]);
    alert("scalene triangle");{
    }
  };
$(document).ready(function() {
  showResults()
});
