# Linked List

Linked lists are linear data structures that hold data in individual objects called nodes. These nodes hold both the data and a reference to the next node in the list.

Linked lists are often used because of their efficient insertion and deletion. They can be used to implement stacks, queues, and other abstract data types.

Run the following to show a simple Linked List

```
> node simple-demo.js
```

It returns the following

```
Node { data: 100, next: Node { data: 200, next: null } }
```

For demonstration of insertion (at the beginning or add to nth index or last), deletion (at the beginning or delete nth node or last), and getting a list of data from linked list, run the following

```
node run.js
```

# Properties of Linked List

Each node contains a value and a reference, or pointer, to next node. The last one often points to a null node which means the list is at its end.

## Advantages

- A dynamic data structure, resizable at run-time
- Insertion and deletion operations are time efficient and could be implemented easily

## Disadvantages

- Not fast at finding the nth node. To find nth node, we should start from the beginning node, following the path of references with n number of times.

- Since they are inherently sequential in the forward direction, operations like backward traversal, that is, starting from the last node and ending in the first node, is cumbersome.

- They use more storage than arrays because of their property of referencing next node.

- Unlike an array whose values are all stored in contiguous memory, a linked list's nodes are at arbitrary, possibly far apart locations in memory => CPU can't effectively cache a linked list nearly like an array. This results in poor performance.

- The above states the main reason why ring buffers are used to implement queues instead of linked lists in high-performance applications, of which middle insertion and deletion functionality arent needed.

# Time and Space Complexity

## Time

Linked lists have most of their benefit when it comes to the insertion and deletion of nodes in the list. Unlike the dynamic array, insertion and deletion at any part of the list takes constant time.

However, unlike dynamic arrays, accessing the data in these nodes takes linear time because of the need to search through the entire list via pointers. It's also important to note that there is no way of optimizing search in linked lists. In the array, we could at least keep the array sorted. However, since we don't know how long the linked list is, there is no way of performing a binary search:

Insertion - O(1),Deletion - O(1),Indexing - O(n),Search - O(n).\begin{array}{c}&&\text{Insertion - O(1),} &\text{Deletion - O(1),} \\ &\text{Indexing - O(n),} &\text{Search - O(n)}.\end{array}​Indexing - O(n),​Insertion - O(1),Search - O(n).​Deletion - O(1),

## Space

Linked lists hold two main pieces of information (the value and pointer) per node. This means that the amount of data stored increases linearly with the number of nodes in the list. Therefore, the space complexity of the linked list is linear:
