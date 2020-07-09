// ===  TOGGLE MENU  === //
// const toggle_Menu = () => {
    let menu = document.querySelectorAll(".section-services-statistics");
    let toggle = document.querySelectorAll(".section-services-statistics__wrapper-slider");

    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener("click", () => {
            toggle[i].classList.toggle("show");
        });
    }
// === TOGGLE MENU === //

