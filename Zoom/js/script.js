
let image = document.querySelector(".gallery img");
let width = 200;
let ZoomZoom = true; 

function zoom() {
    if (ZoomZoom) {
        if (width < 500) {
            width += 50;
        } else {
            ZoomZoom = false; 
        }
    } else {
        if (width > 200) {
            width -= 50;
        } else {
            ZoomZoom = true;
        }
    }

    image.style.width = width + "px";
    image.style.height = height + "px";
}
