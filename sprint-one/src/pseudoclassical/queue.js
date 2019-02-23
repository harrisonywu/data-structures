// ask yourself: where is new used in the slides? Why is it used? How could I use it here?

var Queue = function() {
  this.nextKeyInsert = 1;
  this.nextKeyRemove = 1;
  this.storage = {};
};

Queue.prototype.enqueue =function(value) {
	this.storage[this.nextKeyInsert] = value;
	this.nextKeyInsert++;
}
Queue.prototype.dequeue = function() {
	if (this.storage[this.nextKeyRemove]) { //change the if case so that it selects the nextKeyRemove in storage.
  	var dequeuedValue = this.storage[this.nextKeyRemove];
  	delete this.storage[this.nextKeyRemove];
	};
	this.nextKeyRemove++;
	return dequeuedValue;
}

Queue.prototype.size = function() {
	var keyCount = 0;
	for (var key in this.storage) {
  	keyCount++;
	};
	return keyCount;
}




