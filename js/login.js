const users = await fetch("../data/users.json");
const userData = await users.json();

const loginForm = document.querySelector("#loginForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const userType = document.querySelector("#userType");

function userInput() {

}
