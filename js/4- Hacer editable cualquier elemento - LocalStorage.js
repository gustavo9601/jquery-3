//*
// attr('contentEditable', true);
// Esta propiedad hace editable el elemtno pasado por paraemtro
// */


//$('h1').attr('contentEditable', true);
//Hacemos editable El Div y los estilos
$('.contenedorEditable').attr('contentEditable', true);
$('#estiloEditable').attr('contentEditable', true);

//Escuhamos al boton de guardar
$('#GuardarTituloParrafo').on('click', function () {
    var contenidoDiv = $('.contenedorEditable').html();
    console.log(contenidoDiv);
//actualizamos o creamos el Contenedor
    localStorage.setItem('ContenidoEditable', contenidoDiv);

});


var ContenidoLocalStorage = localStorage.getItem('ContenidoEditable');
if (ContenidoLocalStorage != null) {
    $('.contenedorEditable').html(ContenidoLocalStorage);
}



