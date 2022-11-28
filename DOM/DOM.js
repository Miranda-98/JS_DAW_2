
function ej1() {
    console.log("%c ejercicio 1 apartado a", 'color: #ff0000');

    let a1 = document.getElementById('input2');
    let a2 = document.querySelector('label > #input2');

    console.log("%cforma 1", 'color: #ff00ff');
    console.log(a1);
    console.log("%cforma 2", 'color: #ff00ff');
    console.log(a2);

    console.log("%cejercicio 1 apartado b", 'color: #ff0000');
    console.log("%cforma 1", 'color: #ff00ff');
    const p = document.querySelectorAll('p');
    for (let i = 0; i < p.length; i++) {
        console.log(p[i].textContent);
    }

    console.log("%cforma 2", 'color: #ff00ff');
    for (let i = 0; i < p.length; i++) {
        console.log(p[i].innerHTML);
    }

    console.log("%cejercicio 1 apartado c", 'color: #ff0000');

    console.log("%cforma 1", 'color: #ff00ff');
    const p1 = document.querySelectorAll('#lipsum > p');
    for (let i = 0; i < p1.length; i++) {
        console.log(p1[i].textContent);
    }

    console.log("%cforma 2", 'color: #ff00ff');
    const p2 = document.querySelectorAll('div > p');
    for (let i = 0; i < p2.length; i++) {
        console.log(p2[i].innerHTML);
    }

    console.log("%cejercicio 1 apartado d", 'color: #ff0000');

    console.log("%cforma 1", 'color: #ff00ff');
    console.log(document.querySelector('form').innerHTML);

    console.log("%cforma 2", 'color: #ff00ff');
    console.log(document.querySelector('form').textContent);



    console.log("%cejercicio 1 apartado e", 'color: #ff0000');

    console.log("%cforma 1", 'color: #ff00ff');
    const e1 = document.querySelectorAll('input');
    for (let i = 0; i < e1.length; i++) {
        console.log(e1[i]);
    }


    console.log("%cforma 2", 'color: #ff00ff');
    const e2 = document.querySelectorAll('*|p');
    for (var i = 0; i < e2.length; i++) {
        console.log(p[i]);
    }


    console.log("%cejercicio 1 apartado f", 'color: #ff0000');

    console.log("%cforma 1", 'color: #ff00ff');
    const f1 = document.querySelectorAll('label > input[name=sexo]');
    for (let i = 0; i < f1.length; i++) {
        console.log(f1[i]);
    }

    console.log("%cforma 2", 'color: #ff00ff');
    const f2 = document.querySelectorAll('input[name=sexo]');
    for (let i = 0; i < f2.length; i++) {
        console.log(f2[i]);
    }

    console.log("%cejercicio 1 apartado g", 'color: #ff0000');

    console.log("%cforma 1", 'color: #ff00ff');
    const g1 = document.querySelectorAll('li.important');
    for (let i = 0; i < g1.length; i++) {
        console.log(g1[i].innerHTML);
    }

    console.log("%cforma 2", 'color: #ff00ff');
    const g2 = document.querySelectorAll('ul>li.important');
    for (let i = 0; i < g2.length; i++) {
        console.log(g2[i].innerHTML);
    }

}

function ej2() {
    console.log("%cejercicio 2 apartado a", 'color: #ff0000');

    console.log("%cforma 1", 'color: #ff00ff');
    console.log(document.querySelector('div p').textContent);

    console.log("%cforma 2", 'color: #ff00ff');
    console.log(document.querySelector('div#lipsum p:first-child').textContent);



    console.log("%cejercicio 2 apartado b", 'color: #ff0000');

    console.log("%cforma 1", 'color: #ff00ff');
    console.log(document.querySelector('div#lipsum p:nth-child(2)').textContent);

    console.log("%cforma 2", 'color: #ff00ff');
    console.log(document.querySelector('#lipsum p:nth-child(2)').textContent);


    console.log("%cejercicio 2 apartado c", 'color: #ff0000');

    console.log("%cforma 1", 'color: #ff00ff');
    console.log(document.querySelector('li:last-child').textContent);

    console.log("%cforma 2", 'color: #ff00ff');
    console.log(document.querySelector('li:nth-child(4)').textContent);


    console.log("%cejercicio 2 apartado d", 'color: #ff0000');

    console.log("%cforma 1", 'color: #ff00ff');
    console.log(document.querySelector('label:nth-last-of-type(1)').innerHTML);

    console.log("%cforma 2", 'color: #ff00ff');
    console.log(document.querySelector('form > label:nth-last-of-type(1)').innerHTML);
}

function ej3() {
    console.log("%cejercicio 3 apartado a", 'color: #ff0000');

    console.log("%cforma 1", 'color: #ff00ff');
    console.log(document.querySelector('label:nth-last-of-type(1)').innerHTML);

    console.log("%cforma 2", 'color: #ff00ff');
    console.log(document.querySelector('form > label:nth-last-of-type(1)').innerHTML);



    console.log("%cejercicio 3 apartado b", 'color: #ff0000');

    console.log("%cforma 1", 'color: #ff00ff');
    console.log(document.querySelector('label:nth-last-of-type(1)').textContent);

    console.log("%cforma 2", 'color: #ff00ff');
    console.log(document.querySelector('form > label:nth-last-of-type(1)').textContent);



    console.log("%cejercicio 3 apartado c", 'color: #ff0000');

    console.log("%cforma 1", 'color: #ff00ff');
    console.log(document.querySelector('label > input[value=H]').value);

    console.log("%cforma 2", 'color: #ff00ff');
    console.log(document.querySelector('form > label:nth-last-of-type(1) > input[value=H]').value);


}

function lanzadorFuncionesSimultaneas() {
    ej1();
    ej2();
    ej3();
}
window.onload = lanzadorFuncionesSimultaneas;


