var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // in our children key, we replace null with an empty array
  newTree.children = [];  

  //implement an extend function invocation so that..
  // we place treeMethods' keys within our var Tree

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //inputs: any value
  // output: no output
  var newChild = Tree(value);
  this.newTree.children.push(newChild);  
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
