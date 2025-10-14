console.log("hello day-02");
const StudentName = "safwan";
console.log(StudentName);
// StudentName = "sabbir"; TypeError: Assignment to constant variable.
console.log(StudentName);
let age = 22;
console.log(age);
age = 25;
console.log(age);
// const isStudent = true;
// console.log(true);
// isStudent = false;TypeError: Assignment to constant variable.
let isStudent = false;
console.log(isStudent);
isStudent = true;
console.log(isStudent);
const ProgrammingLanguage = "JavaScript";
console.log(ProgrammingLanguage);

const students = {
  name: "safwan",
  age: 22,
  isStudent: true,
  ProgrammingLanguage: "JavaScript",
};

console.log(students);

// students = {
//   name: "rakib",
//   age: 24,
//   isStudent: false,
//   ProgrammingLanguage: "Java",
// };
// console.log(students); TypeError: Assignment to constant variable.

students.name = "sabbir";
students.age = 25;
students.isStudent = false;
students.ProgrammingLanguage = "Python";
console.log(students);
const studentsarray = ["safwan", "sabbir", "rakib", "rasel"];
console.log(students);
const arr = [34, "safwan", true, 45.5];
console.log(arr);
// arr = [45, "rakib", false, 67.8];
// console.log(arr);TypeError: Assignment to constant variable.
let fruits = ["apple", "banana", "orange"];
console.log(fruits);
fruits = ["mango", "grape", "pineapple"];
console.log(fruits);
