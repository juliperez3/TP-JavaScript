
let a = 10
while (a!=0) {
    console.log(a);
    a = a - 1;
}

let nroIngresado;
do {
    nroIngresado = prompt('Ingrese un numero mayor a 100') 
} while (nroIngresado < 100);
if (nroIngresado > 100) {
    console.log("Ingresaste un numero mayor a 100: " + nroIngresado);
}