/*******************설정해야 하는 것들**********************/
//게임설명//
//수의 범위를 설정한다. 이때 수의 범위는 0 이상의 양수.
//설정된 범위 안의 수를 제시한 후 제출한다.
//제출하자마자 브라우저에서 범위 안의 수를 랜덤으로 제시한다.
//사용자가 선택한 수와 브라우저의 수가 같으면 사용자 승리, 아니면 사용자 패배.

//1.내가 제시하는 수의 범위
//2.그 중 내가 고른 수
//3.컴퓨터가 제시하는 랜덤 수
//4.두 수의 비교시 출력되는 값

/**************변수 설정*****************/
const rangeInput = document.querySelector("#range-form input");
const myNumberForm = document.querySelector("#my-number-form");
const myNumberInput = document.querySelector("#my-number-form #my-number");
const compareForm = document.querySelector("#compare-form");
const computerResult = compareForm.querySelector("#computer-result");



/*****************************************/
//1. 먼저 자동 새로고침 방지
//2. '(내가 고른 수가 들어있는 폼의 인풋)안의 값' = 내가 고른 수와 '(설정 범위 폼의 인풋)의 값' = 범위 중 최대수가 빈칸이면 리턴;
//3. rangeNumber는 범위 중 최대수 변수 설정
//4. myNumber는 내가 고른 수 변수 설정
//5. randomNumber는 범위 안의 수를 랜덤 선택하여 소수점 이하 내림한 것
//6. compareResult는 compareForm 안의 span 
//7. compareResult의 html 안에 비교문 입력
//8. 비교문: 내가 고른 수와 범위 안의 수를 소수점 이하 내림한 것이 같다면? 승리 아니면 패배

function rangeSubmit(event){
    event.preventDefault();
    if(myNumberInput.value === "" && rangeInput.value === ""){
        return;
    }
    const rangeNumber = rangeInput.value;
    const myNumber = parseInt(myNumberInput.value,10);
    const randomNumber = Math.floor(Math.random()*rangeNumber);
    const compareResult = compareForm.querySelector("span");
    compareResult.innerHTML = `You chose: ${myNumber}, the machine chose: ${randomNumber}.<br/>
    <strong>${myNumber === randomNumber ? "You won!" : "You lost!"}</strong>`


}

/*****************************************/
//(내가 고른 수가 들어있는 폼)을 제출하면, rangeSubmit 실행!
myNumberForm.addEventListener("submit",rangeSubmit);

/*****************************************/
