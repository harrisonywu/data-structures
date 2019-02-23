var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new node
    var newNode = Node(value);//invoke Node function with given value  
    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
      //we should pointing head and tail to newNode   
        
    } else if (list.head !== null && list.tail !== null) {
      list.tail.next = newNode;
      list.tail = newNode; 
          //we should pointing from tail node to the newNode and finally pointing
          // from tail to new       
    }
    
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    } else if (list.head === list.tail) {
      //then have both list.head and list.tail point to null;
      var returnValue = list.head.value;
      list.head = null;
      list.tail = null;
      return returnValue;

      
    } else if (list.head !== null) {
      // declare a var to identify the node value we are removing
      // declare a var to identify item head points to
      // have head point to that item
      var returnValue = list.head.value;
      var newHead = list.head.next;
      list.head = newHead;
      return returnValue;
    }
  };

  list.contains = function(target) {
    // input: target which is the value within a node we are searching for through the linked list
    // output: true or false depending on whether target value is found
    // justification: find first node and compare with the target
    // if the value of both of them is a same so return true and is nat same go to 
    // find next node to compare with target until the value of tail is null
    var doesContain = false;
    // var nodeCheck = list.head.value; // remember where the current node is in the linked list
    // check if value at nodeCheck = target
    var newFunc = function (node) {
      if (node.value === target) {
        doesContain = true;

      } else if(node.next !== null){
        newFunc(node.next);
      }
    }
         //starting from the head
      newFunc(list.head);
      return doesContain; //implement recursion 
    

    // if yes, then return true;
    // if no, reassign nodeCheck to what current nodeCheck points at
    //    if nodeCheck points at null, then stop 
        //use recursion to re-run contains
    

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
