class Node {
  constructor(data = null, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkList{
  constructor(){
    this.head = null;
    this.size = 0;
  }


//insert a node at head (first index)
insertHeadNode(data){
  this.head = new Node(data, this.head); //the this.head in the argument list is the this.head = null from the constructor of class LinkList.  If the LinkList is empty then this.head = null is passed to the constructor of Node(data, next) as the parameter for next so next becomes (or stays) as null.
  this.size++;
}

//insert a node at tail (last index)
insertTailNode(data){
  //find the end of the list
  let current = this.head; //start at beginning of list
  let previous = null;
  while(current){
    previous = current;
    current = current.next; //moves current through the list until current is null (at the end of the list) which stops the while loop
  }
  //after while loop, previous is the last node in the list
  let tail = new Node(data, null); //use data to create the node to add
  previous.next = tail; //add the node at the end of the list
  this.size++; //increment list size
}

//insert a node at any index 
insertIndexedNode(data, index){
  //edge cases when index = 0, when index = last index,
  //when index is out of range
  if (index === 0){
    //insert node at head
    this.insertHeadNode(data);
    
  } else if (index === this.size - 1){
    //insert node at tail
    this.insertTailNode(data);
  }else if (index < 0 || index >= this.size){
    console.log('error: index is out of range');
    return;
  } else {
  //if no edge cases...
  //find index where node will be inserted
  let current = this.head;
  let previous = null;
  let count = 0;
  while(count < index){
    previous = current;
    current = current.next;
    count++; //increments count until count == index which stops loop
  }
  //create the node to insert
  let babyNode = new Node(data, current);
  previous.next = babyNode;
  this.size++;
}
}


//remove a node at any index
removeIndexedNode(index){
 
  
  //find index where node will be removed
  let current = this.head;
  let previous = null;
  let count = 0;
  if (index < 0 || index >= this.size){
    console.log("Error: index out of range")
    return 
  }
  else if (index == 0){
    //edge case ...remove first node
    this.head = current.next;
  }else {
  while(count < index){
    previous = current;
    current = current.next;
    count++; //increments count until count == index which stops loop
  }
  previous.next = current.next;
  current.next = null;
  current.data = null;
  current = null;
}
  this.size--;

}

//find a node by data
findNodesByData(data){
  let current = this.head;
  let dataFound = [];
  let count = 0;
  while(current){
    if (current.data == data){
      dataFound.push([count, current.data]);
    } 
      count++;
      current = current.next; //will move current through list until reaches null which will stop the loop
  }
  if (dataFound.length === 0){
    return "data not found in list"
  }else{
    return dataFound;
  }
  
}
//get a node by index
findNodesByIndex(index){
  let count = 0;
  let current = this.head;
  if (index === 0){
    return ("At index: " + index + " the data is " + current.data);
  }else if (index >= this.size || index < 0){
    return ("Error: index out of range")
  }else{
  while (count < index){
    current = current.next;
    count++; //this will stop the while loop when count === index
    //when count = index, current is the node at index
  }
}
  return ("At index: " + index + " the data is " + current.data);
}

//print the linked list
printList(){
  let count = 0;
  let current = this.head; //start at first node
  while(current){
    console.log("node index: " + count + " Data: " + current.data)//output the data at that node
    current = current.next; //current node moves through the list until current is null which stops the while loop
    count++;
  }
  console.log("Linked List length: " + this.size)
}
//clear the linked list
clearList(){
  this.head = null;
  this.size = 0;
}

}

let myLinkedList = new LinkList();
myLinkedList.insertHeadNode(333);
myLinkedList.insertHeadNode(111);
myLinkedList.insertTailNode(888)
myLinkedList.insertIndexedNode(333,2);

myLinkedList.removeIndexedNode(3);
//console.log(myLinkedList.findNodesByData(333));
myLinkedList.clearList();
myLinkedList.printList();
// console.log(myLinkedList.findNodesByIndex(4))