let str =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()<>?:{}|";
let pass1 = "";
let pass2 = "";
let pass3 = "";
let pass4 = "";

let input1 = document.getElementById("input-1");
let input2 = document.getElementById("input-2");
let input3 = document.getElementById("input-3");
let input4 = document.getElementById("input-4");
let passLength = parseInt(prompt("Enter password length"));

function generatePasswords() {
  for (let i = 0; i <= passLength; i++) {
    var char = Math.floor(Math.random() * str.length + 1);

    pass1 += str.charAt(char);
  }

  input1.value = pass1;
}

function generatePasswords2() {
  for (let i = 0; i <= passLength; i++) {
    var char = Math.floor(Math.random() * str.length + 1);

    pass2 += str.charAt(char);
  }

  input2.value = pass2;
}
function generatePasswords3() {
  for (let i = 0; i <= passLength; i++) {
    var char = Math.floor(Math.random() * str.length + 1);

    pass3 += str.charAt(char);
  }

  input3.value = pass3;
}
function generatePasswords4() {
  for (let i = 0; i <= passLength; i++) {
    var char = Math.floor(Math.random() * str.length + 1);

    pass4 += str.charAt(char);
  }

  input4.value = pass4;
}
function allFunctions() {
  generatePasswords();
  generatePasswords2();
  generatePasswords3();
  generatePasswords4();
}
function myFunction1() {
  input1.select();
  navigator.clipboard.writeText(input1.value);
}
function myFunction2() {
  input2.select();
  navigator.clipboard.writeText(input2.value);
}
function myFunction3() {
  input3.select();
  navigator.clipboard.writeText(input3.value);
}
function myFunction4() {
  input4.select();
  navigator.clipboard.writeText(input4.value);
}
