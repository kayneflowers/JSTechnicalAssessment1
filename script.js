console.log("connected");

// //Coding Exam No. 1
// let intro = "Hello World!"
// console.log(intro);

// function myIntro() 
// {
//     console.log("Hello World!"); 
// }
// myIntro();


// let person = 
// {
//     firstName: "John",
//     lastName: "Smith",
//     age: 30,    
//     hobbies: ["Biking", "Mountain Climbing", "Swimming"]
// }

// otherHobbies = ["eating,sleeping,bingewatching"]
// const city = "Lincoln";
// const houseNumber = 32;
// const state = "Nebraska";
// const street = "Washington";

// console.log(`First Name: ${person.firstName}`
// +"                                  "+ 
// `Last Name: ${person.lastName}`
// +"                                               "+
// `Age: ${person.age}`
// +"                                                    "+
// `Hobbies:'${person.hobbies}`
// +"                                                       "+
// `Work Address:` +"                                                       "+ `city: ${city}` 
// +"                                                 "+ 
// `house Number ${houseNumber}` 
// +"                                      "+ 
// `state:${state}` 
// +"                                              "+ 
// `street: ${street}`);

// console.log(`${person.firstName} ${person.lastName} is ${person.age} years of age`);

// function info(otherHobbies){
//     console.log(`His hobbies are: ${otherHobbies}`)
// }
// info(otherHobbies);


// // function showAddress(adress){
// //     console.log(city (city) + " ");
// // }
// // showAddress(adress);


// let text = "";
// let j = 1;

// for (j;j<8; j++ )
// {
//     if (j === 2 || j === 3) continue;
//     console.log(text += j)
// }

// console.log("Answer 1");
console.log("Hello World!");
let firstName = "Kaye Regine";
let lastName = "Flores";
let age = "26";
let hobbies = ["Travelling","Listening Music","Watching Movies & Series"];
let otherHobbies = ["eating","dancing","drawing"]
const city = "Cebu City";
const houseNumber = "3";
const state = "Philippines";
const street = "Kamya";

function userInformation(firstName,lastName,age,hobbies,city,houseNumber,state,street,relationShipStatus = false){
    let userInformation = [];
    userInformation['First Name'] = firstName
    userInformation["Last Name"] = lastName
    userInformation["Age"] = age
    userInformation["Hobbies"] = hobbies
    userInformation["City"] = city
    userInformation["house Number"] = houseNumber
    userInformation["state"] = state
    userInformation["street"] = street
    let uIStr = [];
    uIStr+= `First Name: ${firstName}\n`;
    uIStr+= `Last Name: ${lastName}\n`;
    uIStr+= `Age: ${age}\n`;
    uIStr+= `Hobbies: ${hobbies}\n`;
    uIStr+= `City: ${city}\n`;
    uIStr+= `house Number: ${houseNumber}\n`;
    uIStr+= `state: ${state}\n`;
    uIStr+= `street: ${street}`;
    console.log(userInformation);
    console.log(firstName+" "+lastName+" is "+age+" years of age");
    console.log("My hobbies are: "+otherHobbies.join(", "));
    console.log("city: "+city);
    console.log("house number: "+houseNumber);
    console.log("state: "+state);
    console.log("street "+street);

    console.log("The value of isMarried is:");
    console.log(relationShipStatus);

}

userInformation(firstName,lastName,age,hobbies,city,houseNumber,state,street)

//Coding Exam No. 2
// let a = 10;
// let b = 8;

// console.log(a += b); //18
// console.log(a -= b); //10
// console.log(a *= b); //80
// console.log(a /= b); //10
// console.log(b += a); //18
// console.log(b -= a); //8
// console.log(b *= a); //80
// console.log(b /= a); //8
// console.log(a <= b); //false
// console.log(a >= b); //true
// console.log(b <= a); //true
// console.log(b >= a); //false
// console.log(a !== b); //true
// console.log(b !== a); //true

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


// console.log("\n\n\n");
// console.log("Answer 5");

function countEvenNumbers(num=20) {
    let userInput = prompt("Enter a number:");
    if (isNaN(num) || num < 0 || num > 20) {
      console.log("Invalid input, please enter a number between 0 and 20.");
      return;
    }
    for (let i = num; i >= 0; i--) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
console.log("part 1");
countEvenNumbers();

// userInput = parseInt(prompt("Enter a number between 0 and 20:"));
// console.log("part 2");
// countEvenNumbers(userInput);

// console.log("\n\n\n");
// console.log("Answer 6");

// function checkNumber() {
//     let number = prompt("Enter a number:");

//     for (;number >= 50;number--) {
//         if (number % 10 === 0) {
//             console.log(number + " is divisible by 10. Skipping...");
//             continue;
//         }
//         if (number % 5 === 0) {
//             console.log(number + " is divisible by 5.");
//         }
//     }

//     console.log("Loop terminated.");
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