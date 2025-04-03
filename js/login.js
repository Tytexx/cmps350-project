async function userInput() {
  const users = await fetch("../data/users.json");
  const userData = await users.json();

  const loginForm = document.querySelector("#loginForm");
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  //const userType = document.querySelector("#userType");

  if (!loginForm) return;

  loginForm.addEventListener("submit", function handleUserValidation(e) {
    e.preventDefault();

    console.log("Login form submitted");

    const enteredUsername = username.value.trim();
    const enteredPassword = password.value.trim();
    //const selectedUserType = userType.value.trim();

    const user = userData.find((user) => user.username === enteredUsername);

    if (!user || user.password !== enteredPassword) {
      alert("Incorrect Username or Password");
      return;
    }

    alert(`Login Successful \nWelcome ${user.username}`);
    window.location.href = "home.html";
  });
}

userInput();
