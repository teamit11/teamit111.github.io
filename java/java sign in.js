function days(Start, End) {

    "use strict";

    var days;

    document.write("<select>");

    for(days = Start; days <= End; days++){

        document.write("<option value='" + days +"'>" + days + "</option>");
    }

    document.write("</select>");

   
}

days(1,31);




function years(Start, End) {

    "use strict";

    var years;

    document.write("<select>");

    for(years = Start; years <= End; years++){

        document.write("<option value='" + years +"'>" + years + "</option>");
    }

    document.write("</select>");

}

years(1900,2022);


/* spinner*/
window.onload = function() {

    var spinner = document.getElementById("sp");
    document.body.style.overflow = "hidden";

    setTimeout(function(){

        spinner.style.display = "none";
        document.body.style.overflow = "auto";
    }, 3000);
}