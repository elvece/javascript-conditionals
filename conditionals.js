var phone = prompt("Enter your phone number in the following format: XXX-XXX-XXXX");

if (phone.charAt(3) === "-" && phone.charAt(7) === "-") {
  console.log("Thank you.");
} else {
  console.log("You did not enter your phone number correctly. Please try again.");
}
