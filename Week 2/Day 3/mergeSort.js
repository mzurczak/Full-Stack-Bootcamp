var sortedArr = [];

function mergeSort(arr){
  var newArr = [];
  var arr1;
  var arr2;
  if (!Array.isArray(arr)) return false;
  if (arr.length>2){
    arr1 = mergeSort(arr.slice(0, Math.floor(arr.length/2)));
    arr2 = mergeSort(arr.slice(Math.floor(arr.length/2)));
  }
  else {
    if (arr.length===2){
      if (arr[0]<arr[1]){
        newArr.push(arr[0]);
        newArr.push(arr[1]);
      } else {
        newArr.push(arr[1]);
        newArr.push(arr[0]);
      }
    } 
    newArr.push(arr[0]);
  }
  return mergeAll(newArr);
}

function mergeAll(arr){
  if (sortedArr.length===0) sortedArr.push(arr);
  

}
var arr = [2, 6, 1, 1, 15, 63, -10, 14, 205, 2, 369, 147, 246, 0];
console.log(mergeSort(arr));