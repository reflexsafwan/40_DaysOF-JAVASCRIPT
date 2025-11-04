// 1. What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
// ans and explanation:
/**
 * ans is it's a normal day.beacuse switch case is case sensitive. here Monday is not equal to monday.
 */

// 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”

const amount = 2500;
if (amount % 100 === 0) {
  console.log("Withdraw successful");
} else {
  console.log("Invalid amount");
}

// 3. Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.
const num1 = 5;
const num2 = 7;
const oprtr = "-";
switch (oprtr) {
  case "+":
    console.log(`The sum of two numbers is: ${num1 + num2}`);
    break;
  case "-":
    console.log(`The subtraction of two number is ${num1 - num2}`);
    break;
  case "*":
    console.log(`The multiplication of two number is ${num1 * num2}`);
  case "/":
    console.log(`The division of two number is  ${num1 / num2}`);
    break;
  case "%":
    console.log(`The reminder  of two number is ${num1 % num2} `);
    break;
  default:
    console.log("please Enter a valid operator");
}

// 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:

// Children (<18 years): $3
// Adults (18 - 60 years): $10
// Seniors (60+ years): $8
// Write a program that prints the ticket price based on the person’s age

let age = 30;
if (age < 18) {
  console.log("your ticket prize is $3");
} else if ((age) => 18 && age <= 60) {
  console.log("Your ticket prize is $ 10");
} else if (age > 60) {
  console.log("Your ticket prize is $8");
} else {
  console.log("Plese define Your age first");
}

// 5. Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.
const birthMonth = "March";
switch (birthMonth) {
  case "March" || "April":
    console.log("Your zodiac sign is Aries");
    break;
  case "April" || "May":
    console.log("Your zodiac sign is Taurus");
    break;
  case "May" || "june ":
    console.log("Your zodiac signs is Gemini");
  // and so on....
  default:
    console.log("Enter Your valid birthMonth");
}

// 6. Which Triangle?
// A triangle has 3 sides. A Triangle type is determined by its sides:

// All sides equal is called, Equilateral Triangle.
// Two sides equal is called, Isosceles Triangle.
// All sides different is called, Scalene Triangle.
// Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

const a = 2;
const b = 25;
const c = 23;
if (a === b && b === c && c === a) {
  console.log(" Equilateral Triangle");
} else if (a === b || b == c || c === a) {
  console.log("Isosceles Triangle");
} else {
  console.log(" Scalene Triangel");
}
