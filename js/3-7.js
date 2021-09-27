const h1 = document.querySelector("h1")

function handleTitleClick(){
  const clikcked = "active"

    if(h1.className === clikcked){
        h1.className ="";
    }
    else{h1.className =clikcked;}
  
}

h1.addEventListener("click",handleTitleClick);