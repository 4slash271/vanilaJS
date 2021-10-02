const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("Hello");
}

// setInterval(sayHello , 5000);   //interval은 매회 일어나는 사건으로 두 개의 인자 필요 sayHello 함수 5초마다 호출 

// setTimeout(sayHello, 5000); //timeout은 한번만 실행한다.


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    
}
getClock();
setInterval(getClock, 1000);