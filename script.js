console.log("connected");

//Coding Exam No. 1
console.log("Hello World!");

let firstName = "Kaye Regine";
let lastName = "Flores";
let age = "26";
let hobbies = ["Travelling","Listening Music","Watching Movies & Series"];

const city = "Cebu City";
const houseNumber = "3";
const state = "Philippines";
const street = "Kamya";

function userInfo(firstName,lastName,age,hobbies,city,houseNumber,state,street){
    let userInfo = [];
    userInfo["First Name"] = firstName
    userInfo["Last Name"] = lastName
    userInfo["age"] = age
    userInfo["hobbies"] = hobbies
    userInfo["city"] = city
    userInfo["house Number"] = houseNumber
    userInfo["state"] = state
    userInfo["street"] = street
    let userInformation = `First Name: ${firstName}`;
    userInformation = `Last Name: ${lastName}`;
    userInformation = `age: ${age}`;
    userInformation = `hobbies: ${hobbies}`;
    userInformation = `city: ${city}`;
    userInformation = `house Number ${houseNumber}`;
    userInformation = `state: ${state}`;
    userInformation = `street: ${street}`;
    console.log(userInfo);
}

userInfo(firstName,lastName,age,hobbies,city,houseNumber,state,street);

console.log(firstName+" "+lastName+" is "+age+" years of age");

function otherHobbies(){
    let otherHobbies = ["eating","dancing","drawing"]
    console.log("My other hobbies are: "+otherHobbies.join(", "));
}
otherHobbies();

function workingAddress(city,houseNumber,state,street){
    console.log(`Working Address:`);
    console.log(`city : ${city}`);
    console.log(`house Number : ${houseNumber}`)
    console.log(`state : ${state}`)
    console.log(`street  ${street}`)
}
workingAddress(city,houseNumber,state,street);

console.log("The value of isMarried is:");

function relationhipStatus(Status = false){
    console.log(Status);
}
relationhipStatus();

//Coding Exam No. 2
let a = 10;
let b = 8;

console.log(a += b); //18
console.log(a -= b); //10
console.log(a *= b); //80
console.log(a /= b); //10
console.log(b += a); //18
console.log(b -= a); //8
console.log(b *= a); //80
console.log(b /= a); //8
console.log(a <= b); //false
console.log(a >= b); //true
console.log(b <= a); //true
console.log(b >= a); //false
console.log(a !== b); //true
console.log(b !== a); //true

//Coding Exam No. 3
// let colorInput = prompt("Enter a color: ");
// let result = checkColor(colorInput);

// function checkColor(color) 
// {
//     let message;
  
//     switch (color.toLowerCase()) 
//     {
//       case "black":
//         message = "You have chosen black.";
//         break;
//       case "violet":
//         message = "You have chosen violet.";
//         break;
//       case "pink":
//         message = "You have chosen pink.";
//         break;
//       default:
//         message = "Invalid color.";
//     }
  
//     return message;
// }
// console.log(result);


//Coding Exam No. 4
// let userInput = prompt ("Give me a number");

// function oddOrEven (num) {
//     if (isNaN (num) || typeof parseInt(num) !== "number")

//     {
//         return `unexpected input`;
//     }
//     else if (num == ''){
//         return "Please input inside the box"
//     }

//     else {
//         if (num % 2 == 0)
//         {
//             return ("even number");
//         }
//         else {
//             return ("odd number");
//         }
//     }
// }

// console.log(oddOrEven(userInput));

//Coding Exam No. 5
// let userInput = prompt ("Enter a number between 0 to 20:");

// function countEven(num=20) {  
//     if (isNaN(num) || num < 0 || num > 20) 
//     {
//       alert("Invalid input, please enter a number between 0 and 20.");
//       return;
//     }
//     for (let n = num; n >= 0; n--) {
//       if (n % 2 === 0) {
//         console.log(n);
//       }
//     }
// }
// countEven(userInput);

//Coding Exam No. 6
// function checkNumber() {
//     let number = prompt("Enter a number:");

//     for (;number >= 50; number--) {
//         if (number % 10 === 0) {
//             console.log(`The number is divisible by 10. Skipping the number`);
//             continue;
//         }
//         if (number % 5 === 0) {
//             console.log(`${number}`);
//         }
//     }
//     console.log(`Currently at number ${number}. Terminating the loop.`);
// }
// checkNumber();


//Coding Exam No. 7
// function loginAttempts() {
//     const Username = "student@mail.com";
//     const Password = "discovery";
//     let usernameInput, passwordInput;
//     let attempts = 3;

//     while (attempts > 0) {
//         usernameInput = prompt("Enter a username or email:");
//         passwordInput = prompt("Enter a password:");

//         if (usernameInput === Username && passwordInput === Password) {
//             alert("SuccessFully Login");
//             console.log("Welcome!");
//             return;
//         } else {
//             attempts--;
//             alert(`Login Failed Now Only ${attempts} Login Attempts Available.`);
//         }
//     }
//     alert("Login attempts exceeded. Please try again later.");
//     console.log("Login failed");
// }
// loginAttempts();
