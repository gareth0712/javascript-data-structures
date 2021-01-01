const { Node } = require('./Linked-list');

// Linked-list structure
// n1 = { data: 100, next: n2 }; n2 = { data: 200, next: n3 } ...
const n2 = new Node(200);
const n1 = new Node(100, n2);
console.log(n1);
