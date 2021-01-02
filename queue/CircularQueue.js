// Implementation the CircularQueue class:

//     CircularQueue(k) Initializes the object with the size of the queue to be k.
//     int Front() Gets the front item from the queue. If the queue is empty, return -1.
//     int Rear() Gets the last item from the queue. If the queue is empty, return -1.
//     boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
//     boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
//     boolean isEmpty() Checks whether the circular queue is empty or not.
//     boolean isFull() Checks whether the circular queue is full or not.

// Input
// ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
// [[3], [1], [2], [3], [4], [], [], [], [4], []]
// Output
// [null, true, true, true, false, 3, true, true, true, 4]

// Explanation
// MyCircularQueue myCircularQueue = new MyCircularQueue(3);
// myCircularQueue.enQueue(1); // return True
// myCircularQueue.enQueue(2); // return True
// myCircularQueue.enQueue(3); // return True
// myCircularQueue.enQueue(4); // return False
// myCircularQueue.Rear();     // return 3
// myCircularQueue.isFull();   // return True
// myCircularQueue.deQueue();  // return True
// myCircularQueue.enQueue(4); // return True
// myCircularQueue.Rear();     // return 4

// Constraints:
// 1 <= k <= 1000
// 0 <= value <= 1000
// At most 3000 calls will be made to enQueue, deQueue, Front, Rear, isEmpty, and isFull.

class CircularQueue {
  constructor(size) {
    this.data = new Array(size).fill(null);
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  front() {
    if (this.count === 0) return -1;
    return this.data[this.head];
  }

  rear() {
    if (this.count === 0) return -1;
    return this.data[this.tail];
  }

  isFull() {
    return this.data.length === this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  enQueue(value) {
    if (this.isFull()) return false;
    if (this.isEmpty()) {
      this.head = 0;
      this.tail = 0;
      this.data[this.tail] = value;
      this.count++;
      return true;
    }
    if (this.tail + 1 < this.data.length) {
      this.tail++;
    } else {
      this.tail = 0;
    }
    this.data[this.tail] = value;
    this.count++;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;
    this.data[this.head] = null;
    if (this.head + 1 < this.data.length) {
      this.head++;
    } else {
      this.head = 0;
    }
    this.count--;
    return true;
  }

  printData() {
    console.log(this.data);
    console.log(this.head, this.tail);
  }
}

module.exports = CircularQueue;
