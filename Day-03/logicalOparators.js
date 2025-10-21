console.log("logical operators");
// rule for AND (&&) operator
// if both the operands are true then only it will return true otherwise it will return false
// if first operand is convertable to false then it will return first operand itself without checking second operand and result will be false.
// jodi prothom operand false e convertable hoy tahole prothom ta  return korbe otherwise second operand return korbe.
console.log(true && true); // true
console.log(true && false); // false 
console.log(true && true);// true
console.log(false && false)// false
console.log(0 && "safwan"); // 0
console.log(7 && "safwan"); // "safwan"
console.log(null && "safwan"); // null
console.log("hello" && "safwan"); // "safwan"
console.log("hello" && 0); // 0
console.log("" && "safwan"); // ""
console.log("hello" && undefined); // undefined
console.log(NaN && "safwan"); // NaN
console.log("hello" && NaN); // NaN
console.log(true && "safwan"); // "safwan"
console.log(false && "safwan"); // false

// rule for OR (||) operator
// if any one of the operand is true then it will return true otherwise it will return false
// jodi prothom operand true e convertable hoy tahole prothom ta  return korbe otherwise second operand return korbe.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(0 || "safwan"); // "safwan"
console.log(7 || "safwan"); // 7 //if it is possitive number it will return the number itself
console.log(null || "safwan");  // "safwan"
console.log("hello" || "safwan"); // "hello" //if is non empty string then it will convert to true and return itself
console.log("hello" || 0); // "hello"
console.log("" || "safwan"); // "safwan"
console.log("hello" || undefined); // "hello"
console.log(NaN || "safwan"); // "safwan"
console.log("hello" || NaN); // "hello"
console.log(true || "safwan"); // true
console.log(false || "safwan"); // "safwan"

// rule for NOT (!) operator
// it will convert the operand to boolean type and return the opposite value
console.log(!true); // false    
console.log(!false); // true
console.log(!0); // true
console.log(!7); // false
console.log(!""); // true
console.log(!"hello"); // false
console.log(!null); // true
console.log(!undefined);    // true    
console.log(!NaN); // true
console.log(!" "); // false
console.log(!"0"); // false // non empty string is true
console.log(!{}); // false // non empty object is true
console.log(![]); // false  // non empty array is true
console.log(!!true); // true 
console.log(!!false); // false 
console.log(!!0); // false
console.log(!!7); // true       
console.log(!!""); // false
console.log(!!"hello"); // true
console.log(!!null); // false
console.log(!!undefined);    // false
console.log(!!NaN); // false
console.log(!!" "); // true
console.log(!!"0"); // true
console.log(!!{}); // true
console.log(!![]); // true

// operator precedence
console.log(true || false && false); // true
console.log((true || false) && false); // false
console.log(!true && false || true); // true
console.log((!true && false) || true); // true
console.log(! (true && false) || true); // true 
console.log(! true && (false || true)); // false
console.log(0 || "" && "safwan"); // 0
console.log(0 || ("" && "safwan")); // ""
console.log((0 || "") && "safwan"); // ""
console.log(7 && "hello" || false); // "hello"
console.log((7 && "hello") || false); // "hello"
console.log(7 && ( "hello" || false)); // "hello"
console.log(!0 && "safwan" || null); // "safwan"
console.log((!0 && "safwan") || null); // "safwan"
console.log(!0 && ( "safwan" || null)); // "safwan"
console.log(!"" || 0 && "safwan"); // true
console.log((!"" || 0) && "safwan"); // safwan
console.log(!"" || (0 && "safwan")); // true
console.log(!!"" || 0 && "safwan"); // false
console.log((!!"" || 0) && "safwan"); // 0
console.log(!!"" || (0 && "safwan")); // 0
console.log(!!"hello" && "safwan" || 42); // "safwan"
console.log((!!"hello" && "safwan") || 42); // "safwan"
console.log(!!"hello" && ( "safwan" || 42)); // "safwan"
console.log(!NaN && "safwan" || 42); // "safwan"
console.log((!NaN && "safwan") || 42); // "safwan"
console.log(!NaN && ( "safwan" || 42)); // "safwan" 
console.log(!!NaN || 0 && "safwan"); // 0
console.log((!!NaN || 0) && "safwan"); // 0
console.log(!!NaN || (0 && "safwan")); // 0
console.log(!undefined || "hello" && 0); // true
console.log((!undefined || "hello") && 0); // 0
console.log(!undefined || ("hello" && 0)); // true
console.log(!!undefined || "hello" && 0); // 0
console.log((!!undefined || "hello") && 0); // 0
console.log(!!undefined || ("hello" && 0)); // 0
console.log(null && "safwan" || !false); // true
console.log((null && "safwan") || !false); // true
console.log(null && ("safwan" || !false)); // null
console.log(null || "safwan" && !false); // true
console.log((null || "safwan") && !false); // true
console.log(null || ("safwan" && !false)); // true
console.log(undefined && "safwan" || !true); // false
console.log((undefined && "safwan") || !true); // false
console.log(undefined && ("safwan" || !true)); // undefined
console.log(undefined || "safwan" && !true); // false
console.log((undefined || "safwan") && !true); // false
console.log(undefined || ("safwan" && !true)); // false 
console.log(NaN && "safwan" || !!true); // true
console.log((NaN && "safwan") || !!true); // true
console.log(NaN && ("safwan" || !!true)); // NaN
console.log(NaN || "safwan" && !!true); // true
console.log((NaN || "safwan") && !!true); // true
console.log(NaN || ("safwan" && !!true)); // true

// short-circuiting
function printMessage(){
    console.log("Function is called");
    return true;
}
console.log(false && printMessage()); // false
console.log(true || printMessage()); // true
console.log(true && printMessage()); // Function is called \n true
console.log(false || printMessage()); // Function is called \n true 

//nullish coalescing operator (??)
// it will return the right operand if the left operand is null or undefined otherwise it will return the left operand
console.log(null ?? "safwan"); // "safwan"
console.log(undefined ?? "safwan"); // "safwan"
console.log(0 ?? "safwan"); // 0 // 0 is not null or undefined
console.log("" ?? "safwan"); // ""
console.log(false ?? "safwan"); // false
console.log(NaN ?? "safwan"); // NaN
console.log("hello" ?? "safwan"); // "hello"
console.log(42 ?? "safwan"); // 42      
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null
console.log(null ?? 0); // 0
console.log(undefined ?? ""); // ""
console.log(null ?? false); // false
console.log(undefined ?? NaN); // NaN  
console.log("hello" ?? null); // "hello"
console.log(42 ?? undefined); // 42 

// operator precedence with nullish coalescing operator
console.log((null ?? undefined) || "safwan"); // "safwan"
console.log((null ?? undefined) || "safwan"); // "safwan"
console.log(null ?? (undefined || "safwan")); // "safwan"
console.log(undefined ??( null && "safwan")); // null
console.log((undefined ?? null) && "safwan"); // safwan
console.log(undefined ?? (null && "safwan")); // null  
console.log((0 ?? "") || "safwan"); // "safwan"
console.log((0 ?? "") || "safwan"); // "safwan"
console.log(0 ?? ("" || "safwan")); // 0
console.log("" ?? (0 && "safwan")); // ""
console.log(("" ?? 0) && "safwan"); // ""
console.log("" ?? (0 && "safwan")); // ""
console.log((false ?? NaN) || "safwan"); // "safwan"
console.log((false ?? NaN) || "safwan"); // "safwan"
console.log(false ?? (NaN || "safwan")); // false
console.log(NaN ?? (false && "safwan")); // NaN
console.log((NaN ?? false) && "safwan"); // NaN
console.log(NaN ?? (false && "safwan")); // NaN
// End of the code snippet                      

// Summary:
// In this code snippet, we explored logical operators in JavaScript, including AND (&&), OR (||), and NOT (!). We discussed their behavior with different operand types and values, including truthy and falsy values. We also covered operator precedence and short-circuiting behavior. Additionally, we introduced the nullish coalescing operator (??) and its functionality in handling null and undefined values. The code includes various examples to illustrate these concepts clearly.







