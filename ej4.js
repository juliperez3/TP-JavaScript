let nro = 5;
const esPar = () => {
    return nro % 2 === 0    //retorna true si cumple condicion, false si no cumple
};
console.log("El número " + nro + " es par: " + esPar(nro))

let c = 30;
const convertirCelsiusAFahrenheit = () => {
    let f = c*1.8+32;
    console.log(c + "°C son equivalentes a " + f + "°F");
}
convertirCelsiusAFahrenheit(c);