// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// Example:
// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3

// Very slow solution
class MovingAverage {
  constructor(size) {
    this.capacity = size;
    this.data = [];
  }

  next(val) {
    if (this.data.length === this.capacity) this.data.shift();
    this.data.push(val);
    return this.data.reduce((acc, cur) => acc + cur) / this.data.length;
  }
}

module.exports = MovingAverage;
