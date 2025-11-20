// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars = stars + "*";
  }
  // console.log(stars);
}

/* 
2. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30

*/

let multiple = 1;
for (let i = 1; i <= 10; i++) {
  multiple = 3 * i;
  // console.log("3 x " + i + " = " + multiple);
}

// 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.

let sum = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 2 == 1) {
    // console.log(i);
    sum += i;
  }
}

/*
4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.
*/

for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    continue;
  }
  // console.log(i);
}

/** 
 * 5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop
 */
let number = "12345678";

let reversedNumber = "";
let index = number.length - 1;
while (index >= 0) {
  reversedNumber = reversedNumber + number[index];
  index--;
}
console.log(reversedNumber);