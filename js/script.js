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

// // other wave
// function wave(w) {
//   for (i = 0; (i < w.length); i++) {
//     if (
//         w[i] % 2 == 0) {
//         console.log("even")
//     //   w[i] % 2 == 1 == w[i + 1] % 2 == 1) {
//     //   return 0;
//     }else console.log("odd")
//     // return 1;
//       if (w[i] % 2 == 1) {
//         console.log("odd");
//         //   w[i] % 2 == 1 == w[i + 1] % 2 == 1) {
//         //   return 0;
//       } else console.log("even");
//   }
// }
// wave([2, 6, 3, 4, 6]);
// // console.log(wave([4, 11, 12, 1, 6]));
// // // console.log(wave([7, 2, 9, 10, 5]));

 // 8. Meera array
//  A Meera array is defined to be an array such that for all values n in the array, the value 2*n is not in the array. So {3, 5, -2} is a Meera array because 3*2, 5*2 and -2*2 are not in the array. But {8, 3, 4} is not a Meera array because for n=4, 2*n=8 is in the array. Write a function named isMeera that returns 1 if its array argument is a Meera array. Otherwise it returns 0.

function isMerra(n) {
    let flag = 1;
    for (i = 0; i < n.length; i++){
        for (j = 0; j < n.length; j++) {
            if (2 * n[i] == n[j]) {
                return 0;
            }
        }
    }
    return flag;
}
console.log(isMerra([8, 3, 4]));0
console.log(isMerra([3, 5, -2]));1

// 9. Dual array
// // //   Define a Dual array to be an array where every value occurs exactly twice. For example, {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5 occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two times) Write a function named isDual that returns 1 if its array argument is a Dual array. Otherwise it returns 0.
// function dualArray(x) {
//     let count = 0;
//     for (i = 0; i < x.length; i++) {
//         for (j = 0; j < x.length; j++) {
//             if (x[i] == x[j]) {
//                 count++
//                 // console.log("loops");
//             }
//         }
//     }
//     if (count == x.length * 2) {
//         return 1;
//     } else return 0;
//     // console.log(count);
//     // console.log(x.length);
//     // if (count== x.length*2) {
//     //     console.log("dual");
//     // } else console.log("not dual");
// }
// console.log(dualArray([1, 2, 1, 3, 3, 2]));
// console.log(dualArray([2, 5, 6, 1, 3, 8]));
// console.log(dualArray([1, 2, 3, 1, 2, 1, 3, 3, 2]));

// // another method
// // function dual(a) {
    
// //   for (let i = 0; i < a.length; i++) {
// //       if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
          
// //         return 1;
// //     }
// //   }
// //   return 0;
// // }
// // console.log(dual([1, 2, 1, 3, 3, 2]));
// // console.log(dual([2, 5, 6, 1, 3, 8]));
// // console.log(dual([1, 1, 2, 2, 3, 3, 3]));

// // // 10. Sort Method
// // // // //   Write a function that takes an array of numbers and returns another array by sorting the numbers in an acceding order. (In short, write a function that does the same thing the sort() method does)
// function sorting(arr) {
// var temp;
//     for (i = 1; i < arr.length; i++) {
//         for (j = 0; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//                 // console.log("loop " + i + " = " + arr[i] + "=" + arr[j]);
//                 // console.log(arr[i]);
//             }
//         }
//     }
//     return arr;
// }
// console.log(sorting([8, 5, 1, 2]));
//  console.log(sorting([1, 7, 2, 8, 3, 4, 5, 0, 9, 6, -1]));
// another method
// ******************************************
// function sorting(arr) {
//     var temp;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       temp = arr[i];
//       arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         i = -1;
//     }
//   }
//   return arr;
// }
// console.log(sorting([5, 8, 1, 2, 1, 3, 3, 2, 4, 4, 100]));

 var neg = [];
//     let = j = 0;
//     for (i = -10; i <= -1; i++) {
//         neg[j] = i; j++;
//     }
//     console.log(neg);
//  let pos = [];
//     let p = 0;
// //     for (i = 0; i <= 10; i++){
// //         pos[p] = i; p++;
// // }
// // console.log(pos);
// // integer = neg;
// // // console.log(integer);
// // counter = neg.length;
// // for (let h = 0; h < pos.length; h++){
// //     integer[counter] = pos[h];      
// //     counter++;
// // }
// // console.log(integer);
// ********************************************
let numbers = [1, 7, 2, 8, 3, 11, 5, 0, 9, 6, -1];
numbers.sort(function (a, b) { return a - b })
console.log(numbers);
// var fruit=["Banana", "Orange", "Apple", "Mango"];
// console.log(fruit);
// fruit.sort();
//  console.log(fruit);
// //*****************************************
// function negativeNumber(n) {
//   let rn = [];
//   for (i = -10; i <= rn; i++) {
//     rn.push(i);
//   }
//   return rn;
// }
 // console.log(negativeNumber(-1));
 // ******************************************
function positiveNumber(p) {
  let r = [];
  for (i = 0; i <= p; i++) {
    r.push(i);
  }
  return r;
}
// console.log(positiveNumber(10));
let neg = [];
let n = 0;
for (i = -10; i <= -1; i++){
  neg[n] = i;
  n++
}
// console.log(neg);
// *******************************************
// let pos = [];
// let p = 0;
// for (i = 0; i <= 10; i++) {
//   pos[p] = i;
//   p++;
// }
// // console.log(pos);
// function intiger(neg, pos) {
//   let newArr = [];
//   newArr = [...neg, ...pos];
//   return newArr
// }
// console.log(intiger(neg, pos));
// //***********************

 // const arrays = [
// //   [-10, -1],
// //   [0, 10],
// // ];
// function range(a, b) {
//   var arr = [];
//   for (let i = a; i < b; i++) arr.push(i);
//   return arr;
// }
// const result = arrays.reduce(function (a, b) {
//     return a.concat(range(b[0], b[1] + 1));
// }, []);
// console.log(result)
// ***************************
 // *concat*
let h = [3, 5, 8];
let z = [6, "lo", "yt", 90, true, 8];
let w = z.concat(h);
console.log(w)

// ********************************************
// function sortDrinkByPrice(drinks){
// 	  const sorted =drinks.sort(function(x, y){
//    return x.price - y.price;
//   });
   
// 	 return sorted;
// }
// console.log(
//   sortDrinkByPrice([
//     { name: "lemonade", price: 50 },
//     { name: "lime", price: 10 },
//     { name: "avocado",price: 40},
//   ])
//  );

// ******************************************
// // // Largest Swap
// // // Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// // // largestSwap(27) ➞ false
// // // largestSwap(43) ➞ true
// // // If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
// function largestSwap(num) {
//  return num.toString().charAt(0) >= num.toString().charAt(1);
//  }
// console.log(largestSwap(14));
// // largestSwap(14) ➞ false
// console.log(largestSwap(54));
// *******************************************
// // // calculator
// // function add(a, b) {
// //   return a + b;
// // }
// // function subtract(a, b) {
// //   return a - b;
// // }
// // function multiply(a, b) {
// //   return a * b;
// // }
// // function divide(a, b) {
// //   return a / b;
// // }
// // function calculate(value1,value2,whatToDo) {
// //   return whatToDo(value1, value2);
// // }
// // console.log(calculate(2, 3,add));
// // console.log(calculate(34, 3, subtract));
// // console.log(calculate(6, 3, multiply));
// // console.log(calculate(30, 0, divide));
// ********************************************
 //  write a function that takes two strings s1 and s2 and return the longest commen subsequence of sl and s2
// // "ABAZDC", "BACBAD" => ABAD
// // "AGGTAB", "GXTXAYB" => GTAB
// // "aaaa", "aa" => "aa"
// // "", "..." => ""
// // "ABBA", "ABCABA" => "ABBA"
// ********************************************
// // This code is contributed
// //  Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chessboard. */

// var pattern = "";
// for (i = 0; i < 8; i++){
//   for (j = 0; j < 8; j++){
//     if ((i + j) % 2==0)pattern = pattern + " ";
//     else  pattern = pattern + "#";
//   }
//   pattern=pattern+"\n"
// }
// console.log(pattern);

// *******************************************
// // Given an integer number n, return the difference between the product of its digits and the sum of its digits
function difference(num) {
  let p = num.toString()
  let sum = 0;
  let product = 1;
  for (i = 0; i < p.length; i++){
    sum = sum + parseInt(p[i]);
    product = product * parseInt(p[i]);
  }
  return product - sum;
}
// console.log(difference(1234));

// // /method #2
var x = 1234;
var sum2 = 0;
var product2 = 1;
while (x != 0) {
  sum2 = sum2 + (x % 10);
  product2 = product2 * (x % 10);
  x = Math.floor(x / 10);
}
console.log(product2-sum2);
// ********************************************
// **filter**
function checkIfLessThan100(a) {
  return a < 100;
}
let someArray = [1, 2, 3, 5, 66, 77, 600, 888, 1000];
let filteredArray = someArray.filter(checkIfLessThan100);
// console.log(filteredArray);
// ********************************************
// ********************************************
// Number of Squares in an N * N Grid
// Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.
function numberSquares(n) {
  var ans = 0;
  for (var i = 1; i <= n; i++) {
    ans += (i ** 2);
  }
  return ans;
}
// console.log(numberSquares(4)); //30
// *****************************************
// Find the Amount of Potatoes
// Create a function to return the amount of potatoes there are in a string.
// **method 1**
function potatoes(str) {
  var arr = str.split("potato");
  return arr.length-1 ;
}
// console.log(potatoes("potato")); //1
// console.log(potatoes("potatoapple"));
// console.log(potatoes("potatopotato"));
// **method 2**
function potatoes(str) {
  return str.match(/potato/g).length;
// the term length is tell us the number of repeated words
}
// console.log(potatoes("potatoapple"));
// potatoes("potatoapple") ➞ 1
// **************************************
// Tuck in Array
// Create a function that takes two arrays and insert the second array in the middle of the first array.
// **method 1**
// function tuckIn(arr1, arr2) {
//   return [arr1[0],...arr2,arr1[1]]
// }
// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
 // **method 2**
function tuckIn(arr1, arr2) {
  arr2.push(arr1[1]);
  arr2.unshift(arr1[0]);
  return arr2;
}
// console.log(tuckIn([15, 150], [45, 75, 35]));
// ******************************************
var arr1 = [15, 150];
var arr2 = [45, 75, 35];
var result = [...arr1, ...arr2];
var a = result.sort(function (a, b) {
  return a - b;
})
// console.log(a)
// * How to determine whether a year is a leap year
// To determine whether a year is a leap year, follow these steps:
// 1) If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// 2) If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// 3) If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// 4) The year is a leap year (it has 366 days).
// 5) The year is not a leap year (it has 365 days)
// */
// **method 1**
// function leapYear(year){
//     if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0))        
//         return "leap year";
//         else
//         return "not leap year";
// }
// console.log(leapYear(2486));

