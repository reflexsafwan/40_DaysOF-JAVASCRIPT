// falling through in switch case
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

