const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');


const enviarDatos = () => {
console.log("PEPE");
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

const enviarDatos2 = () => {

    let arrayObjetos = {
        'name': document.getElementById('name2').value,
        'description': document.getElementById('description2').value,
    };

    const peticion = new XMLHttpRequest();
    peticion.open('POST', 'http://localhost:3000/categories');

    peticion.setRequestHeader('Content-Type', 'application/json');

    peticion.onload = () => {
        const data = JSON.parse(peticion.response);
        console.log(data);
    };

    peticion.send(JSON.stringify(arrayObjetos));

};

// boton1.addEventListener('click',enviarDatos);
// boton2.addEventListener('click',enviarDatos2);
boton1.addEventListener('click',()=>{
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
});

boton2.addEventListener('click',()=>{
    let arrayObjetos = {
        'name': document.getElementById('name2').value,
        'description': document.getElementById('description2').value,
    };

    const peticion = new XMLHttpRequest();
    peticion.open('POST', 'http://localhost:3000/categories');

    peticion.setRequestHeader('Content-Type', 'application/json');

    peticion.onload = () => {
        const data = JSON.parse(peticion.response);
        console.log(data);
    };

    peticion.send(JSON.stringify(arrayObjetos));
})