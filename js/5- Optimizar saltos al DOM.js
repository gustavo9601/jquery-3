$(
    function () {

        var lista = $('#lista');
        /*
         Fomra #1 haciendo saltos al dom consecutivamente

         for (var i = 0; i <= 1000; i++) {
         lista.append('<li>' + i + '</li>');
         }*/

        var start = new Date();
        /*Forma numero 2, alistando todo el html y hacer un solo salto al DOM*/
        var datosMostrar = [];
        for (var i = 0; i <= 1000; i++) {
            datosMostrar.push('<li>' + i + '</li>');
        }

        //pasamos todo el arreglo de dastos,
        // join permite mostrar todo una arreglo sin recorrerlos, separado por lo que le pasemos por paratemto
        lista.append(datosMostrar.join(''));

        var end = new Date();
        console.log("Start = " + start.getTime());
        console.log("End = " + end.getTime());
        console.log("Diferencia = " + (end.getTime() - start.getTime()));


        //Haciendo un solo salto a la vez
        var $elementosCargados = $('#lista li');
        for (var j = 0; j <= 500; j++) {
            $elementosCargados.eq(j).remove();
        }
        //hacemos un solo salto a la vez, y apartir de haber guardado esa psocion en memoria, trabajmos elDOM
    }
);
