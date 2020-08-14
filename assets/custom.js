buttonPos = document.getElementById("main-btns");

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
