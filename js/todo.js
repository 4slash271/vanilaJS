



/**********************변수 설정하기******************************/
const toDoForm = document.getElementById("todo-form"); 
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-lists");
const TODOS_KEY = "toDos";
const toDos = []; 



/****************************************************/
//toDoForm의 제출 클릭->handleToDoSubmut 실행->toDoInput의 value가 newToDo에 복사됨
//->toDos 배열 안에 newTodo 추가되고 화면에 표시->saveToDo 실행
//로컬 스토리지에 toDos 배열 안의 "toDos" 저장. "[a, b, c]" 이런 식으로 데이터 자체가 스트링 안에 들어감!
//JSON.stringify는 데이터를 문자열화한다. 예)JSON.stringify([1, 'false', false]); => '[1,"false",false]'
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

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
//toDos의 배열 안에 newToDo가 추가된다.
//paintToDo 함수가 newTodo에 대해 실행된다.
//saveToDos 실행.
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;//새로운 변수에 먼저 toDoInput의 값이 복사되기 때문에
    toDoInput.value = "";//이후에 값이 비어져도 완전히 사라지는 것은 아니다
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}
/****************************************************/
//toDoForm의 submit을 실행시키면 handleToDoSubmit이 동작한다!
toDoForm.addEventListener("submit", handleToDoSubmit);


/****************************************************/
//savedToDos는 로컬스토리지 안의 "toDos"를 가져오는 것이다. *주의* 위의 함수 saveToDos는 로컬스토리지에 스트링을 배열로 바꾸어 저장하는 함수.
//조건문 실행
//savedToDOs(저장된 배열이)안이 비어있지 않다면
//parsedToDos 변수 실행 => 로컬스토리지 안에 저장된 문자열 데이터를 배열로 바꾸어 가져온다.
//가져온 배열에 forEach => 배열 안의 객체당 함수 실행 
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);//string data로 저장된 saveToDos를 array로 바꿔준다.
    parsedToDos.forEach((item) => console.log("this is trial of", item));//forEach => array의 객체당 한번씩 함수 실행
        
   
}

