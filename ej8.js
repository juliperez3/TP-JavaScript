const lista = document.querySelectorAll('#lista li');
//lista es todos los li del id lista (ul)

lista.forEach(item => {
    item.addEventListener("click", () => {
        console.log(item.textContent);
    });
});

const buttonDeshabilitar = document.getElementById("buttonDeshabilitar");
const buttonHabilitar = document.getElementById("buttonHabilitar");
const campotexto = document.getElementById("campotexto");

buttonDeshabilitar.addEventListener("click", () => {
    campotexto.disabled = true;
})

buttonHabilitar.addEventListener("click", () => {
    campotexto.disabled = false;
})

