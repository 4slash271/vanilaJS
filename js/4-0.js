/*const loginForm =document.querySelector("#login-form"); 
//querySelector는 클래스네임, 태그네임 모두 검색 가능하니 아이디표시 필수!

const loginInput = loginForm.querySelector("input");
const ligonButton = loginForm.querySelector("button");
*/

/*위의 코드를 요약해서 바꾸면!*/ 

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 
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

    event.preventDefault();//이벤트의 전파를 막지 않고 이벤트 취소. submit 하되 새로고침 되지 않고 이벤트 사라진다.
    const username = loginInput.value;//username은 login 창의 input
    loginForm.classList.add("hidden");//loginForm에 hidden 클래스 추가 {display=none}
    console.log(username);
    //onLoginSubmit 함수가 실행되면 이벤트의 취소되고 로그인 폼 사라짐 
}
function handleLinkClick(){
    alert("clicked!!")
}//handleLickClick 실행하면 "clicked!!"라는 스트링의 문구 출력


// loginButton.addEventListener("click",onLoginSubmit);
loginForm.addEventListener("submit",onLoginSubmit); //submit은 엔터키나 버튼을 누를 때 발생한다
//loginForm을 submit하면 onLoginSubmit 함수가 실행된다.

link.addEventListener("click", handleLinkClick); //링크를 click하면 handleLinkClick 함수 실행