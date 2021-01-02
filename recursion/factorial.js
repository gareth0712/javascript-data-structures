// Time complexity O(n)
const fact = (num) => {
  if (num >= 1) {
    return num * fact(num - 1);
  } else {
    return 1;
  }
};

// 1! = 1 * 0! = 1
console.log(`Factorial of 1 is: ${fact(1)}`);
// 0! = 1
console.log(`Factorial of 0 is: ${fact(0)}`);
// 5! = 5 * 4! = 5 * 4 * 3! ... = 5 * 4 * 3 * 2 * 1
console.log(`Factorial of 5 is: ${fact(5)}`);
console.log(`Factorial of 20 is: ${fact(10)}`);
console.log(`Factorial of 20 is: ${fact(20)}`);
