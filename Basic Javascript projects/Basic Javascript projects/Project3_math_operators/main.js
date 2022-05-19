var x=myFunction(4,4);
document.getElementById("math").innerHTML=x;

function myFunction(a,b) {
return a+b;
}

var x = myFunction(2, 6);
document.getElementById("math").innerHTML = x;

function myFunction(a, b) {
  return a - b;
}

var x = myFunction(2, 2);
document.getElementById("math").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}

var x = myFunction(12, 6);
document.getElementById("math").innerHTML = x;

function myFunction(a, b) {
  return a / b;
}

var x = 5;
var y = 2;
var z = x % y;
document.getElementById("math").innerHTML = z;

var x = 6;
x++;
var z = x;
document.getElementById("math").innerHTML = z;

var x = 6;
x--;
var z = x;