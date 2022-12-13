function click(){
    let b = document.getElementById("button1");
    b.document.click
    //document.getElementById('button1').addEventListener('click',(event)=>{window.alert('clicado boton 1')});
    //document.getElementById('button1').addEventListener('mouseOut',(event)=>{document.getElementById('button1').value='boton1'});
    //document.getElementById('button1').addEventListener('mouseenter',(event)=>{document.getElementById('button1').value='pepe'});

    /*
        let a = document.getElementById('button1')
        a.addEventListener('mouseover',(event)=>{a.value = 'entrando boton 1'})
        a.addEventListener('mouseout',(event)=>{a.value = 'boton 1'})
    */
}

function lanzadorFuncionesSimultaneas() {
    click();
}
window.onload = lanzadorFuncionesSimultaneas;