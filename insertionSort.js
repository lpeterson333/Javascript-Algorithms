//create array to work with
function createArray(lengthArr, min, max){
  let myRandomArr = [];
  for (i=0; i < lengthArr; i++){
    myRandomArr.push(Math.floor(Math.random() * (max-min)) + min);
  }
  return myRandomArr;
}


//insertion sort
//starting from the second position in the array
//kind of working backwards
//if value behind is less than current value then swap 
//continue until reach index 0
function insertionSort(sortMeArr){
  for (i=1; i< sortMeArr.length; i++){
    let j = i;
    do {
      if (sortMeArr[j] < sortMeArr[j-1]){
        //swap values
        [sortMeArr[j], sortMeArr[j-1]] = [sortMeArr[j-1], sortMeArr[j]] 
      }j--;
    }while (j > 0)
  }
  return sortMeArr;
}

let newRandomArray = createArray(10, -99, 99);
console.log(newRandomArray);
insertionSort(newRandomArray);
console.log(newRandomArray);//note a new array is not created...array is sorted in place