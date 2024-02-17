let number = 0;

function increase() {
  number += 100;
  document.getElementById('number').textContent = number;
}

function decrease() {
  number -= 100;
  document.getElementById('number').textContent = number;
}

function increase2() {
  number += 100;
  document.getElementById('number2').textContent = number;
}

function decrease2() {
  number -= 100;
  document.getElementById('number2').textContent = number;
}

function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}