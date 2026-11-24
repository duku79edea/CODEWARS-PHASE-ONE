function isFibo(a, b, f){
  if(a === f || b === f) { 
    return true
  }
  if(a === 0 && b === 0) {
    return 0
  }
  let prev = a;
  let curr = b;
  
  while(curr < f){
    let next = prev + curr;
    if(next === f) return true;
    prev = curr;
    curr = next;
  }
  return false
}