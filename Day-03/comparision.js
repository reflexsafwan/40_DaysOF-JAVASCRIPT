console.log("Comparision Operator");

console.log(0 == false); // true
console.log(3 == "3"); //true
console.log(0 === false); //false
console.log(3 === "3"); //false

console.log(null === null); // true;
console.log(undefined === undefined); // true
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(NaN === 10); // false
console.log(NaN === NaN);


let object1 = { name: "safwan" };
let object2 = { name: "safwan" };

console.log(object1 == object2);//false
console.log(object1 === object2);// false
let object3 = object1;
console.log(object1 == object3);
console.log(object1 === object3);

