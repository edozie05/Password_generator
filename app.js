const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = 15;
const passwordEl1 = document.getElementById("password-el1");
const passwordEl2 = document.getElementById("password-el2");
let randomNumber = "";

function randomChar() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generatePassword1() {
  let randomPass = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPass += randomChar();
  }
  return randomPass;
}
function generatePassword2() {
  let randomPass = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPass += randomChar();
  }
  return randomPass;
}

function generate() {
  passwordEl1.textContent = generatePassword1();
  passwordEl2.textContent = generatePassword2();
}

// let passworddLength = 12;
// let passwordOneEL = document.getElementById("generatedPasswordOne");
// let passwordTwoEL = document.getElementById("generatedPasswordTwo");
// //let resetEl = document.getElementById("generatedPasswordOne","generatedPasswordTwo" )

// function getRandomCharacter() {
//   let randomChar = Math.floor(Math.random() * characters.length);
//   return characters[randomChar];
// }

// function generateRandomPassword1() {
//   let randomPassword = "";
//   for (let i = 0; i < passwordLength; i++) {
//     randomPassword += getRandomCharacter();
//   }
//   return randomPassword;
// }

// function generateRandomPassword2() {
//   let randomPassword = "";
//   for (let i = 0; i < passwordLength; i++) {
//     randomPassword += getRandomCharacter();
//   }
//   return randomPassword;
// }

// function generatepasswords() {
//   passwordOneEL.textContent = generateRandomPassword1();
//   passwordTwoEL.textContent = generateRandomPassword2();
// }

// function reset() {
//   passwordOneEL.textContent = "password";
//   passwordTwoEL.textContent = "password";
// }
