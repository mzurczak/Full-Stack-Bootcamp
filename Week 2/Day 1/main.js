
// isAnagram
// Write a function that takes two words as an argument and returns true if they are anagrams (contain the exact same letters) and false otherwise.

function isAnagram(s1, s2){
  if ((typeof s1 !== 'string')||(typeof s2 !== 'string')||(s1.length!==s2.length)) return false;
  var same=true;
  s1=s1.split("").sort();
  s2=s2.split("").sort();
  for(var i=0; i<s1.length;i++){
    if (s1[i] !== s2[i]) same=false;
  }
  return same;
}

isAnagram('hello', 'ollhe'); // => true
isAnagram('world', 'ordly'); // => false
isAnagram('fante', 'tenaff'); // => false

// Box Volume
// Write a function that takes three measurements in centimeters as input and returns a the volume over a liter.
// It should return the liters with up to 4 decimals.

function boxVolume(a1, a2, a3){
  if ((typeof a1 !== 'number')||(typeof a2 !== 'number')||(typeof a2 !== 'number')) return false;
  var vol = a1*a2*a3;
  return Math.round(vol*10)/10000;
}

boxVolume(10, 10, 10); // => 1
boxVolume(5, 5, 5); // => 0,125
boxVolume(5, 5, 5.1); // => 0,1275

// Rectangle intersection
// Write a function that expects two rectangles and returns the intersected rectangle if any. Each rectangle is represented by two points in a two dimensional space.
//
// For example: [1, 1] and [4, 3]. Is the rectangle with point the corners at [1, 1], [4, 1], [1, 3] and [4, 3].

// intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]]); // => [2, 2], [4, 3]
// intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]]); // => [4, 4], [2, 1]

module.exports = {
  isAnagram:isAnagram,
  boxVolume:boxVolume,
  // intersect:intersect,
}
