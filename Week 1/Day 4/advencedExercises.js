// 1. Create an expansion of the Math Object and add a method that returns a random integer between 0 and the Max number passed as parameter
// You should be able to call all the same methods on myMath as in Math.
// Apart from those methods, myMath has a new method randomInt that returns a random integer.
// randomInt expects a number as first parameter. It will return a random integer between 0 and that number -included-.
// If a second parameter is passed, it will be considered as the minimum. It should return a random integer between the second parameter and the first one.

var myMath = Object.create(Math);

  myMath.randomInt = function(max, min=0){
    return this.round(this.random()*(max-min)+min);
  }

console.log(myMath.randomInt(5));
console.log(myMath.randomInt(10)); // 10 for example
console.log(myMath.random()); // some random number between 0 and 1
console.log(myMath.round(0.5));
console.log(myMath.randomInt(10, -4)); // -3 for example


// 2. Add reverse method to String Object

String.prototype.reverse = function (){
  return this.split("").reverse().join("");
}

var a = 'asdfg';
console.log(a.reverse());

// 3. merge
function merge(obj1, obj2) {
  var keyArray = Object.keys(obj1).concat(Object.keys(obj2)).sort();
  var newObj={};
  keyArray.forEach(function(i){
    newObj[i]=0
  });
  var newObj = Object.assign(newObj, obj2, obj1);
  return newObj;
}

console.log(merge({ a: 3, b: 2, c:8, f: 8 }, { a: 2, d: 4, e: 5, f: 4 })); // { a: 3, b: 2, c: 8, d: 4, e: 5, f: 8 }

// 4. invert takes an object as a parameter. It returns a new object with the values of the passed object as properties, and the keys as values of those properties.

function invert(obj){
  var invertedObject={};
  for (var i in obj){
    invertedObject[obj[i]] = i;
  }
  return invertedObject;
}

console.log(invert({ a: 3, b: 2 })); // { 2: 'b', 3: 'a' }

// 5. Object.keys returns an array with all the keys of an object.

function objectKeys(obj){
  var keyArray=[];
  for (var i in obj){
    keyArray.push(i);
  }
  return keyArray;
}

var obj = {
  'keyCode': 'JS',
  2: 'Program Paradigm',
  Target: 'Bowser',
};

console.log(objectKeys(obj)); // ['2', 'keyCode', 'Target']

// 6. Object.values, it returns an array with all the values of an object.

function objectValues(obj){
  var valuesArray=[];
  for (var i in obj){
    valuesArray.push(obj[i]);
  }
  return valuesArray;
}

var obj = {
  'keyCode': 'JS',
  2: 'Program Paradigm',
  Target: 'Browser',
};

console.log(objectValues(obj)); // ['Program Paradigm', 'JS', 'Browser']
