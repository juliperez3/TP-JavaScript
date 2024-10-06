const buttonGuardar = document.getElementById("buttonGuardar");
const buttonEliminar = document.getElementById("buttonEliminar");
const email = document.getElementById("emailInput");
const mostrarCorreo = document.getElementById("mostrarCorreo");

const mostrar = () => {
    const emailGuardado = localStorage.getItem("email"); //obtenemos email ya guardado
    if (emailGuardado) {
        mostrarCorreo.innerHTML = "<p>Correo guardado: " + emailGuardado + "</p";
    } else {
        mostrarCorreo.innerHTML = ''; //limpiar el contenido si no hay correo
    }
}
mostrar();

buttonGuardar.addEventListener("click", () => {
    const email = emailInput.value;
    localStorage.setItem("email", email);   //guardar correo
    mostrar();
});

buttonEliminar.addEventListener("click", () => {
    localStorage.removeItem("email");   //elimina el email de local storage
    mostrar();
});