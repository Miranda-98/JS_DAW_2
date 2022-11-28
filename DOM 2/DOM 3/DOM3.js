/*
    Crea los siguientes botones en el HTML:
        1. Cambiar texto de párrafos.
        2. Cambiar clases de párrafos.
        3. Quitar clases de todos los párrafos.
        4. Crear párrafo.
        5. Borrar último.
        6. Borrar primero.
        7. Sustituir texto de primer párrafo.
        8. Crear imagen.
*/
document.getElementById("cambiarTextos").addEventListener("click",cambiarTextos);
document.getElementById("cambiarClases").addEventListener("click",cambiarClases);
document.getElementById("quitarClases").addEventListener("click",quitarClases);
document.getElementById("crearParrafos").addEventListener("click",crearParrafos);
document.getElementById("borrarUltimo").addEventListener("click",borrarUltimo);
document.getElementById("borrarPrimero").addEventListener("click",borrarPrimero);
document.getElementById("sustituirTexto").addEventListener("click",sustituirTexto);
document.getElementById("crearImagen").addEventListener("click",crearImagen);


let e2 = document.querySelectorAll('p');

function cambiarTextos(){
    for (let i = 0; i < e2.length-1; i++) {
        e2[i].textContent = 'Párrafo 1 cambiado';
    }
}

function cambiarClases(){
    for (let i = 0; i < e2.length; i++) {
        e2[i].setAttribute ('class', 'miClase');
    }
}

function quitarClases(){
    for (let i = 0; i < e2.length; i++) {
        e2[i].removeAttribute('class');
    }
}

function crearParrafos(){
    let valor = document.getElementById("texto").value;
    console.log(valor);
    let añadir = document.querySelector('p:last-child');
    let nuevoParrafo = document.createElement('p');
    let valorParrafo1 = document.createTextNode(valor);
    nuevoParrafo.appendChild(valorParrafo1);
    añadir.appendChild(nuevoParrafo);
}

function borrarUltimo(){
   
}

function borrarPrimero(){
    document.querySelector('p').remove();
}

function sustituirTexto() {
    let textoAlternativo = ("alt",prompt("Introduce el texto alternativo"));
    e2[0].textContent = textoAlternativo;
}

function crearImagen(){
    let img = document.createElement('img');
    img.src = 'imagen.png';

    let añadir = document.getElementById('image');
    añadir.appendChild(img);
}