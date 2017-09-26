// Constructor to initialize the stack
var Stack = function() {
    this.id = 0;
    this.actionsList = [];
}

// Pushes a new element on top of the stack
Stack.prototype.push = function(element) {
    // TODO
}
  
// Removes the top most element from the stack and returns that element
Stack.prototype.pop = function() {
    // TODO
}
  
// Returns the top-most element, but doesn't change the stack
Stack.prototype.top = function() {
    // TODO
}
  
// Returns true if stack has no elements in it, otherwise false
Stack.prototype.isEmpty = function() {
    // TODO
}
  
// Removes all elements from the stack
Stack.prototype.clear = function() {
    // TODO: remove all elements from stack
}

var stack = new Stack();

module.exports = {
    Stack: Stack,
    push: push,
}