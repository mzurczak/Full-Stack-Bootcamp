// Constructor to initialize the stack
var Stack = function() {
    this.actionsList = [];
}

// Pushes a new element on top of the stack
Stack.prototype.push = function(element) {
     return this.actionsList[this.actionsList.length] = element;
}
  
// Removes the top most element from the stack and returns that element
Stack.prototype.pop = function() {
    return this.actionsList = this.actionsList.slice(0,-1);
}
  
// Returns the top-most element, but doesn't change the stack
Stack.prototype.top = function() {
    return this.actionsList[this.actionsList.length-1];
}

// Returns true if stack has no elements in it, otherwise false
Stack.prototype.isEmpty = function() {
    if (this.actionsList.length>0) return false;
    else return true;
}
  
// Removes all elements from the stack
Stack.prototype.clear = function() {
    return this.actionsList = [];
}

module.exports = {
    Stack: Stack,
}

//Balanced Parentheses
// Write a function that checks a string whether all parentheses, braces, and curly braces are "balanced."
// function(asdf) {} -> Balanced
// {Hi ("class")} -> Balanced
// {{ -> Not balanced
// {(}) -> Not balanced

Stack.prototype.isBallanced = function(str){
    var openings = '([{';
    // console.log(this.actionsList);
  for (var i=0; i<str.length; i++){
    if (openings.includes(str.charAt(i))){
        this.push(str.charAt(i));
    } 
    else if (((str.charAt(i)===')')&&(this.actionsList[this.actionsList.length-1]==='('))
    ||((str.charAt(i)===']')&&(this.actionsList[this.actionsList.length-1]==='['))
    ||((str.charAt(i)==='}')&&(this.actionsList[this.actionsList.length-1]==='{'))) this.pop();
  }
  if (this.actionsList.length===0) return true;
  return false;
}
 
// var stack = new Stack();  
// console.log(stack.isBallanced('function(asdf) {}'));
// console.log(stack.isBallanced('{Hi ("class")}'));
// console.log(stack.isBallanced('{{'));
// console.log(stack.isBallanced('{(})'));