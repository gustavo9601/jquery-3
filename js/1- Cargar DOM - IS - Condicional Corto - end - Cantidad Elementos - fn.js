/*===================================*/
/* 1. FORMAS PARA SABER CUANDO EL DOM ESTA CARGADO */
/*===================================*/

//$(document).ready(/*Codigo*/) //identificar cuando este listo el DOM
//$(/* Codigo*/);
//document.addEventListener('DOMContentLoaded', nombreFuncion(), false);  solo javascript


/*===================================*/
/* 2. CONDICIONAL RESUMIDO */
/*===================================*/

// && logico
// ? :
$('h1').length && $('body').append('Existen H1 =' + $('h1').length);
$('h1').length ? console.log('Existen H1 =' + $('h1').length) : console.log("No existen h1");


/*===================================*/
/* 3. IS -> jquery */
/*===================================*/

var h1 = $('h1');
//is(etiqueta) => devuelve true de ser la etiqueta que s epasa por parametro
h1.is('h1') && $('body').append('<h1>El elemento es H1</h1>');
// ! => negamos el condificonal
// preguntamos a is (si tiene la clase .clase)
!h1.is('.clase') ? $('body').append('<h1>El elemento H1 no tiene la .clase</h1>') : '';
// preguntamos a is => si es visible el emento
h1.is(':visible') && $('body').append('<p>El elemento H1 es visible</p>');
//animamos elemento div
$('.elemento').animate({'width': 200}, 900).end();
$('.elemento').is(':animated') && console.log("Se animo el div.elemento"); //valida si fue animado el eeleento


/*===================================*/
/* 4. TRUCO CONTAR CUANTO ELEMENTOS EN TOTAL HAY EN EL DOM*/
/*===================================*/
var $cantidadElementos = $('*').length;
console.log("Total Elementos de la Pagina = " + $cantidadElementos);


/*===================================*/
/* 5. CREAR UNA FUNCION DE TIPO JQUERY,*/
/*===================================*/
/*
 * $.fn.nombreFuncion = function(){
 * //codigo
 * }
 * */
//funcion que valida si existe o no el emento
$.fn.existeElemento = function () {
    return this.length > 0;  //retorna el elemento que se paso por parameto, si es > 0 TRUE DE LO CONTRARIO false
};

$('h1').existeElemento() && console.log("Si existe el Elemento H1, traido desde la funcion");


/*===================================*/
/* 6. SABER QUE ENLACES SON INTERNOS O EXTERNOS*/
/*===================================*/
/*
 * .hostname = devuelve el enlace externo
 * */
var cantidadLinks = $('ul#listaLinks li a');
console.log(location.hostname); //devolveria el nombre del host/dominio donde estan los archivos
cantidadLinks.each(function () {
    //console.log($(this));
    console.log(this.hostname);
});


/*===================================*/
/* 7. USANDO .end() PARA DISMINUIR LA CANTIDAD DE SALTO AL DOM/

.end(), hace el retorno de busqueda al elemento seleccionado y puede continuar con la siguiente accion
 */
 /*===================================*/
var $desayuno = $('#desayunos');
$desayuno.find('#Huevos').text('Siii').end()
    .find('#Tostadas').text('Siii me gustan').end()
    .find('#Arepas').text('Siii las quiero').end()

