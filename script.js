const signUp = document.querySelector("#signUp");
const signIn = document.querySelector("#signIn");
const heading = document.querySelector("#heading");
const passWord = document.querySelector("#passWord");
const name = document.getElementById("name");

signIn.addEventListener('click', ()=>{
  heading.innerHTML = "Sign In";
  name.style.display = "none"
})

signUp.addEventListener('click', ()=>{
  heading.innerHTML = "Sign Up";
  name.style.display = "block"
})