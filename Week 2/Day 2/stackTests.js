var test = require("tape");
var stack = require("./stackExercise.js");
var tapSpec = require("tap-spec");

test.createStream()
.pipe(tapSpec())
.pipe(process.stdout);

//*************************************************************
//Stack tests
//*************************************************************



test('Stack object test', function (t){
    var Stack = require("./stackExercise.js").Stack;
    var stack = new Stack();

    t.test('Constructor test', function(t){
      t.deepEqual(new Stack(), {id: 0, actionsList: []});
      t.end();
    });

    t.test('push test', function(t){
        t.deepEqual(stack.push({TODO: 'task'}), stack.actionsList = [{TODO: 'task'}]);
        t.end();
    });

    t.test('pop test', function(t){
        t.deepEqual(stack.pop({TODO: 'task'}), stack.actionsList = [{TODO: 'task'}]);
        t.end();
    });

    t.test('top test', function(t){
        t.deepEqual(stack.top({TODO: 'task'}), stack.actionsList = [{TODO: 'task'}]);
        t.end();
    });

    t.test('isEmpty test', function(t){
        t.deepEqual(stack.isEmpty({TODO: 'task'}), stack.actionsList = [{TODO: 'task'}]);
        t.end();
    });

    t.test('clear test', function(t){
        t.deepEqual(stack.clear({TODO: 'task'}), stack.actionsList = [{TODO: 'task'}]);
        t.end();
    });

});