var test = require("tape");

test('Set object tests', function(t){
    var Set = require('./setExercise.js').Set;
    
    t.test('Constructor test', function(t){
        t.deepEqual(new Set(), {elementsList : {}});
        t.end();
    });

    t.test('insert test', function(t){
        var set = new Set();
        var a='str';
        t.deepEqual(set.insert(a), [a]);
        t.deepEqual(set.insert(a), 'Element already exists');
        t.end();
    });

    t.test('remove test', function(t){
        var set = new Set();
        var a='a';
        var b='b';
        set.insert(a);
        set.insert(b);
        t.deepEqual(set.remove(b), [a]);
        t.end();
    });

    t.test('has test', function(t){
        var set = new Set();
        var a='a';
        var b='b';
        set.insert(a);
        set.insert(b);
        t.true(set.has(b));
        t.end();
    });

    t.test('all test', function(t){
        var set = new Set();
        var a='a';
        var b='b';
        set.insert(a);
        set.insert(b);
        t.deepEqual(set.all(), ["a", "b"]);
        t.end();
    });

    t.test('length test', function(t){
        var set = new Set();
        var a='a';
        var b='b';
        set.insert(a);
        set.insert(b);
        t.equal(set.length(), 2);
        t.end();
    })
})