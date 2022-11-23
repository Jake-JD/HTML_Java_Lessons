if (true) {
    console.log('This message will print!');
  }
  // Prints: This message will print!
  
  if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  }
  
console.log("=======================");

let stopLight = 'green';
let pedestrians = 0;
if (stopLight === 'green' && pedestrians === 2){ // && = AND, || = OR, ! = NOT
  console.log("now walk")
} else {
  console.log("no need to walk")
}
day = 'Saturday'
if (day === 'Saturday' || day === 'Sunday'){
  console.log('It\'s the holiday!')
}
let excited = true;
console.log(!excited);

console.log("=======================");
// Ternary Operator

isNightTime = true;
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

console.log("=======================");
stopLight = 'yellow';
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
}