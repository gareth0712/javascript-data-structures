// Amazon Interview question
// Given staircases N, you can either climb each staircase with 1 step or 2 steps
// You are required to write a function numWays(N) that returns the number of ways you can climb up

// Examples
// For 2 staircases, you can climb up with 2 ways: { [0, 2], [0, 1, 2] } => 2 ways
// For 3 staircases,
// when you climb up 1 step first, { [0, 1, 3], [0, 1, 2, 3]} => 2 ways = consideration we make when we have 2 staircases
// when you climb up 2 steps first, { [0, 2, 3] } => 1 way = consideration we make when we have 1 staircase
// 2 + 1 = 3 ways in total
// For 4 staircases,
// when you climb up 1 step first, { [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 4]} => 3 ways = considerations we make when we have 3 staircases
// when you climb up 2 steps first, { [0, 2, 3, 4], [0, 2, 4] } => 2 ways = consideration we make when we have 2 staircases
// We find that it is repeating the consideration of N - 1 and N - 2
// numWays(N) = numWays(N - 1) + numWays(N - 2) where N > 1
// numWays(N) = 1 where N <= 1

// 1) Using recursion: Time complexity is O(2^n)
// const numWays = (staircase) => {
//   if (staircase > 1) {
//     return numWays(staircase - 1) + numWays(staircase - 2);
//   } else {
//     // For staircase of 1 or 0, you only have 1 way to climb; { [0, 1] } and { [0] }
//     return 1;
//   }
// };

// 2) More efficient way: Time complexity is O(n)
const numWays = (staircase) => {
  if (staircase < 0) return undefined;
  if (staircase === 1 || staircase === 0) return 1;

  let previous = 1,
    penultimate = 1;
  let current = previous + penultimate;
  let count = 2;
  while (count < staircase) {
    penultimate = previous;
    previous = current;
    current = previous + penultimate;
    count++;
  }
  return current;
};

console.log(numWays(4)); // 5
console.log(numWays(5)); // 8
console.log(numWays(6)); // 13
console.log(numWays(7)); // 21
console.log(numWays(8)); // 34
