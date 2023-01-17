document.getElementById("añadirImagen").addEventListener("click",añadeImagen);

function añadeImagen(){
    let img = document.createElement('img');
    let srcImagen = prompt("Introduce la direccion de la imagen que quieres subir: ");
    img.src = srcImagen;
    

    let añadir = document.getElementById('pepe');
    añadir.appendChild(img);
    //https://i0.wp.com/hotbook.mx/wp-content/uploads/2019/01/fotosparis_portada.jpg?fit=1024%2C682&ssl=1
}



























// // document.getElementById("añadir").addEventListener("click",crearImagen);
// // function crearImagen(){
// //     let img = document.createElement('img');
// //     let srcImagen = prompt("Introduce la direccion de la imagen que quieres subir: ");
// //     img.src = srcImagen;
    

// //     let añadir = document.getElementById('pepe');
// //     añadir.appendChild(img);
// // }

// //https://i0.wp.com/hotbook.mx/wp-content/uploads/2019/01/fotosparis_portada.jpg?fit=1024%2C682&ssl=1


// // controlador calendario //
// // function calendario(){
//     let fecha = new Date();
//     let dia = fecha.getDate();
//     let mes = fecha.getMonth()+1;
//     let ano = fecha.getFullYear();

//     let fechaActual = ano+"-"+mes+"-"+dia;
// //     return fechaActual;
// // }
// document.getElementById('calendario').setAttribute("max",'2023-01-15');