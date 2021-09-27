const h1 = document.querySelector("h1")

function handleTitleClick(){
  const clikcked = "active"

    if(h1.classList.contains(clikcked)){ //classLIst는 class를 목록으로 사용할 수 있게 해줌
        h1.classList.remove(clikcked); //className은 이전의 class를 교체해버린다.
    }
    else{h1.classList.add(clikcked);}
  
}

h1.addEventListener("click",handleTitleClick);