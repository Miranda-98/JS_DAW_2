
    // recoger datos del formulario
    let boton = document.getElementById('mostrarContraseña');
    boton.addEventListener('click',()=>{
        var pass, check;

        pass=document.getElementById("contraseña");
        check=document.getElementById("mostrarContraseña");

        if(check.checked==true) 
        {
            pass.type = "text";
        }
        else 
        {
        pass.type = "password";
        }
    });



    // insertar datos
   
    //     document.getElementById('enviar').addEventListener('click',()=>{
    //     let fechaActual = new Date();
    //     let arrayObjetos = {
    //         'email': document.getElementById('correo').value,
    //         'date': fechaActual.toLocaleDateString()+', '+fechaActual.toLocaleTimeString()
    //     };
    
    //     const peticion = new XMLHttpRequest();
    //     peticion.open('POST', 'http://localhost:3000/access');
    
    //     peticion.setRequestHeader('Content-Type', 'application/json');
    
    //     peticion.onload = () => {
    //         const data = JSON.parse(peticion.response);
    //         console.log(data);
    //     };
    //     peticion.send(JSON.stringify(arrayObjetos));
    // });
    
   
    function comprobarCampos() {
        let aux = '';
        let valorNombre = document.getElementById('correo').value;
        let valorContraseña = document.getElementById('contraseña').value;


        if(valorNombre != '')
            aux += 'email=' + valorNombre;
        
        if(valorContraseña != '')
            aux += '&pass='+valorContraseña;

        
        

        console.log('aux -> '+aux);
        return aux;

    }
   
    let busqueda = comprobarCampos();
    console.log('busqueda -> '+busqueda);

    let SERVER = 'http://localhost:3000/users?';
    let tbody = document.querySelector('tbody');

    
    window.addEventListener('load', function() {
    document.getElementById('Formulario').addEventListener('submit', (event) => {
        event.preventDefault();
        
        // getPosts(comprobarCampos())
        //     .then(function(){
        //         let win = window.open("", "anotherWindow", "width=500,height=200");
        //         let fechaActual = new Date();
        //         win.document.writeln('Bienvenida o bienvenido<br/>');
        //         win.document.writeln('Fecha actual: '+fechaActual.toLocaleDateString()+', '+fechaActual.toLocaleTimeString());
        //     }
                
        //     )
        //     .catch(function(error) {
        //             console.error(error)
        //             })
        getPosts(comprobarCampos())
            .then(function(posts) {
            tbody.innerHTML = ''; // borramos el contenido de la tabla
            posts.forEach(post => {
                const newPost = document.createElement('tr')
                newPost.innerHTML = `
                    <td>${post.correo}</td>
                    <td>${post.contraseña}</td>`
                tbody.appendChild(newPost)
                // let win = window.open("", "anotherWindow", "width=500,height=200");
                // let fechaActual = new Date();
                // win.document.writeln('Bienvenida o bienvenido<br/>');
                // win.document.writeln('Fecha actual: '+fechaActual.toLocaleDateString()+', '+fechaActual.toLocaleTimeString());
                
            })
            //document.getElementById('num-posts').textContent = posts.length
            })
            .catch(function(error) {
                console.error(error)
                
            })
        
    })
    })

    let a = comprobarCampos();
    function getPosts(a) {
    return new Promise(function(resolve, reject) {
        let peticion = new XMLHttpRequest()
        peticion.open('GET', SERVER + a)
        console.log('pepe busca'+SERVER+ a );
        peticion.send();
        peticion.addEventListener('load', () => {
        if (peticion.status === 200) {
            let win = window.open("", "anotherWindow", "width=500,height=200");
                let fechaActual = new Date();
                win.document.writeln('Bienvenida o bienvenido<br/>');
                win.document.writeln('Fecha actual: '+fechaActual.toLocaleDateString()+', '+fechaActual.toLocaleTimeString());
            // let fechaActual = new Date();
            let arrayObjetos = {
                'email': document.getElementById('correo').value,
                'date': fechaActual.toLocaleDateString()+', '+fechaActual.toLocaleTimeString()
            };
        
            const peticion = new XMLHttpRequest();
            peticion.open('POST', 'http://localhost:3000/access');
        
            peticion.setRequestHeader('Content-Type', 'application/json');
        
            peticion.onload = () => {
                const data = JSON.parse(peticion.response);
                console.log(data);
            };
            peticion.send(JSON.stringify(arrayObjetos));
            resolve(JSON.parse(peticion.responseText))
            console.log('no pepe');
        } else {
            alert('usuario y/o contraseña no válidos');
            console.log('pepe');
            reject("Error " + this.status + " (" + this.statusText + ") en la petición")
        }
        })
        peticion.addEventListener('error', () => reject('Error en la petición HTTP'))
    })
    }




