const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("Hello");
}

// setInterval(sayHello , 5000);   //interval은 매회 일어나는 사건으로 두 개의 인자 필요 sayHello 함수 5초마다 호출 

// setTimeout(sayHello, 5000); //timeout은 한번만 실행한다.


function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}
getClock();
setInterval(getClock, 1000);