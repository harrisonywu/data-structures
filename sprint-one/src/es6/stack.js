class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.recentPushKey = 0;
  	this.storage = {};
  }

	push(value) {
		this.recentPushKey++;
		this.storage[this.recentPushKey] = value;
	}

	pop() {
		if (this.recentPushKey >= 1) { 
  		var popVal = this.storage[this.recentPushKey];
			delete this.storage[this.recentPushKey];            
			this.recentPushKey--;     
			return popVal;
		}
	}
	size() {
		return this.recentPushKey;
	}
}

