var num1 = Number(prompt("Dame un número"));
var num2 = Number(prompt("Dame otro número"));
var opera = prompt("Qué operacion quieres hacer?: + , - , * , / , ");

switch(opera){
    case "+":
        var result = num1 + num2 ;
        alert("Has elegido SUMAR y el resultado es" + result);
        break;
    case "-":
        var result = num1 - num2 ;
        alert("Has elegido RESTAR y el resultado es" + result);
        break;
    case "*":
        var result = num1 * num2 ;
        alert("Has elegido MULTIPLICAR y el resultado es" + result);
        break;
    case "/":
        var result = num1 / num2 ;
        if (num2 == 0 || num1 == 0) {
        alert("No puedes dividir un numero por 0");
        break;
    } else {
        alert("Has elegido DIVIDIR y el resultado es" + result);
        break;
    }
    default:
        alert("Es una calculadora básica... dame tiempo *-*")
}