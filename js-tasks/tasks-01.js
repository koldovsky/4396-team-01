// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

function rps(p1, p2) {
  if (p1 === p2) {
    return "Draw!";
  }

  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  }

  if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  }

  if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  }

  return "Player 2 won!";
}

// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

function rps(p1, p2) {
  if (p1 === p2) {
    return "Draw!";
  }

  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  }

  if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  }

  if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  }

  return "Player 2 won!";
}

// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

function rps(p1, p2) {
  if (p1 === p2) {
    return "Draw!";
  }

  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  }

  if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  }

  if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  }

  return "Player 2 won!";
}

// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

function rps(p1, p2) {
  if (p1 === p2) {
    return "Draw!";
  }

  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  }

  if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  }

  if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  }

  return "Player 2 won!";
}

// -------- Vasyl Haida Start --------------------------------------------------------------
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
	return string.split(' ');
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    return Math.max(...list)
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
    const minValue = Math.min(...arr); 
    if (toReturn === 'value') {
      return minValue
    }
  return arr.indexOf(minValue);
}

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  return i * 2;
}

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld)
}

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n){
  return (n-1) * 2;
}

//  https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  if (n <= 0) {
    return n
  }
  if (n < 13) {
    return n - 1
  }
  return n - 2
}

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s){
  return (h * 3600000) + (m * 60000) + (s * 1000)
}

// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x=== 0 && n % y === 0
}

// -------------------- Vasyl Haida End ----------------------------------