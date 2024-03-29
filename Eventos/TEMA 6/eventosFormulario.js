/*A partir del HTML proporcionado ("formulario.html"), realiza lo siguiente:
1. Cada vez que el ratón este sobre la imagen auméntala a 60px
    (debe volver a su tamaño original cuando el ratón no esté sobre la imagen).

2. Cuando se haga doble click en el primer párrafo (“Completa el siguiente formulario”),
    cambia el color del texto de la cabecera (h1) a azul.
3. Después de escribir el Nombre y perder el foco en este campo transforma todos los caracteres
     del nombre a mayúsculas.
4. Cuando se complete cada campo de texto, debe poner la etiqueta que le precede de color rojo y
    en negrita. Ejemplo:

5. Después de introducir los apellidos comprueba que no haya introducido algún carácter.
     En caso de haber introducido algún carácter borra el campo Apellidos.
6. Después de introducir el año de nacimiento y cada vez que se cambie este dato, escribe
    (o reescribe en caso de modificarse el año) un texto (añade un DIV o un P al HTML) que
    indique si nació en año bisiesto o no y los años que tiene. Sitúa este texto a continuación
    del Año de nacimiento.
7. Cuando selecciones una nacionalidad muestra una alerta indicando la nacionalidad seleccionada.
8. Al cambiar el valor de algún checkbox o la selección del sexo hacer algo. escribe (o reescribe
    en caso de volver a cambiarlo) un texto (añade un DIV o un P al HTML) que indique cuando
    cambios se han realizado sobre estos elementos. Sitúa este texto antes de Comentarios.
9. Cuando se introduce en el campo Comentarios la letra “w”, se muestra una alerta indicando que
    ha introducido dicha letra. No hará nada si se introducen otros caracteres.
10. Cuando selecciona un texto en el apartado de Comentarios muestra una alerta con el texto
    seleccionado.
11. Cuando hagas click en el botón "Borrar", muestra un mensaje advirtiendo al usuario de que va a
    borrar todo. Pregunta si está seguro, en caso afirmativo resetea o limpia todos los campos,
    en caso contrario no limpies el contenido de los campos.
12. Cuando hagas click en el botón "Enviar", comprueba si ha completado todos los campos de texto.
    En el caso de que falten campos de texto por completar muestra una alerta que indique que no
    se puede enviar. En el caso de estar completos deshabilita el botón “Borrar”.
13. Cuando hagas click, doble click, triple click, etc… en el botón “Click me”, crea un input de
    texto mostrando en él, el número de click que ha realizado sobre el botón “Click me”.
14. Cuando hagas click en cualquier lugar del documento, se mostrará una alerta con el nombre del
    elemento que has clicado (utiliza event.target).
15. Pon un escuchador al BODY para que, al mover el ratón en cualquier punto de la ventana del
    navegador, se muestre en algún sitio (añade un DIV o un P al HTML) la posición del puntero .
    respecto de la página (.screenX / .screenY).
*/



// ej 1
let a = document.querySelector('img');
a.addEventListener('mouseover',(event)=>{a.style.width = 60});
a.addEventListener('mouseout',(event)=>{a.style.width = 39});

// ej 2
let b = document.querySelector('p');
let b2 = document.querySelector('h1');
b.addEventListener('click',(event)=>{let x = event.detail; if(x==2){b2.style.color = 'blue'}});

// ej 3
document.querySelector('p > input').addEventListener('blur',(event)=>{document.querySelector('p > input').value = document.querySelector('p > input').value.toUpperCase();});

// ej 4
document.querySelector('p > input').addEventListener('change',(event)=>
{document.querySelector('p > input').parentElement.style.color = 'red'});

document.querySelector('p:nth-child(2) > input').addEventListener('change',(event)=>
{document.querySelector('p:nth-child(2) > input').parentElement.style.color = 'red'});

document.querySelector('p > textarea').addEventListener('change',(event)=>
{document.querySelector('p > textarea').parentElement.style.color = 'red'});


// ej 5
let ape = document.querySelector('p:nth-child(2) > input');
let espe = '[!"·$%&/()=?¿]';
ape.addEventListener('change',(event)=>{

    console.log(ape.value.includes(espe));
    if((ape.value).match('[!"·$%&/()=?¿Ññ]') ){
    ape.value = ' ';
}});


// ej 6
function bisiesto(año){
    if (año % 400 == 0 || año % 100 == 0 || año % 4 == 0){
        return texto = " Bisiesto";
    } else {
        return texto = " No bisiesto";
    }
}
document.querySelector('[min]').addEventListener('change',(event)=>{
    let h = document.querySelector('p')
    let k = document.createElement('p')
    let l = document.createTextNode('El año es')
    let mensaje = document.createTextNode(bisiesto(document.querySelector('[min]').value));

    k.appendChild(l);
    k.appendChild(mensaje);
    h.appendChild(k);
});


// ej 7
var select = document.querySelector('select');
select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
    alert(selectedOption.innerHTML);
  });

// ej 8 


// ej 9
let comentario = document.querySelector('textarea');
comentario.addEventListener('change',(event)=>{
    if((comentario.value).match('[wW]') ){
        console.log('Se encontro una w');
        alert('Se encontro una letra W');
    }

});

// ej 10
comentario.addEventListener('change',(event)=>{
        alert(this.getSelection());
});

// ej 11
document.querySelector('#button2').addEventListener('click', function(){
        let win = window.confirm("ESTAS SEGURO?");
        if(win == true){
            console.log("pepe");
            let nombre = document.querySelector('p > input').value = ' ';
            let apellido = document.querySelector('p:nth-child(2) > input').value = ' ';
            let nacionalidad = document.querySelector('select').value = document.querySelector('select').options[0]
            let nacimiento = document.querySelector("input[name=nacido]").value = ' ';
            let sexoHombre = document.querySelector('input[name=hm]').checked = false;
            let sexoMujer = document.querySelector('input[name=hm]:nth-child(2)').checked = false
            let deporte1 = document.querySelector('input[type=checkbox]:nth-child(1)').checked = false;
            let deporte2 = document.querySelector('input[type=checkbox]:nth-child(2)').checked = false;
            let deporte3 = document.querySelector('input[type=checkbox]:nth-child(3)').checked = false;
            let comen = document.querySelector('p > textarea').value = ' ';
        }
});

// ej 12
document.querySelector('#button1').addEventListener('click', function camposCompletados(){
    let nombre = document.querySelector('p > input').value.length;
    let apellido = document.querySelector('p:nth-child(2) > input').value.length;
    let nacionalidad = document.querySelector('select').value = document.querySelector('select').options[0];
    let nacionalidad2 = document.querySelector('select').value = document.querySelector('select').options[select.selectedIndex];
    let nacimiento = document.querySelector("input[name=nacido]").value = ' ';
    let sexoHombre = document.querySelector('input[name=hm]').checked;
    let sexoMujer = document.querySelector('input[name=hm]:nth-child(2)').checked;
    let deporte1 = document.querySelector('input[type=checkbox]:nth-child(1)').checked;
    let deporte2 = document.querySelector('input[type=checkbox]:nth-child(2)').checked;
    let deporte3 = document.querySelector('input[type=checkbox]:nth-child(3)').checked;
    let comen = document.querySelector('p > textarea').value.length;

    let sx;
    let dp;

    if(sexoHombre.checked == false && sexoMujer.checked == false){
        sx = false;
    } else {
        sx = true;
    }

    if (deporte1.checked == false && deporte2.checked == false && deporte3.checked){
        dp = false;
    } else {
        dp = true;
    }

    if(nombre != 0 && apellido != 0 && nacionalidad != nacionalidad2 && nacimiento.length != 0 && sx == true && dp == true && comen != 0){
        alert('pepe');
    } else {
        alert('lola');
    }
});

// ej 13 


// ej 14
document.addEventListener('dblclick', (event) => {
    alert(event.target.innerHTML);});

// ej 15 
let input= document.createElement("input");

let input2= document.createElement("label");
let texto = document.createTextNode("Coordenadas");
input2.appendChild(texto);

input.setAttribute("id", "coordenadas");
input.setAttribute("type", "text");


input2.appendChild(input);
input2.appendChild(document.createElement("br"));

let form = document.forms[0];
form.appendChild(input2, form.querySelector("label"));

window.addEventListener('mousemove', (event)=>{
  document.getElementById("coordenadas").value = (event.screenX + '-' + event.screenY);
})