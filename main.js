//button

let goTopbtn = document.getElementById("goTopbtn");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopbtn.style.display = "flex";
    } else {
        goTopbtn.style.display = "none";
    }
};

// loop

const typed = new Typed('.typed-text', {
  strings: ['Quincha'],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
  showCursor: false
});
