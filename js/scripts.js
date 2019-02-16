function showResults(){
  var sides=[]
  sides.push(document.getElementById('side1').value);
  sides.push(document.getElementById('side2').value);
  sides.push(document.getElementById('side3').value);

  var side1 =sides[0]
  var side2 =sides[1]
  var side3 =sides[2]

if(side1 === side2 && side1 === side3 && side2 === side3){
output.innerHTML=("Equitorial triangle")
}
else if((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1){
output.innerHTML=("Sorry cant form a triangle")
}
else if(side1 === side2 || side1 === side3 || side2 === side3){
output.innerHTML=("Isoceles triangle")
}
else if(side1 !== side2 && side1 !== side3 && side2 !== side3){
output.innerHTML=("scalene");
}
}
