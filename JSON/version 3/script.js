const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('botonObtener');

// comprobar datos del formulario -> no repetir productos con el mismo nombre, precio y categoria que otro existente

// const getDatos = () => {
    const a = fetch("http://localhost:3000/products")
            .then(response=>response.json())
            .then(datos=>console.log(datos));

// }


// boton3.addEventListener('click', getDatos);




const obtenerDatos = () => {
    const peticion = new XMLHttpRequest();
    peticion.open('GET', 'http://localhost:3000/products');

    peticion.onload = () => {
        const data = JSON.parse(peticion.response);
        console.log(data);
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
// boton3.addEventListener('click',enviarDatos);