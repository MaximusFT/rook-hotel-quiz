// Helper
function isPositiveInteger(some: Number) {
  const num = Number(some);

  if (Number.isInteger(num) && num > 0) {
    return true;
  }

  return false;
}

// Version 1
function quizVerOne(number: Number) {
  let ret = [];
  if (isPositiveInteger(number)) {
    if (!(Number(number) % 2)) {
      ret.push("candy");
    }
    if (!(Number(number) % 11)) {
      ret.push("bar");
    }
    const result = ret.join("");
    return result ? result : number;
  }
  return "It is not Positive Integer";
}

// Version 2
function quizVerTwo(number: Number) {
  if (isPositiveInteger(number)) {
    if (!(Number(number) % 2)) {
      if (!(Number(number) % 22)) {
        return "candybar";
      }
      return "candy";
    }
    if (!(Number(number) % 11)) {
      return "bar";
    }
    return number;
  }
  return "It is not Positive Integer";
}

console.log("1 v1", -1, quizVerOne(-1));
console.log("1 v1", 0, quizVerOne(0));
console.log("1 v1", 1, quizVerOne(1));
console.log("1 v1", 2, quizVerOne(2));
console.log("1 v1", 11, quizVerOne(11));
console.log("1 v1", 22, quizVerOne(22));
console.log("1 v1", 26, quizVerOne(26));
console.log("1 v1", 31, quizVerOne(31));
console.log("1 v1", 44, quizVerOne(44));
console.log("1 v1", 66, quizVerOne(66));
console.log("1 v1", 121, quizVerOne(121));

console.log("1() v2", -1, quizVerTwo(-1));
console.log("1 v2", 0, quizVerTwo(0));
console.log("1 v2", 1, quizVerTwo(1));
console.log("1 v2", 2, quizVerTwo(2));
console.log("1 v2", 11, quizVerTwo(11));
console.log("1 v2", 22, quizVerTwo(22));
console.log("1 v2", 26, quizVerTwo(26));
console.log("1 v2", 31, quizVerTwo(31));
console.log("1 v2", 44, quizVerTwo(44));
console.log("1 v2", 66, quizVerTwo(66));
console.log("1 v2", 121, quizVerTwo(121));
