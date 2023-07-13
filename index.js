function hasTargetSum(array, target) {
  // Write your algorithm here
  const storeNum = {};
  for(let i = 0; i < array.length; i++){
    const currNum = array[i];
    const total = target - currNum;
    if (storeNum[total]){
      return true;
    };
    storeNum[currNum] = true;
  };
  return false;
};

/* 
  Write the Big O time complexity of your function here

  - The Big O time complexity of hasTargetSum(array, target) is O(n) n is the number of elements in the given array

*/

/* 
  Add your pseudocode here

  function hasTargetSum(array,target)

    initialize empty array called storeNum

    iterate over each number in the input array:

      initialize a constant to store the current number
      calculate the differences of target minus current number

      if the complement exist
        return true

      complement exist = true
  
  if no complement exist
    return false

*/

/*
  Add written explanation of your solution here

  write a function called hasTargetSum taking two arguments array and index target:
    create empty object to store complements

    iterate over array to see if any complements exist
      complements = (any number with-in the array = target)
    
    return true if complement exist
  
  return false if complement does not exist

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
