class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.nextKeyInsert = 1;
  	this.nextKeyRemove = 1;
  	this.storage = {};
  }



enqueue(value) {
	this.storage[this.nextKeyInsert] = value;
	this.nextKeyInsert++;
}
dequeue() {
	if (this.storage[this.nextKeyRemove]) { //change the if case so that it selects the nextKeyRemove in storage.
  	var dequeuedValue = this.storage[this.nextKeyRemove];
  	delete this.storage[this.nextKeyRemove];
	};
	this.nextKeyRemove++;
	return dequeuedValue;
}

size() {
	var keyCount = 0;
	for (var key in this.storage) {
  	keyCount++;
	};
	return keyCount;
}
}

