function countPalin(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (i === j) {
        count++;
        continue;
      }
      const checkPalin = isPalin(i, j, str);
      checkPalin ? count++ : void 0;
    }
  }
  // console.log("res==", count);
  return count;
}

function isPalin(i, j, str) {
  let m = i,
    n = j;
  while (m < n) {
    if (str[m] !== str[n]) return false;
    m++, n--;
  }
  return true;
}
// naive solution o(3)
countPalin("abb");
