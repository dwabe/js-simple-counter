var obj = {
  counter : 0,
  get reset() {
    this.counter = 0;
  },
  get increment() {
    this.counter++;
  },
  get decrement() {
    this.counter--;
  },
  set add(value) {
    this.counter += value;
  },
  set subtract(value) {
    this.counter -= value;
  }
};
// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;

// Display the counter:
document.getElementById("demo").innerHTML = obj.counter;
