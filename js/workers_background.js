
function changeBgColor(){
    const color1 = "#" + Math.ceil(Math.random() * 0xffffff).toString(16);
    const color2 = "#" + Math.ceil(Math.random() * 0xffffff).toString(16);
    const color3 = "#" + Math.ceil(Math.random() * 0xffffff).toString(16);
  
   document.body.style.background= `linear-gradient(90deg,${color1},${color2},${color3})`;
};

  window.addEventListener('load',changeBgColor);


  if(document.body.style.background ==""){
    document.body.style.background = "linear-gradient(90deg,#7F88DF,#DCB3D0,#85DBAD)";
  }
  else{
   
  }

