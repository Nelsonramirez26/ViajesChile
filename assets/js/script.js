//CÓDIGO PARA TOOLTIPS
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//función ready de JQuery
$(() => {

    //manejar evento submit del formulario de contacto
    $("#contacto form").on("submit", function(e){
        e.preventDefault();
        let nombre = $('#formulario-nombre').val();
        let asunto = $('#formulario-asunto').val();
        let mensaje = $('#formulario-text-area').val();
        let respuesta = '';

        if(nombre == '' || asunto == '' || mensaje == ''){
            nombre == '' ? respuesta += '* Debe ingresar un nombre \n' : '';
            asunto == '' ? respuesta += '* Debe ingresar un asunto \n' : '';
            mensaje == '' ? respuesta += '* Debe ingresar un mensaje \n': '';
            alert(`Se ha generado un error al enviar el formulario, por favor verifique lo siguiente:\n${respuesta}`);
        }else {
            alert(`Gracias por ponerse en contacto con nosotros: ${nombre}\nRecibirá una respuesta pronto.`);
            $("#contacto form")[0].reset();
        }


    })

})
