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

// // 2. The famous coding interview question (FizzBuzz)
// //   Write a program that prints the numbers from 1 to 100. But for multiples of three print â€œFizzâ€ instead of the number and for the multiples of five print â€œBuzzâ€. For numbers which are multiples of both three and five print "FizzBuzz"

function fizz(x, y) {
  e = []
  for (let i = x; i < y; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      e.push(i + "fizzbuzz")
    }else
    if (i % 3 === 0) {
      e.push(i + "fizz")
    } else
      if (i % 5 === 0) {
        e.push(i  + "buzz")
      } else e.push(i)

  }
  return e
  }

console.log(fizz(1, 100))

//method 2
for (i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log(i + " = " + "fizzBuzz");
  } else if (i % 3 == 0) {
    console.log(i + " = " + "Fizz");
  } else if (i % 5 == 0) {
    console.log(i + " = " + "Buzz");
  } else console.log(i);
}

//method 3
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) 
        console.log("FizzBuzz");
        if (i % 3 == 0) 
            console.log("Fizz");
        else
            if (i % 5 == 0) 
            console.log("Buzz");
        else
            console.log(i);
    
}

 // 3. Lucky sevens
// //   Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.

function lucky(x) {
    let flag = false;
    for (i = 0; i < x.length-2; i++){
        if (x[i] + x[i + 1] + x[i + 2] === 7) {
             return true;
        }
    }
  return false;
  //method 2
   if (x.length<3)return "Please enter more numbers!"
  for (let i = 2; i < x.length; i++) {
    if (x[i] + x[i - 1] + x[i - 2] == 7) {
      return true;
    }
  }
  return false;
}
 console.log(lucky([3, 3, 4, 1, 2, 7, 0])); 
console.log(lucky([3, 3, 4, 1, 6]));
console.log(lucky([4, 3]));

// 4. Sum of several arrays
//  You will be given an array of several arrays that each contain integers and your goal is to write a function that will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]] then your program should output 22 because3 + 2 + 1 + 4 + 12 = 22.
function sum(ar) {
    let sum=0
    for (i = 0; i < ar.length; i++){
        for (j = 0; j < ar[i].length; j++){
            sum = sum + ar[i][j];
        }
    }
    return sum
}
 let flat1 = [[3, 2], [1], [4, 12], 25];
   let sumfalt = flat1.flat(sum);
   console.log(sumflat);
 console.log(sum([[3, 2], [1], [4, 12]]));