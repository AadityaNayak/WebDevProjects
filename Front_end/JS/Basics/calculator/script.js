let currentScreen = 0;
let currentExpression = 0;

let calcScreen = document.querySelector("#calcScreen");

let allButtons = document.querySelectorAll(".calcButton");


allButtons.forEach((element) => {

    element.addEventListener('mouseover', (event) => {
        event.stopPropagation();
        element.style.cursor = "pointer";
        element.style.color = "rgba(16, 73, 2, 0.699)";
        element.style.fontSize = "1.2rem";
        element.style.fontWeight = "bolder";
    });



    element.addEventListener('mouseout', (event) => {

        event.stopPropagation();
        element.style.color = "black";
        element.style.fontSize = "";
        element.style.fontWeight = "bold";
    })

    element.addEventListener('click', (event) => {
        event.stopPropagation();

        switch (element.innerText) {
            case "AC":
                currentScreen = "";
                currentExpression = "";
                calcScreen.innerText = currentScreen;
                break;
            case "square":

                currentExpression = Math.pow(eval(currentExpression), 2);
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;
                break;
            case "%":
                currentExpression = " " + currentExpression + " " + "%";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;
                break;
            case "/":

                currentExpression = " " + currentExpression + " " + "/";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;
            case "*":

                currentExpression = " " + currentExpression + " " + "*";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;
            case "-":

                currentExpression = currentExpression + " " + "-";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;
            case "+":

                currentExpression = currentExpression + " " + "+";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;
            case "=":

                currentExpression = eval(currentExpression);
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;

            case ".":

                currentExpression = " " + currentExpression + ".";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;
            case "0":
                currentExpression = currentExpression + "0";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;
                break;
            case "1":

                currentExpression = currentExpression + "1";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;
            case "2":

                currentExpression = currentExpression + "2";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;
            case "3":

                currentExpression = currentExpression + "3";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;
            case "4":

                currentExpression = currentExpression + "4";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;
            case "5":

                currentExpression = currentExpression + "5";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;
            case "6":

                currentExpression = currentExpression + "6";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;
                break;
            case "7":

                currentExpression = currentExpression + "7";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;
            case "8":

                currentExpression = currentExpression + "8";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;
            case "9":

                currentExpression = currentExpression + "9";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;

                break;

            default:
                currentExpression = "Error";
                currentScreen = currentExpression;
                calcScreen.innerText = currentScreen;
                break;
        }

    });


})