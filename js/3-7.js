const h1 = document.querySelector("h1")

/*function handleTitleClick(){
  const clikcked = "active"

    if(h1.classList.contains(clikcked)){ //classLIst는 class를 목록으로 사용할 수 있게 해줌
        h1.classList.remove(clikcked); //className은 이전의 class를 교체해버린다.
    }
    else{h1.classList.add(clikcked);}
  
}*/

function handleTitleClick(){
 

  h1.classList.toggle("active"); //toggle이 위의 기능을 한줄로 처리할 수 있게 해줌
  
}  //단 CSS의 클래스를 그대로 가져와야 한다. (변수 선언 안했기 때문에)

h1.addEventListener("click",handleTitleClick);