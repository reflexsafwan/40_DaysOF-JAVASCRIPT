// Take a number and find if the number is an odd or even number.

const salary = 55;
if (salary % 2 === 1) {
  console.log("odd");
} else {
  console.log("even");
}

const city = "dhaka";
switch (city) {
  case "dhaka":
  case "chittagong":
  case "sylhet":
  case "rajshahi":
  case "cumilla":
    console.log("all this are in bd");
    break;
  default:
    console.log("not in bd");
    break;
}
