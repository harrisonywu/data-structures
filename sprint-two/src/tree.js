var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // in our children key, we replace null with an empty array
  newTree.children = [];  

  //implement an extend function invocation so that..
  // we place treeMethods' keys within our var Tree
  _.extend(newTree,treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //inputs: any value
  // output: no output
  var newChild = Tree(value);
  this.children.push(newChild); 
  //tree.newTree
  // this binds to an instance of Tree (tree.addChild(5)) 
};

treeMethods.contains = function(target) {
  
  
  // if the value of target is equal to current node's value
  //     return true in this case
  // if it is not true
  //    if the length of children is greater than 0
  //    we should go through the list of children of child node
  //       we can use recursion of this function to use this process with the node child
  // otherwise return false
  
  if(target === this.value){
    return true;
  }
   if(this.children.length > 0){
     for(var i=0;i < this.children.length;i++){
      return this.children[i].contains(target);
     }
   }
   return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
