// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  data = [];

  constructor() {
    this.data = [];
  }
  getQueue() {
    return this.data;
  }
  add(num) {
    this.data.sort((a, b) => a - b).push(num);
  }
  remove() {
    if (this.data.length === 0) {
      return undefined;
    }

    return this.data.shift();
  }
}

module.exports = Queue;
