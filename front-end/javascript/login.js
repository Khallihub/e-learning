const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailErr = document.getElementById("email-val");
const passwordErr = document.getElementById("password-val");
// localStorage.setItem("email", "kkk");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (password.trim().length <= 6) {
    passwordErr.textContent = "Password must be longer than 6 characters";
    passwordInput.style.border = "2px solid red";
    return;
  }

  if (password.trim().length >= 20) {
    passwordErr.textContent = "Password must be less than 20 characters";
    return;
  }
  
  try {
    const result = await login(email, password);
    localStorage.setItem(email, JSON.stringify(result));
    localStorage.setItem("email", JSON.stringify(email));

    // Redirect to home page or display success message
    window.open("homepage.html", "_self" )
  } catch (error) {
    // Handle login error
    passwordErr.textContent = "incorrect credentials. try again"
    passwordInput.style.border = "2px solid red";
  
  }
});

async function login(email, password) {
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      role: "student",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  const result = await response.json();
  return result;
}
