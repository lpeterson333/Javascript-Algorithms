//Given an array of numbers, find the maximal product you can get from multiplying two numbers in the array

//First create an array of random integer numbers to work with
//Iterate through the array keeping track of the two highest numbers
//Multiply the two highest numbers
//slight twist if there are negative numbers in the array since multiplying two negative numbers will yield a positive number but multiplying a negative and positive number will yield a negative number
//Time complexity of 0(n) since iterating through the array only once and time will depend on the number of elements in the array
//Space complexity of 0(1) since only keeping track of the two maximal positive integers and two minimal negative integers in the array


function createRandomArray(nIndex, max, min){
  let randomNumArray = [];
  for (i = 0; i <= nIndex; i++){
    //generate a random integer number and push onto array
    randomNumArray.push(Math.floor(Math.random() * (max - min)) + min)
  }
  return randomNumArray;
}

console.log(createRandomArray(20,-99,99))

function findMaxProduct(intArray){
  let maxNums = {
    posA: 0,
    posB: 0,
    negA: 0,
    negB: 0
  }
  //find max positive and min negative numbers
  intArray.forEach(elem => {
    if (elem >= 0){
      //if positive number
      if (elem > maxNums.posA){
        maxNums.posA = elem;
      }else if (elem > maxNums.posB){
        maxNums.posB = elem;
      }
    }else if (elem < 0){
      //if negative number
      //note...do not need to check for equality since if equal the maxNum will not change
      if (elem < maxNums.negA){
        maxNums.negA = elem;
      }else if (elem < maxNums.negB){
        maxNums.negB = elem;
      }
    }
  })

  let maxPosProduct = maxNums.posA * maxNums.posB;
  let maxNegProduct = maxNums.negA * maxNums.negB;
  let result = [];
  if (maxPosProduct > maxNegProduct){
    result.push(maxNums.posA);
    result.push(maxNums.posB);
  } else if (maxPosProduct < maxNegProduct){
    result.push(maxNums.negA);
    result.push(maxNums.negB);
  }else{
    result.push(maxNums.posA);
    result.push(maxNums.posB);
    result.push(maxNums.negA);
    result.push(maxNums.negB);
  }
return result;

}

let testArray = createRandomArray(20,-99,99);
console.log(testArray);
console.log(findMaxProduct(testArray));