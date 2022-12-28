// Implementation of an AI to solve to jug water puzzle
class State {
  constructor(jug1, jug2) {
    this.jug1 = jug1;
    this.jug2 = jug2;
  }

  toString() {
    return `${this.jug1} ${this.jug2}`;
  }
}

// Calculates the GCD using the Euclidean algorithm
function gcd(a, b) {
  if (b == 0)
    return a;
  return gcd(b, a % b);
}

// Calculates the minimum number of steps
function minimumSteps(m, n, d) {
  // Check if it is possible to measure out 'd' units of water 
  if (d > Math.max(m, n) || (d % gcd(m, n) != 0))
    return -1;

  const queue = [new State(0, 0)];
  const visited = new Set();
  let steps = 0;
  while (queue.length > 0) {
    steps++;
    const size = queue.length;
   
    for (let i = 0; i < size; i++) {
      const state = queue.shift();
      if (state.jug1 == d || state.jug2 == d)
        return steps;
      if (visited.has(state.toString())) {
        continue;
      }
   
      visited.add(state.toString());
     
      queue.push(new State(m, state.jug2));
      queue.push(new State(state.jug1, n));
      queue.push(new State(0, state.jug2));
      queue.push(new State(state.jug1, 0));
      queue.push(new State(state.jug1 - Math.min(state.jug1, n - state.jug2), state.jug2 + Math.min(state.jug1, n - state.jug2)));
      queue.push(new State(state.jug1 + Math.min(state.jug2, m - state.jug1), state.jug2 - Math.min(state.jug2, m - state.jug1)));
    }
  }

 
  return -1;
}

//User Input
const m = parseInt(prompt('Enter the value of Jug1(m) : '));
const d = parseInt(prompt('Enter the value of D : ')); 
const n = parseInt(prompt('Enter the value of Jug2(n) : '));

// Calculate the minimum number of steps
const result = minimumSteps(m, n, d);


console.log(`Minimum  numbers steps required are : ${result}`);

