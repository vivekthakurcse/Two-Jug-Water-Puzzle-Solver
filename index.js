//Implementation of an AI to solve Two Jug Water Puzzle

function waterPuzz(a, b) {
  if (b == 0)
    return a;
  return waterPuzz(b, a % b);
}

function pour(fromJug, toJug, d) {
  var from = fromJug;
  var to = 0;
  var step = 1;
  while (from != d && to != d) {
    var temp = Math.min(from, toJug - to);
    to += temp;
    from -= temp;
    step++;

    if (from == d || to == d)
      break;

    if (from == 0) {
      from == fromJug;
      step++;
    }
    if (to == toJug) {
      to = 0;
      step++;
    }
  }
  return step;
}

//Calculating Minimum Steps
function minimumSteps(m, n, d) {
  if (m > n) {
    var t = m;
    m = n;
    n = t;
  }

  if (d > n)
    return -1;

  if ((d % waterPuzz(n, m) != 0))
    return -1;

  return Math.min(pour(n, m, d),
    pour(m, n, d));
}

//Driving the code by taking user inputs
var m = prompt("Enter the value of Jug1(m) : ");
var d = prompt("Enter the value of D : "); 
var n = prompt("Enter the value of Jug2(n) : ");

//User Input cancel - _ -

// var m = 28 , n = 20 , d = 14

let result = minimumSteps(m, n, d);
console.log("Minimum  numbers steps required are : " + result);
