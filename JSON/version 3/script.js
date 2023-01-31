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

const obtenerNombre2 =  new Promise((resolve, reject) => {
    const name = new XMLHttpRequest();
    const url = 'http://localhost:3000/products?name=laptop';
    console.log(url);
    name.open('GET', url);
    
    name.send();

    name.onload = function() {
        if(name.status == 200) {
            console.log('existe el name en obtenerNombre2');
            resolve(name.response);
        } else {
            reject("no existe");
        }
    }
})

let name = 'pepe';
let filtro = '?name='+name;


const obtenerNombre =  new Promise((resolve, reject) => {
    const name = new XMLHttpRequest();
    const url = 'http://localhost:3000/products'+filtro;
    console.log(url);
    name.open('GET', url);
    
    name.send();

    name.onload = function() {
        if(name.status == 200) {
            resolve('existe el nombre');
            resolve(obtenerPrecio);
        } else {
            reject("no existe");
        }
    }
})

let precio = 100;
let filtro2 = '?price='+precio;

const obtenerPrecio =  new Promise((resolve, reject) => {
    const name = new XMLHttpRequest();
    const url = 'http://localhost:3000/products'+filtro2;
    console.log(url);
    name.open('GET', url);
    
    name.send();

    name.onload = function() {
        if(name.status == 200) {
            resolve('existe el precio');
            resolve(obtenerCategoria);
        } else {
            reject("no existe");
        }
    }
})

let categoria = 1;
let filtro3 = '?price='+categoria;

const obtenerCategoria =  new Promise((resolve, reject) => {
    const name = new XMLHttpRequest();
    const url = 'http://localhost:3000/products'+filtro2;
    console.log(url);
    name.open('GET', url);
    
    name.send();

    name.onload = function() {
        if(name.status == 200) {
            resolve('existe la categoria');
            resolve(name.resolve);
        } else {
            reject("no existe");
        }
    }
})

obtenerNombre2
.then(resolve => {
    console.log("pepe primera promesa");
    console.log(resolve);
})
.catch(error => {
    console.log(error);
})

obtenerNombre
.then(resolve => {
    console.log("primera promesa");
    return resolve;
})
.then(mensaje => {
    console.log("segunda promesa");
    console.log(mensaje);
    return mensaje;
})
.then(mensaje2 => {
    console.log("tercera promesa");
    console.log(mensaje2);
    return mensaje2;
})

.catch(error => {
    console.log(error);
})





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




// boton1.addEventListener('click',enviarDatos);
 boton3.addEventListener('click',obtenerDatos);
