var extend = function(obj, methods) {
	for (var key in methods) {
		obj[key] = methods[key];
	}
};

var Stack = function() {
	var someInstance = {};
	someInstance.recentPushKey = 0;
	someInstance.storage = {};
	extend(someInstance, stackMethods);
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


