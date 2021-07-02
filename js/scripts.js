const signupBtn = document.getElementById("signupBtn");
const signupSection = document.getElementById("signup");

const loginbtn = document.getElementById("loginBtn");
const loginSection = document.getElementById("login");

signupBtn.addEventListener("click", signup);
loginBtn.addEventListener("click", login);

function signup() {
  signupSection.classList.remove("d-none");
  loginSection.classList.add("d-none");
}

function login() {
  signupSection.classList.add("d-none");
  loginSection.classList.remove("d-none");
}
