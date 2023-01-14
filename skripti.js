var nav = document.querySelector("nav");
var ham = document.querySelector(".hamburgerButton");

ham.addEventListener("click", toggleHam);

function toggleHam(){    
    nav.classList.toggle("hamburgerList");
}