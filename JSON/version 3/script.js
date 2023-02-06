const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('botonObtener');

// comprobar datos del formulario -> no repetir productos con el mismo nombre, precio y categoria que otro existente

// function obtenerName(param){
//     return new Promise((resolve, reject) => {
//         resolve(param);
//     })
// };

// obtenerName('laptop').then(res=>console.log(res));

// const obtenerNombre2 = n => {
//     return new Promise((resolve, reject) =>{
//         const name = new XMLHttpRequest();
//         name.open('GET', 'http://localhost:3000/products?name='.n);
//         name.send();

//         name.onload = function() {
//             if(name.status == 200) {
//                 resolve(name.response);
//                 resolve('existe el nombre');
//             } else {
//                 reject("no existe");
//             }
//         }
//     })
// }

// const obtenerNombre2 =  new Promise((resolve, reject) => {
//     const name = new XMLHttpRequest();
//     const url = 'http://localhost:3000/products?name=laptop';
//     console.log(url);
//     name.open('GET', url);

//     name.send();

//     name.onload = function() {
//         if(name.status == 200) {
//             console.log('existe el name en obtenerNombre2');
//             resolve(name.response);
//         } else {
//             reject("no existe");
//         }
//     }
// })

let name = document.getElementById('name').value;
let filtro = '?name=' + name;

let precio = document.getElementById('price').value;
let filtro2 = '?price=' + precio;

let categoria = document.getElementById('categoryID').value;
let filtro3 = '?price=' + categoria;

// promesa para comprobar si el nombre del producto existe -> si existe se pasa a comprobar el precio, si no existe se procede a hacer la inserccion
function llamada() {
    obtenerNombre;
}
const obtenerNombre = new Promise((resolve, reject) => {
    const name = new XMLHttpRequest();
    const url = 'http://localhost:3000/products' + filtro;
    console.log(url);
    name.open('GET', url);

    name.send();

    name.onload = function () {
        if (name.status == 200) {

            console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE1');
            resolve(obtenerPrecio);
        } else {
            // console.log("no existe el nombre -> se ingresa");
            alert('pepe');
            reject(enviarDatos);
        }
    }
})

// promesa para comprobar si el precio del producto existe -> si existe se pasa a comprobar la categoriaID, si no existe se procede a hacer la inserccion
const obtenerPrecio = new Promise((resolve, reject) => {
    const name = new XMLHttpRequest();
    const url = 'http://localhost:3000/products' + filtro2;
    console.log(url);
    name.open('GET', url);

    name.send();

    name.onload = function () {
        if (name.status == 200) {
            // console.log('existe el precio');
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
            resolve(enviarDatos);
        } else {
            // console.log("no existe el precio -> se ingresa");
            alert('pepe2');

            reject(enviarDatos);
        }
    }
})

// promesa para comprobar si la categoriaID del producto existe -> si existe se muestra una alerta comunicando que no se realizara la inserccion,
// si no existe se procede a hacer la insercion
const obtenerCategoria = new Promise((resolve, reject) => {
    const name = new XMLHttpRequest();
    const url = 'http://localhost:3000/products' + filtro2;
    console.log(url);
    name.open('GET', url);

    name.send();

    name.onload = function () {
        console.log(name.status);
        if (name.status == 200) {
            console.log("gerardo loquita");
            // console.log('existe la categoria');
            // console.log(name.resolve);
            // resolve(name.resolve);
        } else {
            // console.log("no existe la categoryID -> se ingresa");
            // alert('se ingresa');
            

            reject(enviarDatos);
        }
    }
})

// obtenerNombre
// .then(resolve => {
//     console.log("pepe primera promesa");
//     console.log(resolve);
// })
// .catch(error => {
//     console.log(error);
// })

obtenerNombre
    .then(resolve => {
        console.log("primera promesa (nombre)");
        return resolve;
    })
    .then(mensaje => {
        console.log("segunda promesa (precio)");
        console.log(mensaje);
        return mensaje;
    })
    .then(mensaje2 => {
        console.log("tercera promesa (categoryID)");
        console.log(mensaje2);
        return mensaje2;
    })
    .catch(error => {
        console.log(error);
    })





// parte inserccion de datos del formulario en la 'BD'
const obtenerDatos = () => {
    const peticion = new XMLHttpRequest();
    peticion.open('GET', 'http://localhost:3000/products');

    peticion.onload = () => {
        const data = JSON.parse(peticion.response);
        console.log(data);
        obtenerNombre;
    };
    peticion.send();
};


const enviarDatos = () => {

    let arrayObjetos = {
        'name': document.getElementById('name').value,
        'price': document.getElementById('price').value,
        'description': document.getElementById('description').value,
        'categoryId': document.getElementById('categoryID').value
    };

    const peticion = new XMLHttpRequest();
    peticion.open('POST', 'http://localhost:3000/products');

    peticion.setRequestHeader('Content-Type', 'application/json');

    peticion.onload = () => {
        const data = JSON.parse(peticion.response);
        console.log(data);
    };

    peticion.send(JSON.stringify(arrayObjetos));

};




boton1.addEventListener('click', llamada());
boton3.addEventListener('click', obtenerDatos);