let skillSection = document.querySelector("#skillsSection");
let skillPercent = document.querySelectorAll(".skillPercent")

skillPercent.forEach((element) => {

    element.setAttribute("filled", false);

})



function fillBars(element) {

    if (element.getAttribute("filled") == "false") {

        let currentFilled = 0;
        let filling = setInterval(() => {
            if (currentFilled > element.getAttribute("data-bar-width")) {
                clearInterval(filling);
            }
            currentFilled += 5;
            element.style.width = currentFilled + "%";
        }, 50);
        element.setAttribute("filled", "true");
    }

}

function unfillBars(element) {

    if (element.getAttribute("filled") == "true") {
        element.style.width = "0%";
        element.setAttribute("filled", "false");
    }
}


window.addEventListener("scroll", (event) => {

    skillPercent.forEach((element) => {

        if (element.getBoundingClientRect().top < window.innerHeight) {
            fillBars(element);
        } else {
            unfillBars(element);
        }
    })
})