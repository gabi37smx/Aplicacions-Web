 
function ponerRojo() {
    document.getElementById("rojo").style.backgroundColor = "red";
    document.getElementById("amarillo").style.backgroundColor = "grey";
    document.getElementById("verde").style.backgroundColor = "grey";
    document.getElementById("titulo").innerHTML = "LUZ ROJA";
}
function ponerAmarillo () {
   
    document.getElementById("amarillo").style.backgroundColor = "yellow";
    document.getElementById("verde").style.backgroundColor = "grey";
    document.getElementById("rojo").style.backgroundColor = "grey";
    document.getElementById("titulo").innerHTML = "LUZ AMARILLA";
}
function ponerVerde () {
    document.getElementById("verde").style.backgroundColor = "green";
    document.getElementById("rojo").style.backgroundColor = "grey";
    document.getElementById("amarillo").style.backgroundColor = "grey";
    document.getElementById("titulo").innerHTML = "LUZ VERDE";
}
function apagar () {
    document.getElementById("rojo").style.backgroundColor = "grey";
    document.getElementById("amarillo").style.backgroundColor = "grey";
    document.getElementById("verde").style.backgroundColor = "grey";
    document.getElementById("titulo").innerHTML = "LUZ APAGADA";
}   