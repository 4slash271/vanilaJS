/*const loginForm =document.querySelector("#login-form"); 
//querySelector는 클래스네임, 태그네임 모두 검색 가능하니 아이디표시 필수!

const loginInput = loginForm.querySelector("input");
const ligonButton = loginForm.querySelector("button");
*/

/*위의 코드를 요약해서 바꾸면!*/ 

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 
// const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(){
    // const username = loginInput.value;
    // if(username === ""){
    //   alert("Please write your name");
    // }
    // else if(username.length > 15) {
    //     alert("Your name is too long");

    // }

    const username = loginInput.value;
    console.log(username);
}

// loginButton.addEventListener("click",onLoginSubmit);
loginForm.addEventListener("submit",onLoginSubmit); //submit은 엔터키나 버튼을 누를 때 발생한다