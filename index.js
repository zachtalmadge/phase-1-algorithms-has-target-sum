function hasTargetSum(array, target) {
  // Write your algorithm here

  // sort array into ascending order
  array = array.sort((a, b) => a - b);

  // declare pointers
  let left = 0;
  let right = array.length - 1;

  // stop the loop when the left pointer is at the same index as the right pointer
  while (left < right){
    let sum = array[left] + array[right]

    if (sum === target){
      return true;
    } else if (sum > target){
      right--
    } else {
      left++
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  
  Space Complexity - O(1) 
    explanation: the number of variables declared will remain the same no matter the size of the input which is the array in this case

  Time Complexity - O(n)
    explanation: the number of operations will increase relative to the size of the input, specifically with the use of the Array method sort() along with the while loop checking to see if the sum is equal to the target and changing the values of the variables left and right based on the conditional
*/

/* 
  Add your pseudocode here
  // sort the array into ascending order
  // create pointers
  // evaluate if pointers resolve to target
  // if they do not, continue iterating by moving pointers
  // check to see if target is met
  // return false if target is not met
*/

/*
  Add written explanation of your solution here

  - using the multiple pointers pattern, the function will create two pointers that will traverse the array until the target is found and return true. if the target is not found, the function will return false

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
