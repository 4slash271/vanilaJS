
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const INITIAL_COLOR = "#2c2c2c";
const saveBtn = document.getElementById("jsSave");

canvas.width = 600;
canvas.height = 600;


ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
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
      ctx.fillStyle = color;
  }

  function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
  }

  function handleModeClick(){
     if(filling === true){//1. filling의 데이터 유형과 true의 데이터 유형이 같고 value가 같으면 다음을 리턴하라.
        //2. 같으면 filling 은 false가 되고 mode는 Fill이 된다 (현재 paint 상태)
       filling = false;
       mode.innerText = "Fill";
     }
     else{ //2.filling !== true 라면(false 상태), filling 은 true로 바뀌고 버튼은 paint로 바뀜(fill 상태)
         filling = true;//filling이 true면 paint
         mode.innerText = "Paint";
        }
  }
  
  function handleCanvasClick(){
    if(filling){
                ctx.fillRect(0, 0, canvas.width, canvas.height);}
}
function handleCM(event){
  event.preventDefault();
}
  
function handleSaveClick(){
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "my_painting"
  link.click();
  console.log(link);
}

//mousedown 마우스 포인터가 포인팅 장치를 누를 때
//mouseup 마우스 포인터가 클릭 상태를 해제할 때
if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);//paint = true;
    canvas.addEventListener("mouseup",stopPainting);//paint = false;
    canvas.addEventListener("mouseleave",stopPainting);//paint = false;
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}
Array.from(colors).forEach(color =>color.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener("input", handleRangeChange);
}
if(mode){
    mode.addEventListener("click",handleModeClick);
}

if(saveBtn){
  saveBtn.addEventListener("click", handleSaveClick);
}