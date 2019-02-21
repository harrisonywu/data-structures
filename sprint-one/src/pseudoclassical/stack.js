var Stack = function() {
  this.recentPushKey = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
	this.recentPushKey++;
	this.storage[this.recentPushKey] = value;
}
Stack.prototype.pop = function() {
	if (this.recentPushKey >= 1) { 
  	var popVal = this.storage[this.recentPushKey];
		delete this.storage[this.recentPushKey];            
		this.recentPushKey--;     
		return popVal;
	}
}

Stack.prototype.size = function() {
	return this.recentPushKey;
}


