

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");
const superEventHandler = {
  mouseOver: function mouseOver() {
    title.style.color = colors[0];
    title.innerText = "The mouse is here!";
  },

  mouseLeave: function mouseLeave() {
    title.style.color = colors[1];
    title.innerText = "The mouse is gone!";
  },

  mouseClickRight: function mouseClickRight() {
    title.style.color = colors[2];
    title.innerText = "That was a right click!";
  },

  windowResize: function windowResize() {
    title.style.color = colors[3];
    title.innerText = "You just resized!";
  }
};

title.addEventListener("mouseenter", superEventHandler.mouseOver);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("contextmenu", superEventHandler.mouseClickRight);
window.addEventListener("resize", superEventHandler.windowResize);
