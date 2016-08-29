
# Data Structures
A review of data structures for the Women Who Code DC Algorithms meet up. This is a work in progress. If you have suggestions, you can reach me at @kajari_ghosh (Twitter) or e-mail me at ghoshkaj@gmail.com.

## What are data structures?
A data structure is a way to organize data so that it can be used efficiently. An algorithm will usually run on a data structure. And because of that, a data structure can greatly influence an algorithm's run-time (computational complexity).

The number of computations it takes to insert, search and delete data into/from a data structure are measured with [Big-O](https://github.com/valeriecodes/big-o-review).

The number of computations it takes to insert, search and delete data from a data structure are also the measures by which you should should choose which data structure to choose with which algorithm. Here is a cheat-sheet for the common data structure operation time complexities: [Scroll to the second table](http://bigocheatsheet.com/)

### Arrays

Arrays are the most basic type of data structure and it is typically the first data structure that you use in any sort of coding. It is a collection of elements (of usually the same type) stored contiguously (right next to each other in a sequence) in memory. Each element has an index as its address. The index is how that element is accessed.

This is how an array can be visualized:

<img width="479" alt="screen shot 2016-08-08 at 10 45 25 am" src="https://cloud.githubusercontent.com/assets/6777404/17497731/61c46070-5d91-11e6-95b9-5013a1e35ba8.png">

Here's the code to create an array in Javascript:
```
    var array = new Array(7);
    array[0] = "These";
    array[1] = "words";
    array[2] = "are";
    array[3] = "elements";
    array[4] = "of";
    array[5] = "this";
    array[6] = "array";
    array[7] = ".";
    console.log(array); // => [ 'These', 'words', 'are', 'elements', 'of', 'this', '.' ]
```

Try out the code in this online editor: https://repl.it/languages/javascript.

Another way to create this same array is:
```
    var array = ["These", "words", "are", "elements", "of", "the", "this", "array", "."];
    console.log(array); // => [ 'These', 'words', 'are', 'elements', 'of', 'this', '.' ]
```
Notice that the index starts at 0. So to access the 5th element, we actually call array[4]:
```
    console.log(array(4)); //=> "of"
```
To insert a new element, we simply put a new element into the index address:
```
  array[0] = "Hello!";
  console.log(array[0]); // => "Hello!";
```
Once the array has been created, these operations take the following Big O time:
- Insert: O(1)
- Search: O(n)
- Delete: O(n)

An array takes up minimal over-head space. It is basically just the space taken up by each of the elements. So the space complexity can be said to be O(n).

### Linked Lists

In a computer science data structure class, the linked list is the second data structure you will learn about. In practice, you have most probably already used linked lists. Most modern languages implement an array by using something similar to a linked list. Python doesn't even have an array, its fundamental array type structure IS the list, although it's not implemented using a linked list.

But, linked lists have a very important bit, called the **pointer** which is fundamental to trees and graphs. So let's look at it:

<img width="688" alt="screen shot 2016-08-08 at 10 45 28 am" src="https://cloud.githubusercontent.com/assets/6777404/17497705/3bc7978e-5d91-11e6-86ad-6f728922994e.png">


*Singly Linked List*

To create the above linked list, we a node element:
```
    function Node(data) {
        this.data = data;
        this.next = null;
    }
```
Then the node becomes the building block that holds each element and points to the next node.

Next we need to create the actual Linked List:
```
    function LinkedList() {
        this._length = 0;
        this.head = null;
    }
```

Next we need to prototype the add function for the linked list:
```
      LinkedList.prototype.add = function(value) {
        var node = new Node(value), currentNode = this.head;

        // 1st use-case: an empty list
        if (!currentNode) {
            this.head = node;
            this._length++;

            return node;
        }

        // 2nd use-case: a non-empty list
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        this._length++;
        return node;
      };
```
Now, to create and populate a linked list, we instantiate a new linked list and add elements to it:
```
      var list = new LinkedList();
      list.add("These");
      list.add("words");
      list.add("are");
      list.add("elements");
      list.add("in");
      list.add("a");
      list.add("linked list");
      list.add(".");
```
To see what's in the list, we access the lists head, and then follow the connected nodes:
```
      var pointer = list.head;
      while(pointer != null){
      	console.log(pointer.data);
      	pointer = pointer.next;
      }
```
You can find the full code [here](http://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392).

Basically, instead of an index to give you the address of where the data is stored, you use pointers. The start of the array is given to you as a pointer. And to look for an element, you go through each element until you find the one you're looking for. Here are the common access method run-times:

- Insert: O(1)
- Search: O(n)
- Delete: O(1)

Space complexity: Pointers take up quite a bit of overhead. While it is a constant amount of space, per element added, it is can be quite expensive space-wise. O(n) x k

It is also possible to have doubly linked lists. You can read more about doubly linked lists [here](https://en.wikipedia.org/wiki/Linked_list#Doubly_linked_list).

#### Questions
1. Delete a node in the linked list.
2. Write a function to find a certain word within the linked list.
3. Reverse the linked list.
4. Augment the prototype above to make it into a Doubly Linked List.

### Hash Table (Dictionary/Map)

Hash Tables are a type of dictionary. They have keys and values. Python users have used dictionaries. In Javascript, you've used this as an Object literal. It looks like this:
```
{
  a: 239,
  b: 748,
  key: value
}
```
As the values are easily accessible by their keys, and since no orders has to be maintained, this data structure is really good for our measures:

- Insert: O(1)
- Search: O(1)
- Delete: O(1)
- Space: O(n)

A hash table is made up of a few different things:
1. a structure to contain all the keys
2. a structure to contain all the values
3. a hashing function to map the keys to the values

Suppose we use an array to hold the keys and another array to hold the values.
```
    var keys = new Array(10);
    var values = new Array(10);
```

A hash function is (usually) a mathematical function that you perform on the key to get the index of the value. Let's say you perform a modulo function on the characters of the key:

```
    var hash = function(key){
      var sumOfAsciiValues = 0;
      for( var i = 0; i < key.length; i++) {
        sumOfAsciiValues += key.charCodeAt(i);
      }
      return sumOfAsciiValues % 10;
    };

    console.log(hash("a")); //=> 7
    console.log(hash("This")); //=> 8
```
This means that the index of a's value is 7. So we put the value 239 into the values array:
```
    var put = function(key, 239){
        values[hash(key)] = value;
    }

    var get = function(key){
        return values[hash(key)];
    }

    put("key",239);
    console.log(get("key")); // => 239
```
When we come along again and try to access 'a' again, we simply run a through the hashing function again, get 7 as the index, and access the values array at index 7, and we get the value 239.

The tricky part about hash tables is that you need a good hashing function. A good hashing function will distribute the indices of the values evenly. If the function maps too many keys to the same value index, this is known as a **collision**. We want to avoid collisions as much as possible. There are a few good ways to deal with collisions, you can read about them here:

- [Open addressing](https://en.wikipedia.org/wiki/Hash_table#Open_addressing) -- This is simply going to the next available slot/address. You can use a different function to figure out what the next slot will be.
- [Separate Chaining](https://en.wikipedia.org/wiki/Hash_table#Separate_chaining) -- Instead of the values array being an array of the values, it is actually an array of linked lists. So all the values are then stored in the linked list.

You can read about how Python's dictionary structure is implemented using a Hash Table [here](http://www.laurentluce.com/posts/python-dictionary-implementation/).

#### Questions
1. Delete an element from the Hash Table.
2. Implement the Hash Table using a Linked List (Seperate Chaining from above)
3. Write a function to iterate through the Hash Table.
4. If the Hash Table uses a open adressing, then what is the worst case run time complexity for a get function?

### To come
- Stacks
- Queues
- Trees
- Graphs

## In Conclusion
Choose data structures carefully when there is a lot of reading and writing. The data structure could really change how your algorithm works and its efficiency.

### When and how might this come up?
Almost every algorithm you will write will have a data structure containing the data the you need to perform your task on. So they'll come up in basically every type of coding question.
