function insertionSort(arr){
  var sortedArr = [];
  while (arr.length>0){
    var currentMin = arr[0];
    var currentMinIndex=0;
    for (var i in arr){
      if (arr[i]<currentMin){
        currentMin=arr[i];
        currentMinIndex=i;
      }
    }
    sortedArr.push(currentMin);
    arr.splice(currentMinIndex, 1);
  }
  return sortedArr;
}

var arr = [2, 6, 1, 1, 15, 63, -10, 14, 205, 2, 369, 147, 246, 0];
console.log(insertionSort(arr));
