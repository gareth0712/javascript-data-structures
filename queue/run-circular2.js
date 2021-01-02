const CircularQueue = require('./CircularQueue');

const myCircularQueue = new CircularQueue(8);
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(9); // return True
myCircularQueue.enQueue(5); // return True
myCircularQueue.enQueue(0); // return True
myCircularQueue.deQueue(); // return True
myCircularQueue.deQueue(); // return True
// console.log(`Is empty? ${myCircularQueue.isEmpty()}`); // return False
// console.log(`Is empty? ${myCircularQueue.isEmpty()}`); // return False
console.log(myCircularQueue.rear()); // return 0
myCircularQueue.deQueue(); // return True
// console.log('We have made a dequeue.');
myCircularQueue.printData();
// myCircularQueue.deQueue(); // return True
// myCircularQueue.deQueue(); // return True
// myCircularQueue.deQueue(); // return True
myCircularQueue.printData();
