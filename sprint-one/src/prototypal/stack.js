var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.recentPushKey = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.recentPushKey++;
    this.storage[this.recentPushKey] = value;
  },
  pop: function() {
    if (this.recentPushKey >= 1) { 
      var popVal = this.storage[this.recentPushKey];
      delete this.storage[this.recentPushKey];            
      this.recentPushKey--;     
      return popVal;
    }
  },
  size: function() {
    return this.recentPushKey;
  }
};


