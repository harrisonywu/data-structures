var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  // QUESTIONS:
  // if something leaves the queue, should values be reassigned to a new key?
  var nextKeyInsert = 1;
  someInstance.enqueue = function(value) {
    //add a string to the back of the queue
    // input: value = any value: string, number, bool, object, array, anything.
    // output: no return output, just a modified storage with a new value at the back of the object
    // justification: calling the function adds a key-value pair to storage, with key being the next number key available, and value being the input value
    // explanation: regardless of what value, a new key will be created;
    storage[nextKeyInsert] = value;
    nextKeyInsert++;
  };
  var nextKeyRemove = 1;
  someInstance.dequeue = function() {
    //remove and return the string to the front of the queue
    //input: no inputs
    // output: whatever value is in the first position of the queue (NOT THE KEY)
    //justify: when called, the function will remove the highest ranking item in storage, and then return that value. *** WHAT IS "ITEM" HERE, ONLY THE VALUE, OR THE KEY AS WELL'
  // explanation: you never need an input here, as you will first remove the top pair, then return only the value portion.
  if (storage[nextKeyRemove]) { //change the if case so that it selects the nextKeyRemove in storage.
    var dequeuedValue = storage[nextKeyRemove];
    delete storage[nextKeyRemove];
  };
  nextKeyRemove++;
  return dequeuedValue;
  };
  someInstance.size = function() {
    var keyCount = 0;
    for (var key in storage) {
      keyCount++;
    }
    return keyCount;
  };
  return someInstance;
};
