const CircularQueue = require('./CircularQueue');

const myCircularQueue = new CircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
console.log('Queue is full now.');
myCircularQueue.printData();
myCircularQueue.enQueue(4); // return False
console.log('Queue is full and so cannot add anything');
myCircularQueue.printData();
console.log(myCircularQueue.rear()); // return 3
console.log(myCircularQueue.isFull()); // return True
myCircularQueue.deQueue(); // return True
console.log('We have made a dequeue.');
myCircularQueue.printData();
myCircularQueue.enQueue(4); // return True
console.log(myCircularQueue.rear()); // return 4
console.log('The queue after last enQueue');
myCircularQueue.printData();
