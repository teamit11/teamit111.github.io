alert("welcom to my page")
const dark = document.getElementById("dark")

const body = document.getElementById("body")


dark.addEventListener("click", (eo) => {

body.classList.toggle("dark")

})
var btnTop = document.getElementById("topBtn");

window.onscroll =function (){

    if(document.documentElement.scrollTop > 100){

        btnTop.style.display = "block";
    }
    else{
        btnTop.style.display = "none";
    }
}

btnTop.onclick = function () {

    myFunction();
}

function myFunction() {

    window.scroll({
        top:0,
        left:0,
        behavior:"smooth"
    });
}