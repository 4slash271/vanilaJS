const h1 = document.querySelector("h1")

function handleTitleClick(){
    const currentColor = h1.style.color; //currentColor는  getter로 최근 color값을 복사한다.
    let newColor; //setter, 변수에 대입된 값을 최종적으로 h1.style.color에 할당시킴

    if (currentColor === "blue"){
        newColor = "tomato";
    }
    else{ newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click",handleTitleClick);