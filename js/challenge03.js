/*******************설정해야 하는 것들**********************/
//1.내가 제시하는 수의 범위
//2.그 중 내가 고른 수
//3.컴퓨터가 제시하는 랜덤 수
//4.두 수의 비교시 출력되는 값

/**************변수 설정*****************/
const rangeForm = document.querySelector("#range-form");
const rangeInput = document.querySelector("#range-form input");
const myNumberForm = document.querySelector("#my-number-form");
const myNumberInput = document.querySelector("#my-number-form #my-number");
const compareForm = document.querySelector("#compare-form");
const myResult = compareForm.querySelector("#mine-result");
const computerResult = compareForm.querySelector("#computer-result");


/*****************************************/
function paintComputerNumber(computerNumber){
    computerResult.innerText = `the machine chose: ${computerNumber}`;

}
function paintMyNumber(myNumber){
    myResult.innerText = `You chose: ${myNumber}`
}
s
/*****************************************/
function rangeSubmit(event){
    event.preventDefault();
    const rangeNumber = rangeInput.value;
    const randomNumber = Math.floor(Math.random()*rangeNumber);
    const computerNumber = randomNumber;
    paintComputerNumber(computerNumber);
}
function myNumberSubmit(event){
    event.preventDefault()
    const myNumber = myNumberInput.value;
    paintMyNumber(myNumber);
}
/*****************************************/
rangeForm.addEventListener("submit",rangeSubmit)
myNumberForm.addEventListener("submit",myNumberSubmit);
/*****************************************/
/*****************************************/
