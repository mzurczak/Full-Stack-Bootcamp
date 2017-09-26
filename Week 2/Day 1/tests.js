var test = require('tape');
var tapSpec = require('tap-spec');
var dataType = require('data-type');
var exercises = require('../../Week 1/Day 1/exercises.js');
var newFunctions = require('./main.js');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);


// isString function tests

// test('isString function test', function(t) {
//   t.test('passing string', function(t){
//     t.true(exercises.isString("hello"), 'should return true');
//     t.end();
//   });
//
//   t.test ('passing an array', function(t){
//     t.false(exercises.isString([1,2]), 'should return false');
//     t.end();
//   });
// });

// // isArray function tests

// test('isArray function test', function(t){
//   t.test('passing an array', function(t){
//     t.true(exercises.isArray([1,2]), 'should return true');
//     t.end();
//   })
//
//   t.test('passing other object', function(t){
//     t.false(exercises.isArray('string'), 'should return false');
//     t.end();
//   });
// });

//areSameType function tests

// test('areSameType fuction test', function(t){
//   t.test('passing not an array', function(t){
//     t.false(exercises.areSameType('string'), 'expect false');
//     t.false(exercises.areSameType({}), 'expect false');
//     t.end();
//   })
//
//   t.test('passing an array', function(t){
//     t.true(exercises.areSameType([4, 5]), 'expect true');
//     t.true(exercises.areSameType(['a','b']), 'expect true');
//     t.true(exercises.areSameType([{},{}]), 'expect true');
//     t.false(exercises.areSameType([4,'a']), 'expect false');
//     t.false(exercises.areSameType([4,{}]), 'expect false');
//     t.false(exercises.areSameType([{},'a']), 'expect false');
//     t.false(exercises.areSameType([{},[]]), 'expect false');
//     t.end();
//   });
// });

//longest function tests

// test('longest function tests', function(t){
//   t.test('passing not a string', function(t){
//     t.false(exercises.longest(5,6), 'expect false');
//     t.false(exercises.longest([5,6]), 'expect false');
//     t.end();
//   })
//
//   t.test('passing a string', function(t){
//     t.isEqual(exercises.longest('abcd','efgh'),'abcdefgh','expect abcdefgh');
//     t.isEqual(exercises.longest('xyz','abc'),'abcxyz','expect abcxyz');
//     t.isEqual(exercises.longest('abc','abc'),'abc','expect abc');
//     t.end();
//   });
// });

//convert function tests

// test('convert function tests', function(t){
//   t.test('passing not a number', function(t){
//     t.false(exercises.conv('str'), 'expect false');
//     t.false(exercises.conv([5,3]), 'expect false');
//     t.end();
//   });
//
//   t.test('passing a number', function(t){
//     t.deepEqual(exercises.conv(5621), [6, 5, 2, 1] , 'expect [6,5,2,1]');
//     t.end();
//   });
// });

//countRepetitions function tests

// test('countRepetitions function tests', function(t){
//   t.test('passing not an array', function(t){
//     t.false(exercises.countRepetitions('str'),'expect false');
//     t.end();
//   });
//
//   t.test('passing an array', function(t){
//     t.deepEqual(exercises.countRepetitions(['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']), {kerouac:2,fante:3,buk:2,hemingway:1,hornby:1});
//     t.deepEqual(exercises.countRepetitions([]),{});
//     t.end();
//   });
// });

//isCaught function tests

// test('isCaught function tests', function(t){
//   t.test('passing not relevant argumets', function(t){
//     t.false(exercises.isCaught(5),'expect false');
//     t.end();
//   });
//
//   t.test('passing a string', function(t){
//     t.false(exercises.isCaught('Cat'),'expect false');
//     t.false(exercises.isCaught('mause'),'expect false');
//     t.false(exercises.isCaught('c..m'),'expect false');
//     t.false(exercises.isCaught('string'),'expect false');
//     t.true(exercises.isCaught('C..m'),'expect true');
//     t.false(exercises.isCaught('C....m'),'expect false');
//     t.end();
//   });
// });

//splitTheBill function tests

// test('splitTheBill function tests', function(t){
//   t.test('passing not relevant argumets', function(t){
//     t.false(exercises.splitTheBill([]),'expect false');
//     t.false(exercises.splitTheBill('str'),'expect false');
//     t.end();
//   });

  // t.test('passing a object', function(t){
  //   t.equal(exercises.splitTheBill(2,2),4,'expect 4');
  //   t.equal(exercises.splitTheBill(2,0),1,'expect 1');
  //   t.end();
  // });
// });

//exp function tests

// test('exp function tests', function(t){
//   t.test('passing not relevant argumets', function(t){
//     t.false(exercises.exp('d',2),'expect false');
//     // t.false(exercises.exp([2],[2]),'expect false');
//     t.end();
//   });
//
//   t.test('passing a numbers', function(t){
//     t.equal(exercises.exp(2,2),4,'expect 4');
//     t.equal(exercises.exp(2,0),1,'expect 1');
//     t.end();
//   });
// });

//factorial function tests

// test('factorial function tests', function(t){
//   t.test('passing not relevant argumets', function(t){
//     t.false(exercises.factorial('d'),'expect false');
//     t.end();
//   });
//
//   t.test('passing a numbers', function(t){
//     t.equal(exercises.factorial(0),1,'expect 1');
//     t.equal(exercises.factorial(5),120,'expect 120');
//     t.end();
//   });
// });

//isAnagram function tests

// test('isAnagram function tests', function(t){
//   t.test('inproper arguments',function(t){
//     t.false(newFunctions.isAnagram(5,[]),'expect false');
//     t.false(newFunctions.isAnagram(123,321),'expect false');
//     t.end();
//   });
//
//   t.test('proper arguments',function(t){
//     t.true(newFunctions.isAnagram('hello', 'lelho'),'expect true');
//     t.false(newFunctions.isAnagram('hello', 'leho'),'expect false');
//     t.end();
//   })
// })

// boxVolume function tests

test('boxVolume function tests', function(t){
  t.test('inproper arguments',function(t){
    t.false(newFunctions.boxVolume('a','b','c'),'expect false');;
    t.end();
  });

  t.test('proper arguments',function(t){
    t.equal(newFunctions.boxVolume(10,10,10),1,'expect 1');
    t.equal(newFunctions.boxVolume(5,5,5),0.125,'expect 0.125');
    t.equal(newFunctions.boxVolume(5,5,5.1),0.1275,'expect 0.1275');
    t.end();
  });
});

// intersection function tests
