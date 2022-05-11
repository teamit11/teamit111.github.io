window.onload = function() {

    var spinner = document.getElementById("sp");
    document.body.style.overflow = "hidden";

    setTimeout(function(){

        spinner.style.display = "none";
        document.body.style.overflow = "auto";
    }, 3000);
}

/**/

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