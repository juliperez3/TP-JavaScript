let persona = {
    nombre: "Juliana",
    edad: 21,
    ciudad:"Mendoza",
    
    cambiarCiudad(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};
console.log("Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);
persona.cambiarCiudad("Buenos Aires");
console.log("Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);


let libro = {
    titulo: "Heartsong",
    autor: "T.J. Klune",
    año:"2021",

    libroviejo: function() {
        let añoActual = 2024
        let añoPublicacion = añoActual - this.año
        return añoPublicacion > 10;   //retorna true si cumple y false si no
    }
};
console.log("Título: " + libro.titulo + ", Autor: " + libro.autor + ", Año: " + libro.año);
let esViejo = libro.libroviejo();     //se debe declarar
console.log("El libro " + libro.titulo + " es antiguo: " + esViejo);
