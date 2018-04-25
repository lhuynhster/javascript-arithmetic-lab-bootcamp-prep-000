function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  return a / b 
}

function inc (n) {
  return n + 1
}

function dec (n) {
  return n - 1
}

function makeInt(n) {
<<<<<<< HEAD
  if (isNaN(n)) {return n * 0} { 
  return parseFloat(n);
=======
  if (isNaN(n)) { 
    return n * 0 
  return parseInt('459', 10);
>>>>>>> 44daa18418d4235fc31182fff0ea657e3415aa24
  }

}

function preserveDecimal(n) {
  if (isNaN(n)) {
    return 'true';
}
    return parseFloat(n);
}
