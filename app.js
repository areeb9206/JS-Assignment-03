// Chapter 9-11 (USER INPUT & CONDITIONAL STATEMENT)

// Q1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

var city = prompt("Enter your city name","Karachi")

if(city.toLowerCase() === "karachi"){
    alert("Welcome to city of lights")
}
else{
    alert("Welcome to " + city)
}

// Q2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender")

if(gender.toLowerCase() === "male"){
   alert("Good Morning Sir")
}

else if(gender.toLowerCase() === "female"){
    alert("Good Morning Ma’am")
 }

 else{
    alert("Please enter your gender")
 }

// Q3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

// Q4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// var fuel = +prompt("Enter remaining fuel amount in litres")

// if(fuel <= 0.25){
// alert("Please refill the fuel in your car")
// }

// else{
// alert("Fuel is enough to go")
// }

// Q5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a.
// Condition is True

// b.
// Condition is False

// c.
// Condition 1 is false
// Condition 2 is true
// Condition 3 is false
// Condition 4 is true

// d.
// True because the alert is displayed

// e.
// True because the alert "True" is displayed

// f.
// Alert is displayed

// Q6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

var markObtained = +prompt("Enter Obtained Marks");
var totalMarks = +prompt("Enter Total Marks");
var percentage = (markObtained / totalMarks) * 100;

document.write(
  "Obtained Marks:- ",
  markObtained,
  "<br>",
  "Total Marks:- ",
  totalMarks,
  "<br>",
  "Percentage:- ",
  percentage,
  "% <br>"
);

if (percentage >= 80) {
  document.write("Grade:- A-one <br> Remarks:- Excellent");
} else if (percentage >= 70) {
  document.write("Grade:- A <br> Remarks:- Good");
} else if (percentage >= 60) {
  document.write("Grade:- B <br> Remarks:- Need to improve");
} else {
  document.write("Grade:- Fail <br> Remarks:- Sorry <br>");
}

// Q7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var secretNumber = 7;
var guessNumber = +prompt("Guess the correct number between 1-10");

if (guessNumber === secretNumber) {
  alert("Bingo! Correct answer");
} else if (guessNumber === ++secretNumber) {
  alert("Close enough to the correct answer");
} else if (!(guessNumber === secretNumber)) {
  alert("Try again");
} else {
  alert("Please enter any number between 1-10");
}

// Q8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

var num = +prompt("Enter a number to check if its divisible by 3");

if (num % 3 === 0) {
  document.write(num + " is divisible by 3.<br>");
} else {
  document.write(num + " is not divisible by 3.<br>");
}

// Q9. Write a program that checks whether the given input is an even number or an odd number.

var evenNum = +prompt("Enter a number to check if its even or odd");

if (evenNum % 2 === 0) {
  document.write(evenNum + " is an even number.<br>");
} else {
  document.write(evenNum + " is an odd number.<br>");
}

// Q10. Write a program that takes temperature as input and shows a message based on following criteriaa. T > 40 then “It is too hot outside.”b. T > 30 then “The Weather today is Normal.”c. T > 20 then “Today’s Weather is cool.”d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = +prompt("Enter a temperature between 1-40");
if (temperature >= 40) {
  document.write("Its too hot outside");
} else if (temperature >= 30) {
  document.write("The Weather today is Normal.");
} else if (temperature >= 20) {
  document.write("Today’s Weather is cool.");
} else if (temperature >= 10) {
  document.write("OMG! Today’s weather is so Cool.");
} else if (temperature >= 1) {
  document.write("Its Freezing!!");
} else {
  document.write("Please enter Temperature between the limits");
}

// Q11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

var firstNum = +prompt("Enter first number to perform calculation");
var operator = prompt("Select what do you want to do", "+ , - , / , % , *");
var secondNum = +prompt("Enter second number to perform calculation");

if (operator == "+") {
  console.log(firstNum + secondNum);
} else if (operator == "-") {
  console.log(firstNum - secondNum);
} else if (operator == "/") {
  console.log(firstNum / secondNum);
} else if (operator == "*") {
  console.log(firstNum * secondNum);
}
else if (operator == "%") {
    console.log(firstNum * secondNum);
  }
  else{
    console.log("Please enter values")
  }


// Chapter 12-13:- (IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS)
// Q1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var value = prompt("Enter a value");

if (value == Number) {
  alert("Its a number");
} else if (value >= "A" && value <= "Z") {
  alert("Its a Uppercase letter");
} else if (value >= "a" && value <= "z") {
  alert("Its a Lowercase letter");
}

// Q2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var int1 = +prompt("Enter First Integer");
var int2 = +prompt("Enter second Integer");

if (int1 > int2) {
  console.log(int1, " is bigger");
} else if (int2 > int1) {
  console.log(int2, " is bigger");
}
else{
    console.log("Both Integer are equal")
}

// Q3. Write a program that takes input a number from user & state whether the number is positive, negative or zero

var int3 = +prompt("Enter an Integer");
if (int3 > 0) {
  console.log("The number is Positive");
} else if (int3 < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}
