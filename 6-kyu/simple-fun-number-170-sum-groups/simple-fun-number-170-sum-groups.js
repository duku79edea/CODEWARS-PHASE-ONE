function collapse(arr, parity) {
  const out = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === parity) {
      let sum = 0;
      while (i < arr.length && arr[i] % 2 === parity) {
        sum += arr[i++];
      }
      out.push(sum);
    } else {
      out.push(arr[i++]);
    }
  }
  return out;
}
​
function sumGroups(arr) {
  let cur = arr;
  while (true) {
    const next = collapse(collapse(cur, 0), 1)
    if (next.length === cur.length) {
      return cur.length
    }
    cur = next;
  }
}