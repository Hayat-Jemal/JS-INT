//constructor function
function Node(value,next,prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}
let node1 = new Node(100,"node2", null)
console.log(node1)

// 1. Test divisors of three
//   You will be given 2 parameters: a low and high number. Your goal is to print all numbers (on the console) between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.


function divisor(low, high) {
  let a = [];
  for (i = low; i <= high; i++) {
    if (i % 3 == 0) {
      a.push(i + " " + "div3");
    } else a.push(i);
  }
  return a;
}
console.log(divisor(10, 50));


