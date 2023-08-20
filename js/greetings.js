// 방법 1
// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 방법 2
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const link = document.querySelector("a");



function onLoginSubmit(event) {

    // form의 기본 동작 submit 막기(새로고침 방지)
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);

    // const username = loginInput.value;
    // console.log("Hello", loginInput.value);


    // // html의 "form"으로 해결 
    // if(username === ""){
    //     alert("Please write your name");
    // } else if(username.length > 15){
    //     alert("Your name is too long")
    // }


}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello! ${username}`;
}

// function hadleLinkClick(event){
//     event.preventDefault();
//     console.dir(event);
// }


// loginButton.addEventListener("click", onLoginBtnClick);

// link.addEventListener("click", hadleLinkClick);

function clickLoginForm() {
    loginInput.placeholder = "";
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    loginForm.addEventListener("click", clickLoginForm);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}