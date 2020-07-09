// === VERTICAL SLIDER === //
const reviews = [...document.querySelectorAll(".wrapper-slider__reviews")];

const vertical_Slider = () => {

    for (let i = 0; i < reviews.length; i++) {
       reviews[i].style.display = "none";
    }

    firstReview = 0;
    secondReview = 1;

    reviews[firstReview].style.display = "flex";
    reviews[firstReview].style.marginBottom = "25em";
    reviews[secondReview].style.display = "flex";

    const arrow_Down = document.querySelector(".wrapper-slider__arrow--down").
    addEventListener("click", arrowDown = (e) => {
        reviews[firstReview].style.display = "none";
        reviews[secondReview].style.display = "none";

        firstReview--;
        secondReview--;

        if (firstReview === -1) {
            firstReview = reviews.length - 1;
        }
        if (secondReview === -1) {
            secondReview = reviews.length - 1;
        }

        add_ProperyToReviews();
    });
    const arrow_Up = document.querySelector(".wrapper-slider__arrow--up").
    addEventListener("click", arrowUp = (e) => {
        reviews[firstReview].style.display = "none";
        reviews[secondReview].style.display = "none";

        firstReview++;
        secondReview++;

        if (firstReview === reviews.length) {
            firstReview = 0;
        }
        if (secondReview ===  reviews.length) {
            secondReview = 0;
        }

        add_ProperyToReviews();
    });

    const add_ProperyToReviews = () => {
        reviews[firstReview].style.display = "flex";
        reviews[secondReview].style.display = "flex";

        reviews[firstReview].style.order = "0";
        reviews[secondReview].style.order = "1";

        reviews[firstReview].style.marginBottom = "25em";
        reviews[secondReview].style.margin = "0";
    }
}
// === VERTICAL SLIDER === //

if (window.matchMedia("(min-width: 1499.98px)").matches) {
    vertical_Slider();
} 
window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width:1499.98px)").matches) {
        for (let i = 0; i < reviews.length; i++) {
            reviews[i].style.display = "flex";
            reviews[i].style.marginBottom = "0";
        }
    } else {
        vertical_Slider();
    }
})