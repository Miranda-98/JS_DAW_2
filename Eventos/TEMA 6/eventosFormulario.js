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


// ej 7
var select = document.querySelector('select');
select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
    alert(selectedOption.innerHTML);
  });

// ej 8 -----------------------------------------------------------
document.querySelector('input:nth-child(5)')
let añadir = document.querySelector('p:nth-child(6)')
let nuevoParrafo = document.createElement('p');
let valorParrafo1 = document.createTextNode("El elemento ha sido modificado "+ 2 + " veces");
nuevoParrafo.appendChild(valorParrafo1);
añadir.appendChild(nuevoParrafo)

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
            document.querySelector('p > input').value = ' ';
            document.querySelector('p:nth-child(2) > input').value = ' ';
            document.querySelector('p > textarea').value = ' ';
            document.querySelector('select').selectedOptions = ' ';
            document.querySelector("input[name=nacido]").value = ' ';
            document.querySelector('select').value = ' ';
            document.querySelector("input[name=hm]").remove;
            document.querySelector('input[type=checkbox]').removeAttr("checked");

        }
});

// ej 12
