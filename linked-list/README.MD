# Linked List

Linked lists are linear data structures that hold data in individual objects called nodes. These nodes hold both the data and a reference to the next node in the list.

Linked lists are often used because of their efficient insertion and deletion. They can be used to implement stacks, queues, and other abstract data types.

# Properties of Linked List

Run the following to show a simple Linked List

```
> node simple-demo.js
```

It returns the following

```
Node { data: 100, next: Node { data: 200, next: null } }
```

Each node contains a value and a reference (also known as a pointer) to the next node. The last node often points to a null node which means the list is at its end.

Linked lists offer some important advantages over other linear data structures. Unlike arrays, they are a dynamic data structure, resizable at run-time. Also, the insertion and deletion operations are efficient and easily implemented.

However, linked lists do have some drawbacks. Unlike arrays, linked lists aren't fast at finding the nthn^\text{th}nth item. To find a node at position nnn, you have to start the search at the first node in the linked list, following the path of references nnn times. Also, because linked lists are inherently sequential in the forward direction, operations like backward traversal--visiting every node starting from the end and ending in the front--is especially cumbersome.

Additionally, linked lists use more storage than the array due to their property of referencing the next node in the linked list.

Finally, unlike an array whose values are all stored in contiguous memory, a linked list's nodes are at arbitrary, possibly far apart locations in memory. This means that the CPU can't effectively cache the contents of a linked list nearly as well as an array resulting in poor performance. This is the main reason why ring buffers are used to implement queues instead of linked lists in high-performance applications where middle insertion and deletion functionality isn't needed (e.g. network drivers).

# Time and Space Complexity

## Time

Linked lists have most of their benefit when it comes to the insertion and deletion of nodes in the list. Unlike the dynamic array, insertion and deletion at any part of the list takes constant time.

However, unlike dynamic arrays, accessing the data in these nodes takes linear time because of the need to search through the entire list via pointers. It's also important to note that there is no way of optimizing search in linked lists. In the array, we could at least keep the array sorted. However, since we don't know how long the linked list is, there is no way of performing a binary search:

Insertion - O(1),Deletion - O(1),Indexing - O(n),Search - O(n).\begin{array}{c}&&\text{Insertion - O(1),} &\text{Deletion - O(1),} \\ &\text{Indexing - O(n),} &\text{Search - O(n)}.\end{array}​Indexing - O(n),​Insertion - O(1),Search - O(n).​Deletion - O(1),

## Space

Linked lists hold two main pieces of information (the value and pointer) per node. This means that the amount of data stored increases linearly with the number of nodes in the list. Therefore, the space complexity of the linked list is linear:
