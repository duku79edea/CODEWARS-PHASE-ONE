function deleteNth(arr,n){
  const counts = new Map();
  const results = [];
  
  for(const num of arr){
    let count = counts.get(num) || 0;
    if(count < n){
      results.push(num);
      counts.set(num, count + 1);
    }
  }
  return results;
}