// Chapter 9-11 (USER INPUT & CONDITIONAL STATEMENT)

// Q1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

var city = prompt("Enter your city name", "Karachi");

if (city.toLowerCase() === "karachi") {
  alert("Welcome to city of lights");
} else {
  alert("Welcome to " + city);
}

// Q2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender");

if (gender.toLowerCase() === "male") {
  alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
  alert("Good Morning Ma’am");
} else {
  alert("Please enter your gender");
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
} else if (operator == "%") {
  console.log(firstNum * secondNum);
} else {
  console.log("Please enter values");
}

//   Chapter 9-11 END

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
} else {
  console.log("Both Integer are equal");
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

// Q4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var vowels = prompt("Enter any one character", "a");

if (
  vowels.toLowerCase() === "a" ||
  vowels.toLowerCase() === "e" ||
  vowels.toLowerCase() === "i" ||
  vowels.toLowerCase() === "o" ||
  vowels.toLowerCase() === "u"
) {
  console.log("True");
} else {
  console.log("False");
}

// Q5. Write a program that:-
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

var correctPass = "pakistan1122";

var userPass = prompt("Enter your password");

if (!userPass) {
  alert("Enter your password please..");
} else if (userPass === correctPass) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

// Q6. This if/else statement does not work. Try to fix it:

// Fixed Code
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

// Q7. Write a program that takes time as input from user in 24hours clock format like: 1900 = 7pm. Implement thefollowing case using if, else & else if statements

var time = prompt("Enter a time in 24 hours format", "1900");
var output;

if (time >= "0000" && time < "1200") {
  output = "Good Morning";
} else if (time >= "1200" && time < "1700") {
  output = "Good Afternoon";
} else if (time >= "1700" && time < "2100") {
  output = "Good Evening";
} else if (time >= "2100" && time < "2359") {
  output = "Good Night";
} else {
  output = "Enter correct time or correct time format";
}

console.log(output);

// Chapter 12-13 END

// HOME ASSIGNMENT
// Chapter 10:- (if statements)

// Q1. var city = &quot;Karachi&quot; if (city = &quot;Karachi&quot;) { console.log(&quot;The City OF Lights&quot;) Correct the above statement:
// Also try this statement by yourself

var city = "Karachi";
if (city === "Karachi") {
  console.log("The City oF Lights");
}

// Q2. This is the first line of an if statement: if (x === y) { Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.

// if (x === y) {
//    var z = prompt("What is value of x?")
// }

// Q3. Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi" if not then alert ("Please write correct city")

var ZipCode = 10010;

if (ZipCode === 10010) {
  alert("Karachi");
} else {
  alert("Please write correct city");
}

// Q4. Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new value to that variable, as in x = 1;

var x = 5;

if (x === 5) {
  x = 1;
}

// Chapter 10 END

// Chapter 11:- (Comparison Operators)

// Q1. Code the first line of an if statement that tests whether one variable is unequal to another. (Use !)

if (1 != 2) {
  console.log(true);
}

// Q2. Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable.

if (10 >= 3) {
  console.log(true);
}

// Q3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.
var y = 6;

if (y != 5) {
  console.log((y = 10));
}

// Q4. Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert.

if (7 != 10) {
  alert("Congratulations");
}

// Q5. Code a prompt asking for your first name. Code an if statement that tests whether the name you entered is unequal to another name. If the condition is true (it will be), display an alert that says "No match"

var firstName1 = prompt("Enter your first name");
var secondName2 = "Ahmed";
if (firstName1 != secondName2) {
  alert("No match");
}
// Chapter 11 END

// Chapter 12:- (if…else and else ifstatements)

// Q1. Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.

var variable1 = 1;
var variable2 = 6;

if (variable1 >= variable2) {
  alert("The given condition is true.");
} else {
  alert("The given condition is false");
}

// Q2. Write a program using if else and else if statement which take marks from user. And the program will calculate your percentage and give you grade A/C to Your percentage. (MARKSHEET)

var marks1 = +prompt("Enter Obtained Marks");
var marks2 = +prompt("Enter Total Marks");

var percentage1 = (marks1 / marks2) * 100;

var message1;

document.write(percentage1, "<br>");

if (percentage1 >= 80) {
  message1 = "Grade:- A+ <br> ";
} else if (percentage1 >= 70) {
  message1 = "Grade:- A <br>";
} else if (percentage1 >= 60) {
  message1 = "Grade:- B <br>";
} else if (percentage1 >= 50) {
  message1 = "Grade:- C <br>";
} else if (percentage1 >= 40) {
  message1 = "Grade:- Fail <br>";
} else {
  message1 = "Write correct marks please <br>";
}
document.write(message1);

// Q3. This is the if statement that begins the code. if (a === 10) { alert("a is 10"); } If a isn't 10, display an alert that says The correct value of a is ____
// Done

// Q4. Prompt the user to enter a city. If the city is Karachi, display an alert acknowledging it is Karachi. If not, check to see if it's Lahore. If it is, display an alert acknowledging it's Lahore. Otherwise, display a different alert.

var city1 = prompt("Enter your city name");

if (city1.toLocaleLowerCase() === "karachi") {
  document.write("It is Karachi");
} else if (city1) {
  document.write("It is Lahore");
} else {
  document.write("Please enter a city in karachi or lahore");
}

// Chapter 12 END

// Chapter 13:- (Testing sets ofconditions)

// Q1. Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d.

if (2 === 2 && 5 === 5) {
  console.log("Both conditions are true");
}

// Q2. Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d.

if (3 === 3 || 5 === 8) {
  console.log("At least one condition is true");
}

// Q3. Code the first line of an if statement that tests whether I. name is either "Hamza" or "Arsalan". II. age is Less than 60.

var name = "Hamza";
var age1 = 55;
if ((name === "Hamza" || name === "Arsalan") && age1 <= 60) {
  console.log("At least one name should be true and age must be true");
}

// Q4. Declare two variables and assign them number values. If the first variable is less than the second variable or greater than the second variable, display an alert.
var num1 = 10;
var num2 = 30;

if (num1 < num2 || num1 > num2) {
  alert("One condition is true");
}

// Q5. Declare 2 variables. Assign one of them your first name and the other one your last name. Code 2 prompts, asking for your first and your last name. If your answers match the two variables, display an alert

var myFirstName = "areeb";
var myLastName = "ahmed";

var firstAnswer = prompt("Enter My First Name");
var secondAnswer = prompt("Enter My Last Name");

if (
  firstAnswer.toLowerCase() === myFirstName &&
  secondAnswer.toLowerCase() === myLastName
) {
  alert("Your answer is correct my name is 'Areeb Ahmed'");
} else {
  alert("Your answer is incorrect");
}

// Chapter 13 END
