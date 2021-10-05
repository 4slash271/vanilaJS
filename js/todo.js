
/****************************************************/



/**********************변수 설정하기******************************/
const toDoForm = document.getElementById("todo-form"); 
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-lists");

/****************************************************/
//paintToDo에서 실행된 button이 click되면 deletToDo실행
//list 변수는 이벤트의 부모 요소를 타겟으로 찾는다.
//list(이벤트=클릭된 버튼의 부모인 li) 삭제 
function deleteToDO(event){
 const list = event.target.parentElement; 
 list.remove();

}

/****************************************************/
//handleToDoSubmit 함수가 실행되면 newTodo 변수에 대해 paintToDo 실행된다.
//변수 list는 도큐먼트 안의 li
//변수 span은 도큐먼트 안의 span
//list 변수 안에 자식 속성으로 span을 추가한다.
//span의 내부 텍스트에 변수 newTodo를 넣는다.
//toDoList(도큐먼트의 ul)의 자식 속성으로 위의 list를 보낸다.

function paintToDo(newTodo){
    const list = document.createElement("li"); 
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = " ❌";
    button.addEventListener("click", deleteToDO);
    list.appendChild(span);
    list.appendChild(button);
    span.innerText= newTodo;
    toDoList.appendChild(list);
}


/****************************************************/
//toDoForm의 submit을 실행시키면 handleToDoSubmit이 동작한다!
//이벤트 새로고침 방지
//newTodo에 toDoInput에 저장된 value가 복사된다.
//복사된 후 toDoInput의 value는 지워진다.
//paintToDo 함수가 newTodo에 대해 실행된다.
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;//새로운 변수에 먼저 toDoInput의 값이 복사되기 때문에
    toDoInput.value = "";//이후에 값이 비어져도 완전히 사라지는 것은 아니다
    paintToDo(newTodo);
    
}
/****************************************************/
//toDoForm의 submit을 실행시키면 handleToDoSubmit이 동작한다!
toDoForm.addEventListener("submit", handleToDoSubmit);