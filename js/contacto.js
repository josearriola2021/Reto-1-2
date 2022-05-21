'use strict';

import { Animal, Persona } from "./persona.js";

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
    

// const numeros = ['1','2','3','4','5'];

// for (let i in numeros){
//     console.log(numeros[i]);
// }

// const promedio = (nota1, nota2, nota3) => {
//     return(nota1 + nota2 + nota3)/3
// }

// console.log(promedio(14,15,16));

// const supervisor = {
//     nombre: 'Jose',
//     apellido: 'Arriola',
//     edad: 26,

//     supervisar: () => {
//         console.log("supervisar");
//     }
// };

// console.log (supervisor.nombre);
// console.log(supervisor);

// const persona1 = new Persona('Jose', 'Arriola', 26);

// // console.log(persona1.iniciar());

// const animal1 = new Animal ('mariposa', 'insecto', '5cm');

// // animal1.ataque('spring');

// const conjunto = [10, 20, 5, 12, 8];

// conjunto.forEach((numero) => {
//     return numero;
// })

const carrito = [
    {nombre: 'Monitor', precio: 900},
    {nombre: 'Laptop', precio: 4100},
    {nombre: 'Mouse', precio: 60},
    {nombre: 'Parlantes', precio: 80},
    {nombre: 'Tablet', precio: 500},
]

const buscador = carrito.filter((elemento) => {
    return (elemento.nombre.includes('t'));
})

console.log(buscador);

// carrito.forEach((elemento) => {
//     console.log(elemento.nombre);
// })

// const nuevoArray = carrito.map((elemento) => {
//     if(elemento.precio>200){
//         return elemento.nombre;
//     }
// })

// console.log(nuevoArray);

// carrito.forEach((elemento) => {
//     if(elemento.precio > 200){
//         console.log(`Producto: ${elemento.nombre}`);
//     }
// })


// const filtrado = () => {
//     const filtroCarrito = carrito.filter((elemento) => elemento.precio>200);
//     filtroCarrito.forEach((elemento) => {
//         console.log(elemento.nombre);
//     })
// }

// filtrado();



// // for (let elemento of carrito) {
// //     if(elemento.precio>200){
// //         console.log(elemento.nombre);
// //     }
// // }

// // const FiltroPrecios = carrito.filter((elemento) => {
// //     return (elemento.precio>=200);
// // })


// // // const numeros = [[0,1,2], [3,4,5], [6,7,8]];

// // // // numeros.forEach((numero) => {
// // // //     for(let i in numero){
// // // //         console.log(numero[i]);
// // // //     }
// // // // })

// // // numeros.forEach((numero) => {
// // //     numero.forEach((elemento) => {
// // //         console.log(elemento);
// // //     })
// // })


