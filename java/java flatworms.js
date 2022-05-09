var img_content = document.getElementById('box');
var image = ['1','2','3','4','5'];
var i=image.length;


function nextimge(){
   if (i<image.length) {
       i=i+1;
   }else{
     i=1;  
   }
  img_content.innerHTML = "<img src= ../images2/" +image[i-1]+".jpg>";  
    
}

function prewimge(){
   if (i<image.length+1 && i>1) {
       i=i-1;
   }else{
     i=image.length;  
   }
  img_content.innerHTML = "<img src=../images2/"+image[i-1]+".jpg>";  
    
}

/*setInterval( nextimge , 500);*/
nextimge();
prewimge();



/*dark mode*/

const dark = document.getElementById("dark")

const body = document.getElementById("body")


dark.addEventListener("click", (eo) => {

body.classList.toggle("dark")

})