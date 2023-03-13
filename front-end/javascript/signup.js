let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("Re-enter-password");
let emailErr = document.getElementById("email-val");
let passwordErr = document.getElementById("password-val");

form.addEventListener("submit", function (e) {
  for (let i = 0; i < password.value.length; i++) {
    if (password.value[i] == " ") {
      passwordErr.textContent = "Password can't contain space";
      password.style.border = "2px solid red";
      e.preventDefault();
    }
  }
  if (password.value.toLowerCase() == "password") {
    passwordErr.textContent = `"password" can not be used as password`;
    password.style.border = "2px solid red";
    e.preventDefault();
  } else if (password.value.trim().length <= 6) {
    passwordErr.textContent = "Password must be longer than 6 characters";
    password.style.border = "2px solid red";
    e.preventDefault();
  } else if (password.value.trim().length >= 20) {
    passwordErr.textContent = "Password must be less than 20 characters";
    password.style.border = "2px solid red";
    e.preventDefault();
  }
  if (password2.value !== password.value) {
    passwordErr.textContent = "the passwords must be the same";
    password.style.border = "2px solid red";
    password2.style.border = "2px solid red";
    e.preventDefault();
  }
  let userName = document.getElementById("name").value;
  let emailVal = email.value;
  let passwordVal = password.value;
  signup(userName, emailVal, passwordVal);
});

async function signup(userName, email, password) {
  console.log(userName, password, email);
  let result = await fetch("http://localhost:3000/auth/signup/student", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: userName,
      email: email,
      password: password,
      role: "student",
    }),
  })
  result = await result.json()
}