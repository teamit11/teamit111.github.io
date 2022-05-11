const dark = document.getElementById("dark");
const body = document.getElementById("body");
const section = document.querySelectorAll(".s")


dark.addEventListener("click", (eo) => {

body.classList.toggle("dark");

[].forEach.call(section, function(el) {
    el.classList.toggle("s");
});


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