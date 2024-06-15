const signUp = document.querySelector("#signUp");
const signIn = document.querySelector("#signIn");
const heading = document.querySelector("#heading");
const passWord = document.querySelector("#passWord");

signIn.addEventListener('click', ()=>{
  heading.innerHTML = "Sign In";
  passWord.style.display = "none"
})

signUp.addEventListener('click', ()=>{
  heading.innerHTML = "Sign Up";
  passWord.style.display = "block"
})