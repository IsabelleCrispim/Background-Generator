var css = document.querySelector(".css");
var color1 = document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("gradient")

function setGradient () {
    body.style.background = "linear-gradient(to right,"+ color1.value + ","  + color2.value + ")";

    css.textContent = body.style.background + ";"; 
}

color1.addEventListener("input", setGradient ); //necessitamos que a funcao seja chamada todo o tempo do evento input, entao tiramos os parenteses; 

color2.addEventListener("input", setGradient );
    