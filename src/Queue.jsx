class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    
    push(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }

    pop() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }

    peek() {
      return this.elements[this.head];
    }

    get size() {
      return this.tail - this.head;
    }

    get isEmpty() {
      return this.size === 0;
    }
  }

  export default Queue;