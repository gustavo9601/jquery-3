$(
    function () {


        var btn = $('#btnCambiaColor');
        btn.on('click', function (evento, argumentos) {

            console.log(argumentos);
            //si no recibimos argumentos, cambio el color a pink
            argumentos = argumentos || 'pink';

            var div = $('.contenedorIncial');
            div.css({
                'backgroundColor': argumentos
            });
        });


        //Utilizaremos .trgger(evento, parametros), para simular el evento

        /*
         * elemento.trigger(evento, [posibles argumentos])
         * */
        btn.trigger('click', ['gray']);


    }
);