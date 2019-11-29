//create a random array of uppercase letters (character codes 65 to 90)
function createArray(arrLen){
  const NUMBER_OF_ELEMENTS = arrLen
  let randomLetters = []

  for (i=0; i < NUMBER_OF_ELEMENTS; i++){
    randomLetters.push(
      String.fromCharCode(Math.floor(Math.random() * (90-65)) + 65)
    )

  }


  return randomLetters
}

console.log(createArray(30))

const LEFT = 0
const RIGHT = 1

//create a binary search tree...it is like a modified linked list
//first create a node
class TreeNode {
  constructor(value = null){
    this.value = value;
    this.descendants = [];
    this.parent = null;
    Object.defineProperty(this, 'meta', {

      value :{multiples:0},
      writable: true
      
      }) 
  }

  get left(){
    return this.descendants[LEFT]
  }
  get right(){
    return this.descendants[RIGHT]
  }

  set left(node){
    this.descendants[LEFT] = node;
    if(node){
      node.parent = this;
    }
  }

  set right(node){
    this.descendants[RIGHT] = node;
    if (node){
      node.parent = this;
    }
  }
}

//create Binary Search Tree
//are all values in a binary search tree unique?
//yes, a binary search tree by definition has unique keys
class BinarySearchTree{
  constructor(){
    this.root = null;
    this.size = 0;
  }
  // addValue(value){} and helper function findNodeAndParent(newNode)
  // findValue(value){}
  // removeValue(value){}
  // getMax(){}
  // getMin(){}

  addValue(value){
    //if the tree is empty the value becomes the root node and you're done
    //if the tree is not empty the value is added to the left if it is less than parent or added to the right if it is greater than parent
    //it is more likely that the tree is not empty so check if (this.root) first
    
    //create the newNode
    const newNode = new TreeNode(value)
    
    //check if the tree exists else tree is empty and newNode becomes root
    if(this.root){
        //if tree exists, check if node already exists in the tree
        //use a helper function findNodeAndParent(newNode)
        const {found, parent} = findNodeAndParent(newNode)
        if (found){
          //node already exists on the tree, don't add the node, instead increase the count at that node and return the node and increment the size of the tree (size of tree includes multiples)
          found.meta.multiples = (found.meta.multiples || 1) + 1;
        }
    }else{
      this.root = newNode;
    }
 
  //increment size of tree and return newNode
    this.size += 1;
    return newNode;
  }

findNodeAndParent(value){
  //helper function for addValue
  //if the value exists in the tree it will return an object with both
  //the found node and the parent
  //obj { 
  //  found: node
  //  parent
  // }
  //if the value doesn't exist in the tree it will return an object
  // with just the parent
  // obj {
  //  found: null
  //   parent
  //  }
  let node = this.root;
  let parent;
  while(node){
    if (node.value === value){
      break;
    }
      parent = node
      node =  value > node.value ? node.right : node.left
      //adrian...why do you need >= rather than just > 
      //https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/#
      //you will break the while loop if node.value === value so you
      //won't reach the code value >= node.value? node.right: node.left
  }
  return {found: node, parent}
  //if root node.value == value this will return this.root and parent is null
  //otherwise set parent to the current node and move the current node to the right or left down the tree
}



  findValue(value){return}
  removeValue(value){return}
  getMax(){}
  getMin(){}
}


