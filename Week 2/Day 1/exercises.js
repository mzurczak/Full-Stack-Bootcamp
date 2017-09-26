// 1. isString
// Create a function that returns true when the parameter passed is a string and false otherwise.

function isString(object){
  if ((typeof object) ==="string") return true;
  else return false;
}

isString('hello'); // => true
isString(['hello']); // => false
isString('this is a long sentence'); // => true
isString({ a: 2 }); // => false

// 2. isArray
// Create a function that returns true when the parameter passed is an array and false otherwise.

function isArray(object){
  if (Array.isArray(object) ===true) return true;
  else return false;
}

// 3. Check for types in array
// Create a function that checks whether all the element of an array are the same datatype

function areSameType(array){
  if (Array.isArray(array)){
    var dataType=checkType(array[0]);
    var result=true;
    for (var i=1; i<array.length;i++){
      if (checkType(array[i])!==dataType) result=false;
    }
    return result;
  }
  else return false;
}

function checkType(object){
  if ((typeof object)==="object"){
    if (Array.isArray(object)) return "array";
    else return "object";
  }
  return (typeof object);
}

//4.Sort and remove duplicated characters
// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

function longest(string1, string2){
  var string=string1 + string2;
  string = string.split("").sort();
  var unique=[];
  for (var i=0;i<string.length;i++){
    if (!unique.includes(string[i])) unique.push(string[i]);
  }
  var finalString=unique.sort().join("");
  return finalString;
}

// 5. Convert number to reversed array of digits
// Given a random number. You have to return the digits of this number within an array in reverse order.

function convert(num){
  return num.toString().split("").sort().reverse(); //brakuje przed sortowaniem .map(Math.floor), mi zwróciło stringa a nie liczbe
}

//6.Count repetitions
// You will be given an array of string:
// ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']
// Return an object where the keys are the string and the value for each key is how many repetitions they have in the provided array

function countRepetitions(arr){
  var uniqueKeys=[];
  var repetitions={};
  for (var i=0; i<arr.length; i++){
    if (!repetitions[arr[i]]) repetitions[arr[i]]=1;
    else repetitions[arr[i]]++
  }
  return repetitions;
}
//Sprawdzić rozwiązanie z metodą .reduction

// 7. Cat and Mouse
// You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.
// You need to find out if the cat can catch the mouse from it's current position. The cat can jump three characters.

function isCaught(str){
  if (Math.abs(str.indexOf("C")-str.indexOf("m"))<=3) return true;
  else return false;
}

//8. Split the bill
// Write a function to balance who has overpaid and should be compensated or who has paid less.
// The function should take one parameter: an object which represents the members of the group and the amount spent by each.
// The function should return an object with the same names, showing how much money the members should pay or receive.
// Negative number means they should receive money.

function splitTheBill(group){
  var peopleInGroup=Object.keys(group);
  var total=0;
  for (var value in group){
    // console.log(value);
    // console.log(group[value]);
    total += group[value];
    // console.log(total);
  }
  var avarageAmount = total/peopleInGroup.length;
  var final={};
  for (var value in group){
    final[value]=avarageAmount-group[value];
  }
  console.log(final);
}

// 9. Exponentiation
// Write a function that takes two integers. The first one will be the base b and the second one n will be the exponent.
// The function should return the value of b raised to the power n.

function exp(b, n){
  if (n===0) return 1;
  else return b*exp(b,(n-1));
}

// 10. Factorial
// If you don't know what a factorial is, first get yourself familiarized with the concept here.
// It's simple, the factorial of a number is all they previous integers multiplied. For example the factorial of five -factorial is expressed with an exclamation mark- 5! is 5 * 4 * 3 * 2 * 1 which is 120.

function factorial(n){
  if (n===0) return 1;
  else return n*factorial(n-1);
}

// 11.Fibonacci
// If are not familiarized with the fibonacci series, please go check it here.
// Write a function that expects an integer n and returns the first n numbers of the fibonacci series.
// //
// // function fibonacci(n){
// //   var fibonacciArray=[];
// //   var value=0;
// //   if (n===1) fibonacciArray[0]=0;
// //   else if (n===2){
// //     fibonacciArray[0]=0;
// //     fibonacciArray[1]=1;
// //   }
// //   else {
// //     for (var i=3;i<=n;i++){
// //       value=fibonacciArray[i-1]+fibonacciArray[i-2];
// //       fibonacciArray.push(value);
// //     }
// //   }
// //   return fibonacciArray;
// // }

// 12. Zero Sum
// Write a function that expects an array of integers and returns an array of pairs with the indexes of two numbers that sum 0.

function zeroSum(arr){
  arrayOfResult=[];
  for (var i=0; i<arr.length; i++){
    for (var j=i+1; j<arr.length; j++){
      if(arr[i]+arr[j]===0) arrayOfResult.push([i,j]);
    }
  }
return arrayOfResult;
}

module.exports = {
  isString: isString,
  isArray: isArray,
  areSameType: areSameType,
  longest: longest,
  convert: convert,
  countRepetitions: countRepetitions,
  isCaught: isCaught,
  splitTheBill: splitTheBill,
  exp: exp,
  factorial: factorial,
  zeroSum: zeroSum
}
