/*========================*/
/*DELEFACION DE EVENTOS
 *
 * Seleccioanos al documet completo, y le pasamos la condificon a escuchar o cactivar el evento
 * */
/*========================*/


$(document).on('click', '#pruebas', function () {
    console.log("Este mensaje aparece, gracias a la delegacion de eventos")
});


var listaItem = $('#listaItem');

//Delegacion de eventos
/*Selecciamos al padre mayor,
 * Escuchamos el evento click
 * Pero Aplicado solo a los LI
 *
 * De esta forma, todos los li creados depues de cargar el documento, seran escuchados tambien
 * */
var contador = 0;
$(listaItem).on('click', 'li', function () {
    $(this).remove();
    contador++
    listaItem.append('<li>itemNuevo-' + contador + '</li>');
});



/*con elemento.one()   //ejecutamos una sola vez el eento*/
var btnEjecutaUnaVez = $('#btnUnaVez');
btnEjecutaUnaVez.one('click',function(){
   alert("Esta alerta solo se mostrara una vez :D");
});