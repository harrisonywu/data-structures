var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var recentPushKey = 0;
  someInstance.push = function(value) {
    //input: any value; no constraints or edge cases
    //output: no output, only thing that changes is storage -> now has a key-value pair
    // justify: will add in a key-value pair to storage obj, with the pair having some indication that it was most recently pushed.
    // explanation: the input value will be the value of a key-value pair. the pair will be added into storage. We will also add in some indicator that
        //it is most recently pushed (change a global var with the value of the key)
    recentPushKey++;
    storage.recentPushKey = value;
  };

  someInstance.pop = function() {
    //input: none
    //output: storage will be changed, removing the last thing pushed, and we will return the value of the removed
    // justify: it will identify the most recently pushed in key-val pair and return the value, while also removing the entire pair from storage
    // explanation: using the same var identified in push, find the key that we want to remove, then save the value of that key (return that end),
         // and then delete the pair from storage \
    if (recentPushKey >= 1) { 
      var popVal = storage[recentPushKey];
      delete storage[recentPushKey];            
      recentPushKey--;     
      return popVal;
    }
  };

  someInstance.size = function() {
    return recentPushKey;
  };

  return someInstance;
};
