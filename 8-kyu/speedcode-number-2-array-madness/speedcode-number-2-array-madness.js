function arrayMadness(a, b) {
  let sumOfA = a.reduce((sum, num) => sum + num**2, 0);
  let sumOfB  = b.reduce((sum, num) => sum + num**3, 0)
​
  if(sumOfA > sumOfB){
    return true
  }else {
    return false;
  }
}
​
​