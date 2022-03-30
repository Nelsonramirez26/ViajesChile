//CÓDIGO PARA TOOLTIPS
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//CÓDIGO PARA POPOVER
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


//función ready de JQuery
$(() => {

    //manejar evento submit del formulario de contacto
    $("#contacto form").on("submit", function(e){
        e.preventDefault();
        //let modal = $('#modal-formulario');
        var myModal = new bootstrap.Modal(document.getElementById('modal-formulario'), {
            keyboard: false
          })
          

        let nombre = $('#formulario-nombre').val();
        let asunto = $('#formulario-asunto').val();
        let mensaje = $('#formulario-text-area').val();
        let respuesta = '';

        if(nombre == '' || asunto == '' || mensaje == ''){

            nombre == '' ? respuesta += '<p>* Debe ingresar un nombre</p>' : '';
            asunto == '' ? respuesta += '<p>* Debe ingresar un asunto</p>'  : '';
            mensaje == '' ? respuesta += '<p>* Debe ingresar un mensaje</p>'  : '';
            $("#modal-formulario .modal-body").html(respuesta);
            myModal.toggle();

        }else {
            $("#contacto form")[0].reset();
            respuesta = `<p>Gracias por ponerse en contacto con nosotros <strong>${nombre}</strong>, responderemos a la brevedad.</p>`
            $("#modal-formulario .modal-body").html(respuesta);
            myModal.toggle();
        }


    })

})
