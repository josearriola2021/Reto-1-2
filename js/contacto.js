'use strict';

const enviadoContacto = () => {

    const formId = document.getElementById('formId');

    const limpiarDatos = () => {
        formId.reset();
    }

    const alertaDatosCompletos = () => {Swal.fire({
        icon: 'success',
        title: 'Enviado',
        text: 'Tu consulta ha sido enviada satisfactoriamente',
      })}

    const alertaDatosTelefono = () => {Swal.fire({
        icon: 'warning',
        title: 'Teléfono',
        text: 'El número de teléfono ingresado es incorrecto',
      })}
    

    const validar = (e) => {
        e.preventDefault();

        const formInputTelefono = document.getElementById('formInputTelefono').value;

        if (formInputTelefono.length != parseInt(formInputTelefono).toString().length) {
            alertaDatosTelefono();
        }else{
            alertaDatosCompletos();
            limpiarDatos();
        }
    }

    formId.addEventListener('submit',validar)

}

enviadoContacto();

// const eventoCont = () =>{
//     const formButton = document.getElementById('formButton');
//     const alerta = () => {Swal.fire({
//         title: 'Error!',
//         text: 'Do you want to continue',
//         icon: 'error',
//         confirmButtonText: 'Cool'
//       })}
//     formButton.addEventListener('click',alerta);
// }

// eventoContacto();

// const nombre = 'Jose'
    





