/**************변수 설정*****************/
const rangeForm = document.querySelector("#range-form");
const rangeInput = document.querySelector("#range-form input");
const myNumberForm = document.querySelector("#my-number-form");
const myNumber = document.querySelector("#my-number");
const RANGE_NUMBER = "rangeNumber";

//1.변수 설정하기
//범위 설정 폼과 범위 설정 값
//선택 설정 폼과 선택된 값

//범위 설정 값 로컬 스토리지에 저장하기
function setRangeMumber(event){
    event.preventDefault();
    const rangeNumber = rangeInput.value;
    localStorage.setItem(RANGE_NUMBER,rangeNumber);
    getMyNumber(rangeNumber);
}

rangeForm.addEventListener("number",setRangeMumber);

function getMyNumber(rangeNumber){

    myNumber.value = Math.floor(Math.random()* rangeNumber);
}


//선택된 값은 범위 설정된 값에 랜덤 적용한 후 소수점 아래 제거
//선택된 값 html로 불러와 화면에 나타내기
//

/***************로컬 스토리지****************/



/*******************************/
/*******************************/