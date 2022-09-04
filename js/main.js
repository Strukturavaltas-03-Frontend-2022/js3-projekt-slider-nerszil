const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot1');
const dot3 = document.querySelector('.dot1');

let currentImg = 1;
sliderShow(currentImg);
var timer;
function showImage(n) {
    sliderShow(currentImg += n);
}

function dotclick(n) {
    sliderShow(currentImg = n);
}
sliderShow(n);

function sliderShow(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let navlink = document.getElementsByClassName("navlink");
    if (n > slides.length) { currentImg = 1 }
    if (n < 1) { currentImg = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < navlink.length; i++) {
        navlink[i].className = navlink[i].className.replace(" active", "");
    }
    slides[currentImg - 1].style.display = "block";
    navlink[currentImg - 1].style.display = " active";
    if (timer) clearTimeout(timer)
  timer = setTimeout(showDivs, 8000);
}
  
  
