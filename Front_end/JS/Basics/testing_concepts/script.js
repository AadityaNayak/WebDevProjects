"use strict"

let div_ = document.querySelector("#firstDiv");

div_.style.position = "absolute";
div_.style.top = "1000px";

let fired = false;

window.addEventListener("scroll", () => {
    if (div_.getBoundingClientRect().top < window.innerHeight && fired == false) {
        console.log("Fired");
        fired = true;
    }
})