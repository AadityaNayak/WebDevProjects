"use strict"

let heading = document.getElementById("firstDiv");

heading.style.transition = "all 1s";

heading.addEventListener('click', (event) => {
    heading.innerHTML = "<h3>This is heading</h3>"
})