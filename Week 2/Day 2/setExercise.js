// Constructor to initialize the set
var Set = function() {
    this.elementsList = [];
}
  
// inserts an element
Set.prototype.insert = function(element) {

    if (this.elementsList.indexOf(element) < 0) {
        this.elementsList.push(element);
        return this.elementsList;
    }
    else return 'Element already exists';
}
  
// removes an element
Set.prototype.remove = function(element) {
    return this.elementsList = this.elementsList.slice(this.elementsList.indexOf(element)-1,this.elementsList.indexOf(element));
}
  
// checks if an element exists in the set
Set.prototype.has = function(element) {
    if (this.elementsList.indexOf(element)>=0) return true;
    else return false;
}
  
// returns array of all entries
Set.prototype.all = function() {
    return this.elementsList;
}
  
// returns the number of all entries
Set.prototype.length = function() {
    return this.elementsList.length;
}

module.exports = {
    Set:Set
}

var a = 'a';
var b = 'b';
var c = 'c';
var d = 'd';
var e = 'e';
var f = 'f';
var set1 = new Set();
var set2 = new Set();
set1.insert(a);
set1.insert(b);
set1.insert(c);
set1.insert(d);
set2.insert(c);
set2.insert(d);
set2.insert(e);
set2.insert(f);

//return a set of all elements that are either in A or B

function union(arr1, arr2){
    return arr1.concat(arr2);
}

//return a set of elements are in A and in B

function intersection(arr1, arr2) {
  var intersecArr=[];
  for (var i of arr1){
      if (arr2.indexOf(i)===-1) intersecArr.push(i);
  }
  for (var i of arr2){
    if (arr1.indexOf(i)===-1) intersecArr.push(i);
  }
  return intersecArr;
}

//return all elements that are in A but not in B

function difference(arr1, arr2) {
  var diffArr=[];
  for (var i of arr1){
    if (arr2.indexOf(i)===-1) diffArr.push(i);
  }
  return diffArr;
}

var setUnion = union(set1.elementsList, set2.elementsList);
console.log(setUnion); 
setUnion = intersection(set1.elementsList, set2.elementsList);
console.log(setUnion);
setUnion = difference(set1.elementsList, set2.elementsList);
console.log(setUnion);