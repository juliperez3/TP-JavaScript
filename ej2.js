let a = 2;
let b = 7;
let mayor = (a > b ? a : b);
console.log("El mayor es: " + mayor);

const nroIngresado = prompt('Ingresa un número y te diré si es par o impar');
if (nroIngresado % 2 === 0) {
    console.log("El número ingresado " + nroIngresado + ", es par");
} else {
    console.log("El número ingresado " + nroIngresado + ", es impar");
}