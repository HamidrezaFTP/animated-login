"use strict";

const loginContainer = document.getElementById("loginContainer");
const switchToSignUpBtn = document.getElementById("switchToSignUp");
const switchToSignInBtn = document.getElementById("switchToSignIn");

switchToSignUpBtn.addEventListener("click", () => {
  loginContainer.classList.add("active");
});

switchToSignInBtn.addEventListener("click", () => {
  loginContainer.classList.remove("active");
});
