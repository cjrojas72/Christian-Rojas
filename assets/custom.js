buttonPos = document.getElementById("main-btns");
navDiv = document.querySelector("nav");

document.body.onload = function () {
  console.log("I am trying to hide");
  navDiv.style.visibility = "hidden";
};

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (buttonPos.offsetTop < window.scrollY) {
    document.querySelector("nav").style.visibility = "visible";
  } else {
    document.querySelector("nav").style.visibility = "hidden";
  }
}
