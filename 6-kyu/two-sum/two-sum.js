function twoSum(nums, tarNum){
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if((nums[i] + nums[j]) === tarNum){
        return [i,j]
      }
    }
  }
}
console.log(twoSum([3, 2, 3], 5));