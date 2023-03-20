// PreEntrega 1
// peluqueria canina que calcule precios segun tamaño de mascota

//variables
 let nombre = prompt("Bienvenid@, Por favor ingrese su nombre:");
 let mascota = prompt("Ingrese nombre de su mascota:");
 let edadmascota = Number(prompt("Ingrese edad de su mascota:"));
 let pesomascota = Number(prompt("Ingrese peso de su mascota en kg:"));
 let valor=10000;
 let extra=0;

//Condicional
 if (edadmascota<=1) {
     alert("Estimado "+ nombre + ", su mascota '" + mascota + " es muy pequeño aun para este servicio");
 } else if(edadmascota>1&&edadmascota<3){
     if (pesomascota>10) {
         extra = 10000;
         alert("El valor del servicio sera de: $"+(valor+extra));
     } else {
         alert("El valor del servicio sera de: $"+valor);
     }
 } else if (edadmascota>=3){
     if (pesomascota>=20) {
         extra = 20000;
         alert("El valor del servicio sera de: $"+(valor+extra));
     } else {
         extra = 15000;
         alert("El valor del servicio sera de: $"+(valor+extra));
     }
 }

//ciclo

let opcion = 1;

do {
    opcion = Number(prompt("Ingrese Opcion: \n 1. Ingresar al sistema \n 0. Salir"));
    if (edadmascota<=1) {
        alert("Estimado "+ nombre + ", su mascota '" + mascota + " es muy pequeño aun para este servicio");
    } else if(edadmascota>1&&edadmascota<3){
        if (pesomascota>10) {
            extra = 10000;
            alert("El valor del servicio sera de: $"+(valor+extra));
        } else {
            alert("El valor del servicio sera de: $"+valor);
        }
    } else if (edadmascota>=3){
        if (pesomascota>=20) {
            extra = 20000;
            alert("El valor del servicio sera de: $"+(valor+extra));
        } else {
            extra = 15000;
            alert("El valor del servicio sera de: $"+(valor+extra));
        }
    }
} while (opcion==1);