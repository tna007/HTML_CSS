let burgerMenu = document.getElementById("burger");
let nav = document.querySelector(".links");
let toTopBtn = document.querySelector(".toTop");

burgerMenu.addEventListener("click", () => {
  event.preventDefault();
  nav.classList.toggle("active");
});

const toTop = () => {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    toTopBtn.style.bottom = "20px";
  } else {
    toTopBtn.style.bottom = "-50px";
  }
};
document.addEventListener("scroll", toTop);
/*window.onscroll = function () {
  scrollFunction();
};

 function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("links").style.fontSize = "16px";
  } else {
    document.getElementsByClassName("links").style.fontSize = "24px";
  }
} */
