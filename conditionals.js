//phone number
var phone = prompt("Enter your phone number in the following format: XXX-XXX-XXXX");

if (phone.charAt(3) === "-" && phone.charAt(7) === "-" && phone.length === 12) {
  alert("Thank you.");
} else {
  alert("You did not enter your phone number correctly. Please try again.");
} //to try: make it loop until they entered it correctly

//birth date
var birth = prompt("Enter your birth date in the following format: MM/DD/YY");

if (birth.charAt(2) === "/" && birth.charAt(5) === "/" && birth.length === 8) {
  alert("Thank you.");
} else {
  alert("You did not enter your birth date correctly. Please try again.");
}

//postal code
var postal = prompt("Enter your postal code in the following format: XXXXX or XXXXX-XXXX");

if (postal.length === 5 || (postal.charAt(5) === "-" && postal.length === 10)) {
  alert("Thank you.");
} else {
  alert("You did not enter your postal code correctly. Please try again.");
}

//state abbreviation
var state = prompt("Enter your state abbreviation in the following format: XX\n For Example: CO");

if (state.length === 2 && state === state.toUpperCase()) {
  alert("Thank you.");
} else {
  alert("You did not enter your state abbreviation correctly. Please try again.");
}

//married
var marry = prompt("Are you married?\nPlease enter YES or NO");

if (marry.toUpperCase() === 'YES' || marry.toUpperCase() === 'NO') {
  alert("Thank you.");//making all responses to uppercase eliminates need to test for all varieties
} else {
  alert("You did not answer correctly. Please try again.");
}
