
const button = document.getElementById("button2")
const texto = document.getElementById("texto")

button.addEventListener("click", (e) => {
    e.preventDefault();
    const textoIngresado = texto.value;
    alert("Usted ingresó: " + textoIngresado);
});
