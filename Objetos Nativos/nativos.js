/* 1. Crea dos variables fecNac1 y fecNac2 que contengan tu fecha de nacimiento. 
    La primera la creas pasándole una cadena y la segunda pasándole año, mes y día. 
    La información será proporcionada por el usuario.
    2. Usando la variable fecNac1 del ejercicio anterior: 
    •	Muestra el día de la semana en que naciste.                                                   
    •	Modifica fecNac1 para que contenga la fecha de tu cumpleaños de este año (cambia sólo el año).
    •	Muestra el día de la semana de tu cumpleaños de este año.
    •	Calcula el nº de días que han pasado desde que naciste hasta hoy.

    3. Muestra en al menos 5 formatos distintos la fecha y la hora de hoy.
    4. Comprueba si es mayor tu fecha de nacimiento o el 1 de enero de este año
*/
let fecNac1 = new Date("1998-08-24");
let fecNac2 = new Date(1998-08-24);
let fecComparar = new Date(2022-01-01);

let diaNacimiento = fecNac1.getDate();
let añoMas1 = fecNac1.getFullYear(fecNac1.setFullYear(2022));
fecNac1.getFullYear(fecNac1.setFullYear(1998));
let fechaActual = new Date();
let añoActual = fechaActual.getFullYear();
let mesActual = fechaActual.getMonth();
let diaActual = fechaActual.getDate();

let difAños = añoActual - fecNac1.getFullYear();
let difMeses = mesActual - fecNac1.getMonth();
let difDias = diaActual - fecNac1.getDate();

let diasVida = (difAños*365) + (difMeses*30) + (difDias);


function semanal (dia){
    if (dia == 1){
        return ('lunes');
    } else if(dia == 2){
        return ('martes');
    } else if(dia == 3){
        return ('miercoles');
    } else if(dia == 4){
        return ('jueves');
    } else if(dia == 5){
        return ('viernes');
    } else if(dia == 6){
        return ('sabado');
    } else {
        return ('domingo');
    }
}

function fechaMayor(fecha1, fecha2){
    if(fecha1.getFullYear() > fecha2.getFullYear()){
        return "Tu fecha de nacimiento es mayor";
    } else if (fecha1.getFullYear() == fecha2.getFullYear()) {
        if(fecha1.getMonth() > fecha2.getMonth()){
            return "Tu fecha de nacimiento es mayor";
        } else if(fecha1.getMonth() == fecha2.getMonth()){
            if (fecha1.getDate() > fecha2.getDate()){
                return "Tu fecha de nacimiento es mayor";
            } else {
                return "1 de enero es mayor";
            }
        }
    } else {
        return "1 de enero es mayor";
    }
    console.log(fecha1.getDate());
    console.log(fecha2.getDate());
}

 
document.write("Dia nacimiento: "+diaNacimiento+"<br/>");
document.write("Año nacimiento +1: "+añoMas1+"<br/>");
document.write("Naciste hace "+diasVida+" dias"+"<br/>");
document.write("Día semana naciste: ");
document.write(semanal(fecNac1.getDate()));

document.write("<br/> 5 FORMAS DE MOSTRAR UNA FECHA <br/>");
let f1 = new Date("2022-12-21");
let f2 = new Date("2022/12/21");
let f3 = new Date("December 21,2022");
let f4 = new Date("Dec-21-2022");
let f5 = new Date("21-Dec-2022");

document.write(f1+"<br/>");
document.write(f2+"<br/>");
document.write(f3+"<br/>");
document.write(f4+"<br/>");
document.write(f5+"<br/>");

document.write("<br/> ¿QUE FECHA ES MAYOR? <br/>");
document.write(fechaMayor(fecNac1, fecComparar));