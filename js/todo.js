const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;//새로운 변수에 먼저 toDoInput의 값이 복사되기 때문에
    toDoInput.value = "";//이후에 값이 비어져도 완전히 사라지는 것은 아니다
 
}

toDoForm.addEventListener("submit", handleToDoSubmit);