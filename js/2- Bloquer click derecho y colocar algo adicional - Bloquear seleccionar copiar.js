$(
    function () {

        //detectamos el evento de click derecho, para vissualizar el menu de op
        $(document).on('contextmenu', function (e) {
            e.preventDefault(); //quitamos las opciones por default
            console.log(e);
            //capturamso las posiciones donde se realizo el clik derecho X , Y
            console.log("X =" + e.offsetX + " Y = " + e.offsetY);


            //crearemos un objeto de html
            var div = $('<div>', {
                'class': 'menuContextual',
                'css': {
                    'top': e.offsetY, // Establecemos las porpiedads de X y Y
                    'left': e.offsetX // Establecemos las porpiedads de X y Y
                },
                'animate': {
                    'width': 100,
                    'height': 100
                }
            });
            //hacemos el apen de Div al BODY

            $('.menuContextual').remove(); //quitamos todos los div existente con esa clase
            div.appendTo('body');

        });

        /*Inhabilitando la opcion de copiar en el parramos*/
        $('#copiar').attr("unselectable", "on")
            .css("user-select", "none")
            .on("selectstart", false);


    }
);