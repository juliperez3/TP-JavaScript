let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let producto = [];

for(let i=0; i<numeros.length; i++){
    producto[i] = numeros[i] * 2;
}
console.log("Números originales: " + numeros);
console.log("Números multiplicados por 2: " + producto);


let pares = [];
for(let i=1; i<21; i++){
    if(i%2 === 0){
        pares.push(i);  //agrega el número par al arreglo
    }
}
console.log("Primeros 10 números pares: " + pares);