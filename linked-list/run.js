const { LinkedList } = require('./linked-list');

const ll = new LinkedList();

ll.insertFirst(600);
ll.insertFirst(500);
ll.insertFirst(400);
ll.insertFirst(200);
ll.insertFirst(100);
// Add
ll.insertAt(300, 2);

// Print all data in list
console.log('Full list');
console.log(ll.DataInList());

// Get
const desiredIndex = 3;
console.log(`getting node at ${desiredIndex}`);
console.log(ll.getNode(desiredIndex));

// Remove
ll.removeNode(desiredIndex);
console.log(`Removing node at ${desiredIndex}`);
console.log(ll.DataInList());

// clear list
console.log('Clearing the list');
ll.clear();
console.log(ll.DataInList());
