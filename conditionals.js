//phone number
// var phone = prompt("Enter your phone number in the following format: XXX-XXX-XXXX");
//
// if (phone.charAt(3) === "-" && phone.charAt(7) === "-") {
//   alert("Thank you.");
// } else {
//   alert("You did not enter your phone number correctly. Please try again.");
// }

//birth date
var birth = prompt("Enter your birth date in the following format: MM/DD/YY");

if (birth.charAt(2) === "/" && birth.charAt(5) === "/") {
  alert("Thank you.");
} else {
  alert("You did not enter your birth date correctly. Please try again.");
}
