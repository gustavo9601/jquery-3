(function () {
        var btn1 = $('#btn1');
        var btn2 = $('#btn2');
        var btn3 = $('#btn3');
        var btn4 = $('#btn4');


//Podemos pasar una fucion que retorne un dato propio de javascript
        btn1.on('click', Math.round(Math.random() * 100), function (e) {
            //recibimos el dato e, y accedemos a la inforacion e.data
            console.log("Lo que tengo por parametro es =" + e.data);
        });


//Se puede añadir a un listener Varios eventos, por fucion a ejecutar
        btn2.on('mouseenter mouseleave', function () {
            console.log("Salgo y entro al btn 2");
        });


//Podemos colocar un namespace, a los eventos para este caso => click.TEMP
        btn3.on('click.temp', function () {
            alert("Oprimiste el BTN 3");
        });


        btn4.on('click', function () {
            console.clear(); //limpiamos consola

            /*
             * Seleccionaremos todos los botones
             * Apagaremos los eventos a los que tengan el namespace .TEMP
             * */
            $('button').off('.temp');
            console.log("Se desabilitaron los botones con Namespace .TEMP");
        })
    })();


/*
*
* Encerrando y protegiendo mi codigo de otras libresias
*
* (
*
* function(){
*
* //Codigo
* }
* )();  //ejecuta la funcion anonima
*
* */
