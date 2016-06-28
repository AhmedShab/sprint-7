// Your code here.
function min(x, y) {
  return x < y ? x : y;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Your code here.
function isEven(x) {
  if (x === 0) return true;
  else if (x === 1 || x < 0) return false;

  return isEven(x - 2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Your code here.
function countBs(str) {
  var test = "B";
  var target = str.split("");

  return target.filter(function (item) {
    return item === test;
  }).length;
}


function countChar(target, test) {
  target = target.split("");

  return target.filter(function (item) {
    return item === test;
  }).length;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
