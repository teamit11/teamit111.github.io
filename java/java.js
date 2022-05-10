const dark = document.getElementById("dark")

const body = document.getElementById("body")


dark.addEventListener("click", (eo) => {

body.classList.toggle("dark")

})

// Menu Bar show and hide //
const navbar =document.getElementById("nav");


document.getElementById("show").onclick = function() {showmenu()};

function showmenu() {
    navbar.style.right = "0";
}


document.getElementById("hide").onclick = function() {hidemenu()};

function hidemenu() {
    navbar.style.right = "-900px";
}
