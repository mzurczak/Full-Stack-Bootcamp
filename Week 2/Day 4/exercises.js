//Currying Calculator
// Define a function that returns a currying calculator. The currying calculator will keep returning a function until 5 parameters are passed in total.
// Then it returns the sum of all 5 params.

function createCurryCalc() {
  var calcArgArray = [];

  return function curryCalc(...args){
    for (var i=0; i<args.length; i++){
      calcArgArray.push(args[i]);
      if (calcArgArray.length === 5) {
        return calcArgArray.reduce(function(sum, val) { return sum + val });
      }
    }
    return curryCalc;
  }
}


// CURRY
// Define your curry function implementation. curry expects a function, any function, and returns a curried version of it

function cury(fn) {
  var curyArgArray;
  var expArg = fn.length;
  return function indivCury(...args) {
    for (var i=0; i<args.length; i++) {
      curyArgArray.push(args[i]);
      if (curyArgArray.length === expArg) fn(...curyArgArray);
    }
  }
}


// Define a myEach function that simulates the forEach method on Array.

function myEach(arr, fn) {
  var tasksNo = arr.length;
  for (var i =0; i < tasksNo; i++){
    fn(arr[i]);
  }
}


// Define a myMap function that simulates the map method on Array.

function myMap(arr, fn) {
  var tasksNo = arr.length;
  var resultArray = [];
  for (var i =0; i < tasksNo; i++){
    // resultArray.push(fn(arr[i]));
    resultArray[i] = fn(arr[i]);
  }
  return resultArray;
}


//*******************************************
// TESTS
//*******************************************

var curryCalc = createCurryCalc();
var partial = curryCalc(2, 3, 4);
console.log(partial(1, 3));

var curryCalc2 = createCurryCalc();
var partial2 = curryCalc2(2);
partial2 = partial2(4, 5)
console.log(partial2(1, 3));


function write(str){
  console.log(str);
}

function sqr(n){
  return n*n;
}

var arr = [1, 2, 3, 4, 5];

myEach(arr, write);
console.log(myMap(arr, sqr));

