function showResults(){
  var sides=[]
  sides.push(document.getElementById("side1").value);
  sides.push(document.getElementById("side2").value);
  sides.push(document.getElementById("side3").value);

  var side1 = parseInt(sides[0]);
  var side2 = parseInt(sides[1]);
  var side3 = parseInt(sides[3]);

if(side1 === side2 && side1 === side3 && side2 === side3){
  output.innerHTML=("Equitorial triangle")
}
else if((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1){
  ouput.innerHTML=("Sorry cant form a triangle")
}
else if(side1 === side2 || side1 === side3 || side2 === side3){
  output.innerHTML=("Isoceles triangle")
}
else if(side1 !== side2 && side1 !== side3 && side2 !== side3){
  alert("scalene");
}
}
