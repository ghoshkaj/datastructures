function Node(data) {
    this.data = data;
    this.next = null;
}
    
function LinkedList() {
    this._length = 0;
    this.head = null;
}

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

LinkedList.prototype.delete = function(value) {
   var currentNode = this.head;

    // 1st use-case: an empty list
    if (!currentNode) {
        return;
    }

	// 2nd case: if first element in the list
	if (currentNode.data === value) {
		if (currentNode.next) {
			this.head = currentNode.next
			return;
		} else {
			this.head = null;
			return;
		}
	} 
	
    // 3rd use-case: a non-empty list
    while (currentNode && currentNode.next) {
    	if(currentNode.next.data === value) {
    		if (!currentNode.next.next) { // for last element in list
    			currentNode.next = null;
    		} else {
    			currentNode.next = currentNode.next.next;
    		}
    	}
        currentNode = currentNode.next;
    }

    this._length--;
    return;
};

var list = new LinkedList();
list.add("These");
list.add("words");
list.add("are");
list.add("elements");
list.add("in");
list.add("a");
list.add("linked list");
list.add(".");

// var pointer = list.head;
//   while(pointer !== null){
//     console.log(pointer.data);
//     pointer = pointer.next;
// }

list.delete(".");

list.delete("These");

list.delete("linked list");

var pointer = list.head;
  while(pointer !== null){
    console.log(pointer.data);
    pointer = pointer.next;
}
