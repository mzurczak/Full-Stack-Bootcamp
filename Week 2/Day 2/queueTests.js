var test = require("tape");
// var queue = require("./queueExercise.js");

test('Queue object tests', function(t){
    var Queue = require("./queueExercise.js").Queue;
    
    t.test('Constructor test', function(t){
        t.deepEqual(new Queue(), {tasksQueue: []});
        t.end();
    });

    t.test('enqueue test', function(t){
        var queue = new Queue();
        t.deepEqual(queue.enqueue({TODO: "something"}), {TODO: "something"});
        t.end();
    });

    t.test('dequeue test', function(t){
        var queue = new Queue();
        queue.enqueue({firstTask: "something"});
        queue.enqueue({secondTask: 'task'});
        t.deepEqual(queue.dequeue(), {firstTask: "something"});
        t.deepEqual(queue.tasksQueue, [{secondTask: 'task'}]);
        t.end();
    });

    t.test('first test', function(t){
        var queue = new Queue();
        t.equal(queue.first(), 'No tasks to execute');
        queue.enqueue({firstTask: "something"});
        queue.enqueue({secondTask: 'task'});
        t.deepEqual(queue.first(), {firstTask: "something"});
        t.end();
    });

    t.test('isEmpty test', function(t){
        var queue = new Queue();
        t.true(queue.isEmpty());
        queue.enqueue({firstTask: "something"});
        t.false(queue.isEmpty());
        t.end();
    });

    t.test('clear test', function(t){
        var queue = new Queue();
        queue.enqueue({firstTask: "something"});
        t.deepEqual(queue.clear(), queue.tasksQueue = []);
        t.end();
    })
});