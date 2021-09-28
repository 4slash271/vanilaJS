/*const loginForm =document.querySelector("#login-form"); 
//querySelector는 클래스네임, 태그네임 모두 검색 가능하니 아이디표시 필수!

const loginInput = loginForm.querySelector("input");
const ligonButton = loginForm.querySelector("button");
*/

/*위의 코드를 요약해서 바꾸면!*/ 

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const loginButton = document.querySelector("#login-form button");


const link = document.querySelector("a");

function onLoginSubmit(event){
    // const username = loginInput.value;
    // if(username === ""){
    //   alert("Please write your name");
    // }
    // else if(username.length > 15) {
    //     alert("Your name is too long");

    // }

    event.preventDefault();//브라우저의 이벤트 전파를 막지 않고 이벤트 취소. submit 하되 새로고침 되지 않고 이벤트 사라진다.
    loginForm.classList.add("hidden");//loginForm에 hidden 클래스 추가 {display=none}
    const username = loginInput.value;//username은 login 창의 input
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = "Hello " + username + "!"; 아래와 같은 스트링과 변수 같이 쓰는 법
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //onLoginSubmit 함수가 실행되면 이벤트의 취소되고 로그인 폼 사라짐 
}
// function handleLinkClick(){
//     alert("clicked!!")
// }//handleLickClick 실행하면 "clicked!!"라는 스트링의 문구 출력


// loginButton.addEventListener("click",onLoginSubmit);
loginForm.addEventListener("submit",onLoginSubmit); //submit은 엔터키나 버튼을 누를 때 발생한다
//loginForm을 submit하면 onLoginSubmit 함수가 실행된다.

// link.addEventListener("click", handleLinkClick); //링크를 click하면 handleLinkClick 함수 실행


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
//show the form
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    //show the greetings
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedUsername} again!`;
}