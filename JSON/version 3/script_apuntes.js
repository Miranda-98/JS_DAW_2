const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    const peticion=new XMLHttpRequest();
    peticion.open('GET','http://localhost:3000/products');

    //peticion.responseType='json';

    peticion.onload = () => {
        const data = JSON.parse(peticion.response);
        //const data = peticion.response;
        console.log(data);
    };
    peticion.send();
};

const sendData = () => {
    const peticion=new XMLHttpRequest();
    peticion.open('POST','http://localhost:3000/products');

    peticion.setRequestHeader('Content-Type', 'application/json');

    peticion.onload = () => {
        const data = JSON.parse(peticion.response);
        console.log(data);
    };
    peticion.send(JSON.stringify({
        name: "monitor FHD",
        price: 140.99,
        description: "monitor FHD Samsung",
        categoryId: 1
    }));   
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);