var list = [1, 3, 5, 9, 12, 16, 18, 22, 26, 29, 30, 33, 35, 36, 38];

function binarySearchRecursive(arr, val, index) {
  var originIndex;
  if (index === undefined) originIndex=0;
  else originIndex = index;
  
  if ((arr.length === 1) && arr[0] !== val) return -1;
  if ((arr.length === 1) && arr[0] === val) return originIndex;
  if (arr[Math.floor(arr.length/2)]===val)
  return originIndex + Math.floor(arr.length/2);
  
  if (arr[Math.floor(arr.length/2)]>val){ 
    var newArr = arr.slice(0, [Math.floor(arr.length/2)]);
    return binarySearchRecursive(newArr, val, originIndex);
  }
  
  if (arr[Math.floor(arr.length/2)]<val){
    var newArr = arr.slice(Math.floor(arr.length/2)+1);
    originIndex = originIndex + arr.length-newArr.length;
    return binarySearchRecursive(newArr, val, originIndex);
  }
};

// console.log('expect 0 --> ' + binarySearchRecursive(list, 1));
// console.log('expect 4 --> ' + binarySearchRecursive(list, 12));
// console.log('expect 7 --> ' + binarySearchRecursive(list, 22));
// console.log('expect 9 --> ' + binarySearchRecursive(list, 29));
// console.log('expect 14 --> ' + binarySearchRecursive(list, 38));


function binarySearch(arr, val) {
  var originIndex=0;
  while (arr.length>=1){
    var mid = Math.floor(arr.length/2);
    if (arr[mid] === val) return originIndex + mid;
    else if (arr[mid] < val){
      originIndex = originIndex + arr.length-arr.slice(mid+1).length;
      arr = arr.slice(mid+1);
    } 
    else if (arr[mid] > val){
      arr = arr.slice(0, mid);
    }
  }
  return -1;
}

console.log('expect 0 --> ' + binarySearch(list, 1));
console.log('expect 4 --> ' + binarySearch(list, 12));
console.log('expect 7 --> ' + binarySearch(list, 22));
console.log('expect 9 --> ' + binarySearch(list, 29));
console.log('expect 14 --> ' + binarySearch(list, 38));
console.log('expect -1 --> ' + binarySearch(list, 0));

module.exports ={
  binarySearch: binarySearch,
  binarySearchRecursive: binarySearchRecursive
}