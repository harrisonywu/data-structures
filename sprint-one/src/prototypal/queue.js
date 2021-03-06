var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.nextKeyInsert = 1;
  someInstance.nextKeyRemove = 1;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.nextKeyInsert] = value;
    this.nextKeyInsert++;
  },
  dequeue: function() {
    if (this.storage[this.nextKeyRemove]) { //change the if case so that it selects the nextKeyRemove in storage.
      var dequeuedValue = this.storage[this.nextKeyRemove];
      delete this.storage[this.nextKeyRemove];
    }
    this.nextKeyRemove++;
    return dequeuedValue;
  },
  size: function() {
    var keyCount = 0;
    for (var key in this.storage) {
      keyCount++;
    }
    return keyCount;
  }
};



