
// === SLIDE SHOW === //
const images = [...document.querySelectorAll(".slider-team-img")];
const slide_Show = () => {

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    firstImg = 0;
    secondImg = 1;
    thirdImg = 2;

    images[firstImg].style.display = "block";
    images[secondImg].style.display = "block";
    images[secondImg].classList.add("img-center");

    images[thirdImg].style.display = "block";

    const arrow_Left = document.querySelector(".arrowLeft").
    addEventListener("click", arrowLeft = (e) => {
        images[firstImg].style.display = "none";
        images[secondImg].style.display = "none";
        images[thirdImg].style.display = "none";

        firstImg--;
        secondImg--;
        thirdImg--;

        if (firstImg === -1) {
            firstImg = images.length - 1;
        }
        if (secondImg === -1) {
            secondImg = images.length - 1;
        }
        if (thirdImg === -1) {
            thirdImg = images.length - 1;
        }

        add_ProperyToImages();
    });

    const arrow_Right = document.querySelector(".arrowRight").
    addEventListener("click", arrowRight = (e) => {
        images[firstImg].style.display = "none";
        images[secondImg].style.display = "none";
        images[thirdImg].style.display = "none";

        firstImg++;
        secondImg++;
        thirdImg++;

        if (firstImg === images.length) {
            firstImg = 0;
        }
        if (secondImg ===  images.length) {
            secondImg = 0;
        }
        if (thirdImg ===  images.length) {
            thirdImg = 0;
        }        

        add_ProperyToImages();
    });

    const add_ProperyToImages = () => {
        images[firstImg].style.display = "block";
        images[firstImg].classList.remove("img-center");

        images[secondImg].style.display = "block";
        images[secondImg].classList.add("img-center");

        images[thirdImg].style.display = "block";
        images[thirdImg].classList.remove("img-center");

        images[firstImg].style.order = "1";
        images[secondImg].style.order = "2";
        images[thirdImg].style.order = "3";
    }
}   

if (window.matchMedia("(min-width: 767.98px)").matches) {
    slide_Show();    
} 
window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 767.98px)").matches) {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "block";
            images[i].classList.remove("img-center");
        }
    } else {
        slide_Show();    
    }
})
