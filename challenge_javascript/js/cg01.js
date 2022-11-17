// The mouse is here!
// The mouse is gone!
// You just resized!
// That was a right click!

const title = document.querySelector(".hello:first-child h1");

title.innerText = "Hello!";

function mouseCenterTitle() {
  title.style.color = "blue";
  title.innerText = "The mouse is here!";
}

function mouseLeaveTitle() {
  title.style.color = "aqua";
  title.innerText = "The mouse is gone!";
}

function mouseRightClick() {
  title.style.color = "red";
  title.innerText = "That was a right click!";
  document.title = "Change Title";
}

function resizedViewport() {
  document.body.style.backgroundColor = "black";
  title.style.color = "purple";
  title.innerText = "You just resized!";
}

title.addEventListener("mouseenter", mouseCenterTitle);
title.addEventListener("mouseleave", mouseLeaveTitle);
window.addEventListener("resize", resizedViewport);
window.addEventListener("contextmenu", mouseRightClick);
