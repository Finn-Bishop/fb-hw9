// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object for the current date and time
const today = new Date();

// getMonth() is 0-based (January = 0), so add 1 to get the real month
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();
const currentYear = today.getFullYear();

// Add a leading zero so the month and day are always two digits
const formattedMonth = String(currentMonth).padStart(2, "0");
const formattedDay = String(currentDay).padStart(2, "0");

// Build the final message and show it on the page
const dateMessage = "Today is " + formattedMonth + "/" + formattedDay + "/" + currentYear;
document.getElementById("dateOutput").textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

// Starting values (all strings)
const ageText = "27";          // numeric string, whole number
const piText = "3.14";         // numeric string with a decimal
const usernameText = "abc123"; // cannot be converted to a number
const scoreText = "250";       // numeric string, whole number

// Convert each value with Number()
const ageNumber = Number(ageText);
const piNumber = Number(piText);
const usernameNumber = Number(usernameText);
const scoreNumber = Number(scoreText);

// Check each converted value with Number.isNaN()
const ageIsNaN = Number.isNaN(ageNumber);
const piIsNaN = Number.isNaN(piNumber);
const usernameIsNaN = Number.isNaN(usernameNumber);
const scoreIsNaN = Number.isNaN(scoreNumber);

// Check each converted value with Number.isInteger()
const ageIsInteger = Number.isInteger(ageNumber);
const piIsInteger = Number.isInteger(piNumber);
const usernameIsInteger = Number.isInteger(usernameNumber);
const scoreIsInteger = Number.isInteger(scoreNumber);

// Build one sentence (list item) per value
const ageResult = "<li>Original: '" + ageText + "' &rarr; Converted: " + ageNumber +
  " &rarr; isNaN: " + ageIsNaN + " &rarr; isInteger: " + ageIsInteger + "</li>";
const piResult = "<li>Original: '" + piText + "' &rarr; Converted: " + piNumber +
  " &rarr; isNaN: " + piIsNaN + " &rarr; isInteger: " + piIsInteger + "</li>";
const usernameResult = "<li>Original: '" + usernameText + "' &rarr; Converted: " + usernameNumber +
  " &rarr; isNaN: " + usernameIsNaN + " &rarr; isInteger: " + usernameIsInteger + "</li>";
const scoreResult = "<li>Original: '" + scoreText + "' &rarr; Converted: " + scoreNumber +
  " &rarr; isNaN: " + scoreIsNaN + " &rarr; isInteger: " + scoreIsInteger + "</li>";

// Combine all results into ONE string and display it
const conversionOutput = "<ul>" + ageResult + piResult + usernameResult + scoreResult + "</ul>";
document.getElementById("numberConversionOutput").innerHTML = conversionOutput;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Price calculator values
const itemPrice = 18.5;    // price of one item in dollars
const itemQuantity = 3;    // number of items bought
const taxRate = 0.0725;    // 7.25% sales tax
const shippingCost = 6.99; // flat shipping fee in dollars

// Calculations
const subtotal = itemPrice * itemQuantity;             // multiplication
const taxAmount = subtotal * taxRate;                  // multiplication
const totalCost = subtotal + taxAmount + shippingCost; // addition

// Format money values to two decimal places with toFixed()
const mathOutput =
  "<p>Item price: $" + itemPrice.toFixed(2) + " &times; " + itemQuantity + "</p>" +
  "<p>Subtotal: $" + subtotal.toFixed(2) + "</p>" +
  "<p>Tax (" + (taxRate * 100).toFixed(2) + "%): $" + taxAmount.toFixed(2) + "</p>" +
  "<p>Shipping: $" + shippingCost.toFixed(2) + "</p>" +
  "<p><strong>Total cost: $" + totalCost.toFixed(2) + "</strong></p>";

document.getElementById("mathOutput").innerHTML = mathOutput;

// ==========================
// Part 4: Conditionals
// ==========================

// Conditional 1: check whether the username value is a valid number
let usernameMessage;
if (Number.isNaN(usernameNumber)) {
  usernameMessage = "'" + usernameText + "' is not a valid number.";
} else {
  usernameMessage = "'" + usernameText + "' is a valid number.";
}

// Conditional 2: check whether the pi value is an integer
let piMessage;
if (Number.isInteger(piNumber)) {
  piMessage = "'" + piText + "' is an integer.";
} else {
  piMessage = "'" + piText + "' is not an integer.";
}

// Add both messages to the Number Conversion section
document.getElementById("numberConversionOutput").innerHTML +=
  "<p>" + usernameMessage + "</p><p>" + piMessage + "</p>";

// Conditional 3: check whether the order qualifies for free shipping
const freeShippingMinimum = 75;
let shippingMessage;
if (subtotal >= freeShippingMinimum) {
  shippingMessage = "This order qualifies for free shipping!";
} else {
  const amountNeeded = freeShippingMinimum - subtotal; // subtraction
  shippingMessage = "Spend $" + amountNeeded.toFixed(2) + " more to get free shipping.";
}

// Add the shipping message to the Math section
document.getElementById("mathOutput").innerHTML += "<p>" + shippingMessage + "</p>";
