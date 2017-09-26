// Constructor to initialize the queue
var Queue = function() {
    this.tasksQueue = [];
  }
  
  // Adds element at the end of the queue
  Queue.prototype.enqueue = function(element) {
    return this.tasksQueue[this.tasksQueue.length]=element;
  }
  
  // Removes element from the front, and returns that element
  Queue.prototype.dequeue = function() {
    var executedTask = this.tasksQueue[0];
    this.tasksQueue=this.tasksQueue.slice(1);
    return executedTask;
  }
  
  // Returns front-most element from queue, but doesn't remove it
  Queue.prototype.first = function() {
    if (this.tasksQueue.length>0) return this.tasksQueue[0];
    else return 'No tasks to execute';
  }
  
  // Return true if queue has no elements in it, otherwise false
  Queue.prototype.isEmpty = function() {
    if (this.tasksQueue.length>0) return false;
    else return true;
  }
  
  // Remove all elements from queue
  Queue.prototype.clear = function() {
    return this.tasksQueue = [];
  }

module.exports = {
    Queue: Queue,
}