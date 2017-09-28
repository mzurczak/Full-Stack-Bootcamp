var test = require("tape");
var binary = require('./binarySearch.js');

test('binarySearch tests', function(t){
  // t.test('Wrong arguments', function(t){
  //   t.equal(binarySearchRecursive('str', 5), 'Wrong argument, array required');
  //   t.end();
  // });

  t.test('Correct arguments', function(t){
    t.equal(binary.binarySearchRecursive([1, 2, 3, 4, 5], 3), 2);
    t.equal(binary.binarySearchRecursive(['a', 'b', 'c', 'd', 'e'], 'e'), 4);
    t.end();
  });
})