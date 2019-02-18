function showResults(){

var side1=parseInt(document.getElementById('a').value);
var side2=parseInt(document.getElementById('b').value);
var side3=parseInt(document.getElementById('c').value);


if(side1 === side2 && side1 === side3 && side2 === side3){
alert("Equitorial triangle");
}

else if((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1){
alert("Sorry cant form a triangle");
}

else if(side1 === side2 || side1 === side3 || side2 === side3){
alert("Isoceles triangle");
}

else if(side1 !== side2 && side1 !== side3 && side2 !== side3){
alert("scalene triangle");
}
}

showResults();
