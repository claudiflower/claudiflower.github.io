let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("imageSlideshow");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex-1===0) {
        slides[slideIndex-1].style.display = "block";
        document.getElementById("info").style = "color:#dfa1a6";
        document.getElementById("abt").style = "color:#c28489";
    } else if (slideIndex-1===1) {
        slides[slideIndex-1].style.display = "block";
        document.getElementById("info").style = "color:#777345";
        document.getElementById("abt").style = "color:#e91d28";
    } else if (slideIndex-1===2) {
        slides[slideIndex-1].style.display = "block";
        document.getElementById("info").style = "color:#8fabb9";
        document.getElementById("abt").style = "color:#6e8d99";
    } else if (slideIndex-1===3) {
        slides[slideIndex-1].style.display = "block";
        document.getElementById("info").style = "color:#8fabb9";
        document.getElementById("abt").style = "color:#6e8d99";
    } else if (slideIndex-1===4) {
        slides[slideIndex-1].style.display = "block";
        document.getElementById("info").style = "color:#9eab9e";
        document.getElementById("abt").style = "color:#374646";
    }
    slides[slideIndex-1].style.display = "block";
}