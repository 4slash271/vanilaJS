const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = 600;
canvas.height = 600;


ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}
function startPainting(){
    painting = true;
}

//ctx.beginPath(); //경로 생성
//ctx.moveTo(x, y); //선 시작 좌표
//ctx.lineTo(x, y); //선 끝 좌표
//ctx.stroke(); //선 그리기

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) { //painting이 false가 아닐 때 (true일 때)
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }

  function handleColorClick(event){
      const color = event.target.style.backgroundColor;
      ctx.strokeStyle = color;
  }

  function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
  }

  function handleModeClick(event){
     if(filling === true){//filling의 데이터 유형과 true의 데이터 유형이 같고 value가 같으면 다음을 리턴하라.
       filling = false;
       mode.innerText = "Fill";// mode button의 Fill 그대로
     }
     else{
         filling = true;//filling이 true면 paint
         mode.innerText = "Paint";}
  }

//mousedown 마우스 포인터가 포인팅 장치를 누를 때
//mouseup 마우스 포인터가 클릭 상태를 해제할 때
if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);//paint = true;
    canvas.addEventListener("mouseup",stopPainting);//paint = false;
    canvas.addEventListener("mouseleave",stopPainting);//paint = false;
}
if(range){
    range.addEventListener("input", handleRangeChange);
}
if(mode){
    mode.addEventListener("click",handleModeClick);
}

Array.from(colors).forEach(color =>color.addEventListener("click", handleColorClick));