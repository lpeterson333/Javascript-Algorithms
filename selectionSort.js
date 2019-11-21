//create a random array to work with
function createArray(numElems, min, max){
  let randArr = [];
  for (i = 0; i < numElems; i++){
      randArr.push(Math.floor(Math.random()*(max-min)) + min)
  }
  return randArr
}

// console.log(createArray(10, -99, 99))
  
  //Selection Sort
  //find the minimum value in the array
  //swap it with the first element
  //repeat with the next minimum value in the array, swapping with the next element 
  //swap occurs if larger or smaller depending on whether sorting in ascending or descending order
  //time complexity 0(n^2) because one needs to repeatedly scan array
  //space complexity 0(1) because we are sorting in place and swapping one element at a time
function selectionSort(sortMeArr){
  let min;
  for (i= 0; i < sortMeArr.length; i++){
    min = i;
    for (j = i + 1; j < sortMeArr.length; j++){
      if (sortMeArr[j] < sortMeArr[min]){
        min = j;
      }
    }
    if (min != i){
      [sortMeArr[min], sortMeArr[i]] = [sortMeArr[i], sortMeArr[min]]
    }
  }
return sortMeArr;

}

let someArr = createArray(10, 0, 99);
console.log(someArr)
selectionSort(someArr);
console.log(someArr)//note a new array is not created...array is sorted in place