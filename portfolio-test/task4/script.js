/* window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("main-nav").style.padding = "10px 10px";
    document.getElementByClassName("logo").style.fontSize = "15px";
  } else {
    document.getElementById("main-nav").style.padding = "10px 10px";
    document.getElementByClassName("logo").style.fontSize = "35px";
  }
} */

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("main-nav").style.fontSize = "16px";
  } else {
    document.getElementById("main-nav").style.fontSize = "24px";
  }
}
