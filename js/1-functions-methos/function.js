"use strict";

//Crear function

//Function con Parametros (numero1, numero2) = parametros

/*function calculadora(numero1, numero2) {

    console.log('Suma es:' + (numero1 + numero2));
    console.log('Resta es:' + (numero1 - numero2));
    console.log('Multiplicacion es:' + (numero1 * numero2));
    console.log('Division es:' + (numero1 / numero2));

    return "Hola soy una calculadora en JavaScript";
}

/* //iteracion 
for(let i = 1; i <= 10; i++) {

    calculadora(i, 8); //Operaciones todos por 8
}
*/

/*calculadora(1, 4);
console.log(calculadora())*/

//Function con Parametros Opciones

/*function calculadora(numero1, numero2, mostrar = true) {
  //mostrar por defecto false) {
  if (mostrar == false) {
    console.log("Suma es:" + (numero1 + numero2));
    console.log("Resta es:" + (numero1 - numero2));
    console.log("Multiplicacion es:" + numero1 * numero2);
    console.log("Division es:" + numero1 / numero2);
  }else{
    document.write("Suma es:" + (numero1 + numero2));
    document.write("Resta es:" + (numero1 - numero2));
    document.write("Multiplicacion es:" + (numero1 * numero2)); //muestra el resultado en el documento html
    document.write("Division es:" + numero1 / numero2);
  }
}

calculadora(1, 4);*/

//Functions dentro de otra function

/*function porConsola(numero1, numero2) {
    console.log("Suma es:" + (numero1 + numero2));
    console.log("Resta es:" + (numero1 - numero2));
    console.log("Multiplicacion es:" + numero1 * numero2);
    console.log("Division es:" + numero1 / numero2);
}

function porPantalla(numero1, numero2){
    document.write("Suma es:" + (numero1 + numero2));
    document.write("Resta es:" + (numero1 - numero2));
    document.write("Multiplicacion es:" + (numero1 * numero2)); //muestra el resultado en el documento html
    document.write("Division es:" + numero1 / numero2);
}

function calculadora(numero1, numero2, mostrar = false) {
    if(mostrar ==false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
}

calculadora(10, 20);*/

//Parametros rest(resto) y spread

/*function listadoFrutas(fruta1, fruta2, ...restosFrutas) { //(...restosFrutas) se muestra como un array

    console.log("Fruta 1:",  fruta1 ); //con (,) tienes espacios, con (+) no tiene espacios
    console.log("Fruta 2:",  fruta2 );
    console.log("Restos de las frutas", restosFrutas);

}

listadoFrutas("Pera", "Manzana", "Sandia", "Pera", "Piña", "Melon"); // Esto se llama rest

var frutas = ["Pera", "Manzana"]; // Esto es un Array

listadoFrutas(...frutas, "Sandia", "Pera", "Piña", "Melon"); //Esto es lo que se le llama Metodo SPREAD, se llama con (...) primero y luego el parametro (restofrutas)*/

//Funciones anonimas y callbacks
// Funcion anonimas son que no tiene nombre

/*var pelicula = function (nombre) {
    return "La pelicula es" + nombre;
} */

//Funciones Callbacks

// sumayMuestra y sumaPorDos son parametros, se le asigna una function anonima
//function(dato) es una funcion de callback

/*function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var suma = numero1 + numero2;

    sumaYmuestra(suma);
    sumaPorDos(suma);
    
    return suma;
}

sumame(5, 7, function(dato) {
    console.log("La Suma es:", dato);
},
function(dato){
    console.log("La Suma por Dos es:", (dato*2));
});*/

/*function calculadora(numero1, numero2, sumarYmostrar, sumarYDividir, sumarYMultiplicar){
    
    var sumar = numero1 + numero2;
    var multiplicar = numero1 * numero2;
    var dividir = numero2/numero1;

    sumarYmostrar(sumar);
    sumarYDividir(dividir);
    sumarYMultiplicar(multiplicar)

}

calculadora(5, 6, function(dato) {
    console.log("La suma es", dato);
},
function(dato) {
    console.log("La Division es:", (dato));
},
function(dato) {
    console.log("La Multiplicacion es:", (dato*2));
});
*/

//Funciones flecha

//Definir una function con flecha. 
/*
function calculadora(numero1, numero2, sumarYmostrar, sumarYDividir, sumarYMultiplicar){
    
    var sumar = numero1 + numero2;
    var multiplicar = numero1 * numero2;
    var dividir = numero2/numero1;

    sumarYmostrar(sumar);
    sumarYDividir(dividir);
    sumarYMultiplicar(multiplicar)

}

calculadora(5, 6, dato => {
    console.log("La suma es", dato);
},
(dato) => {
    console.log("La Division es:", dato);
},
(dato) => {
    console.log("La Multiplicacion es:", dato*2);
});
*/
//Ambito de las variables

/*function holaMundo(texto) {
    console.log(texto);
}

var texto = "Hola mundo, soy una variable global";
holaMundo(texto);
*/
//Metodos para procesar textos

//Transformacion de Textos (cadenas)

/*
var numero = 444;
var texto1 = "Bienvenido al Curso de JavaScript";
var texto2 = "Es muy bueno";

numero.toString();

var dato = numero.toString(); // Metodo para convertir a String
var dato1 = texto1.toLowerCase(); //Metodo para convertir en Minisculas
var dato2 = texto2.toUpperCase(); //Metodo para convenir en Mayusculas 

var nombre = "Gabriel";

console.log(texto1.length); //Metodo para obtener la longitud de la variable, opera con variables string

console.log(numero.toString());
console.log(dato, dato1, dato2);

var textototal = texto2.concat(" " +texto1 ); // Metodo para concatenar o unir varios textos.

console.log(textototal);

*/
//Metodos de Busquedas

var numero = 444;
var texto1 = "Bienvenido al Curso de JavaScript";
var texto2 = "Es muy buen Curso";

var busqueda1 = texto1.indexOf("Curso"); // Metodo de  busqueda numero 1
var busqueda2 = texto1.lastIndexOf("Curso"); //Metodo de  busqueda numero 2
var busqueda3 = texto1.search("Curso"); // Metodo de  busqueda numero 3

var busqueda4 = texto1.match("Curso"); // Metodo de busqueda numero 4 tipo Array
var busqueda5 = texto1.match(/curso/gi); // Metodo de busqueda numero 4 tipo Array, Busqueda General
console.log(busqueda4);

//Funciones de Reemplazo

//Plantillas de extos en JavaScript
