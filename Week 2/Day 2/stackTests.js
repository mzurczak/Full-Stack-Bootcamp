var test = require("tape");
var stack = require("./stackExercise.js");
var tapSpec = require("tap-spec");

test('Stack object test', function (t){
    var Stack = require("./stackExercise.js").Stack;
    

    t.test('Constructor test', function(t){
      t.deepEqual(new Stack(), {actionsList: []});
      t.end();
    });

    t.test('push test', function(t){
        var stack = new Stack();
        t.deepEqual(stack.push({TODO: 'task'}), stack.actionsList[0] = {TODO: 'task'});
        t.end();
    });

    t.test('pop test', function(t){
        var stack = new Stack();
        stack.push({firstTask: "something"});
        stack.push({TODO: 'task'});
        t.deepEqual(stack.pop(), [{firstTask: "something"}]);
        t.end();
    });

    t.test('top test', function(t){
        var stack = new Stack();
        stack.push({firstTask: "something"});
        stack.push({TODO: 'task'});
        t.deepEqual(stack.top(), {TODO: 'task'});
        t.end();
    });

    t.test('isEmpty test', function(t){
        var stack = new Stack();
        stack.push({firstTask: "something"});
        stack.push({TODO: 'task'});
        t.false(stack.isEmpty());
        stack.clear();
        t.true(stack.isEmpty());
        t.end();
    });

    t.test('clear test', function(t){
        var stack = new Stack();
        stack.push({firstTask: "something"});
        stack.push({TODO: 'task'});
        t.deepEqual(stack.clear(), stack.actionsList = []);
        t.end();
    });
});