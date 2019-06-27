const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".dropDown");
// console.log(hamburger);
// console.log(dropDown);
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("change");
    dropDown.classList.toggle("hideDropDown");
});

