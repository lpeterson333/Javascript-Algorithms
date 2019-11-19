//first create array of random integers to work with
function createArray(lengthOfArray, min, max){
  let randomArray = [];
  i=0;
  while (i<lengthOfArray){
  randomArray.push(Math.floor(Math.random() * (max - min)) + min);
  i++;
}
return randomArray;
}
let arr = createArray(10,1,99);
console.log(arr)
bubbleSort(arr);
//bubble sort array
function bubbleSort(sortMeArr){
  //look at array before sorting
  console.log(sortMeArr);
  //if loop through array once, the smallest value in the array ends up at the end of the array, so the next loop through, only have to go to the second to last element
  let stop = sortMeArr.length;
  let swap;
  do{
    swap = false;
    for (i= 0; i < stop; i++){
        if (sortMeArr[i] < sortMeArr[i+1]){
        //es6 swap
        [sortMeArr[i], sortMeArr[i+1]] = [sortMeArr[i+1], sortMeArr[i]]
        swap = true;
        } 
    }
  stop--;
  
} while (swap) //stop the loop if no swaps
  console.log("after swap")
  console.log(sortMeArr)
}