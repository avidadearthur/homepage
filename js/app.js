// Menu Nav functions //
function openNav() {
    if (window.screen.width <= 768) {
        document.getElementById("menu").style.width = "100%";
        document.getElementById("menu-toggle").style.display = "none";
        document.getElementById("header").style.background = 'transparent';
    }
    else{
        document.getElementById("menu").style.width = "80%";
        document.getElementById("menu-txt").style.display = "none";
        document.getElementById("hello").style.color = "yellow";
    }
}

function closeNav() {
    document.getElementById("menu").style.width = "0%";
    document.getElementById("menu-txt").style.display = "block";
    document.getElementById("menu-toggle").style.display = "block";
    document.getElementById("hello").style.color = "black";
    if (window.screen.width <= 768) {
        document.getElementById("header").style.background = 'transparent';
    }
}
// Menu Nav functions //

// Change div width & display preambule functions //
var expandDiv = document.getElementById("preambule");
var shrinkDiv = document.getElementById("hello");

var speed = 5;

function expanding() {
    document.getElementById("preambule-txt").style.display = "none"// hidde preambule text

    var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically
    var scrollAndSpeed = (scrolltop / speed);
    //Expand using transform
    //expandDiv.style.transform = "scalex( " + Math.min(Math.max(scrollAndSpeed, 1), 10) + ")";

    //Or using width
    if (window.screen.width <= 768) {
        expandDiv.style.width = Math.min(Math.max(scrollAndSpeed, 0), 100) + "%";
        shrinkDiv.style.width = 100 - Math.min(Math.max(scrollAndSpeed, 0), 100) + "%";
        if (expandDiv.style.width > "80%" || expandDiv.style.width == "100%" ){
            document.getElementById("preambule-txt").style.display = "block"; // show preambule text
        }
    }
    else{
        expandDiv.style.width = Math.min(Math.max(scrollAndSpeed, 20), 70) + "%";
        shrinkDiv.style.width = 100 - Math.min(Math.max(scrollAndSpeed, 20), 70) + "%";
        if (expandDiv.style.width > "40%"){
            document.getElementById("preambule-txt").style.display = "block"; // show preambule text
        }

    }
}

window.addEventListener('scroll', function() { // on page scroll
    requestAnimationFrame(expanding); // call parallaxing()
}, false);

//Change div width & display preambule functions //
