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
  //  console.log(sumflat);
console.log(sum([[3, 2], [1], [4, 12]]));
 
const val = [10, 20, 30, 40];
val.push(val.shift());
console.log(val);

// 5. Evens number
// An Evens number is an integer whose digits are all even. For example 2426 is an Evens number but 3224 is not.
  //  Write a function named isEvens that returns 1 if its integer argument is an Evens number otherwise it returns 0.
//    function isEven(n) {
//     let flag = 1;
//     let str = n.toString()
//     for (i = 0; i < str.length; i++){
//         if (str[i] % 2!= 0) {
//         flag = 0;   
//         }
//     }
//     return flag;
// }
// console.log(isEven(2426));
// console.log(isEven(3224));

 // another method
function isEven(n) {
  let str = n.toString();
  for (i = 0; i < str.length; i++) {
    if (str[i] % 2 == 0) {
      return "even";
    } else return  "not even";
  }
}
console.log(isEven(2426));
console.log(isEven(3224));

 // // 6. Magic array
// // //   An array is defined to be a Magic array if the sum of the primes in the array is equal to the first element of the array. If there are no primes in the array, the first element must be 0. So {21, 3, 7, 9, 11 4, 6} is a Magic array because 3, 7, 11 are the primes in the array and they sum to 21 which is the first element of the array. {13, 4, 4, 4, 4} is also a Magic array because the sum of the primes is 13 which is also the first element. Other Magic arrays are {10, 5, 5}, {0, 6, 8, 20} and {3}. {0} is not a Magic array because the sum of the primes is 5+5+3 = 13. Note that -5 is not a prime because prime numbers are positive.
  
// // //   Write a function named isMagicArray that returns 1 if its integer array argument is a Magic array. Otherwise it returns 0
 function isPrime(num) {
    if (num < 2) {
        return 0
    }
    for (i = 2; i < num; i++){
        if (num % i == 0) {
            return 0;
        }
    }
    return 1;
}
function isMagicArray(g) {
    let sum = 0;
  for (j = 0; j < g.length; j++){
      
        let x = isPrime(g[j])
        if (x == 1) {
          sum = sum + (g[j])
    }
    
  }
    if (sum == g[0]) {
        return 1;
    }
    else return 0;
}
console.log(isMagicArray([21, 3, 7, 9, 11, 4, 6]));
console.log(isMagicArray([13, 4, 4, 4, 4]));
console.log(isMagicArray([0, 6, 8, 20]));
console.log(isMagicArray([3]));

 // 7. Wave array
// // //   A wave array is defined to an array which does not contain two even numbers or two odd numbers in adjacent locations. So {7, 2, 9, 10, 5}, {4, 11, 12, 1, 6}, {1, 0, 5} and {2} are all wave arrays. But {2, 6, 3, 4} is not a wave array because the even numbers 2 and 6 are adjacent to each other.
// // //   Write a function named isWave that returns 1 if its array argument is a Wave array, otherwise it returns 0.


function waveArray(t) {
    for (i = 0;i < t.length; i++){
        if (t[i] % 2 == t[i + 1] % 2) {
            return 0;
        }
        return 1;
    }
}
console.log(waveArray([2,6,3,4,6]));
console.log(waveArray([4, 11, 12, 1, 6]));
console.log(waveArray([7, 2, 9, 10, 5]));