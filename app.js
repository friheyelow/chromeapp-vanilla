const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
  event.preventDefault();
}

link.addEventListener("click", handleLinkClick);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
}