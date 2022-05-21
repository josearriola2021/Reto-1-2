const funcionGuardar = () => {
    const buttonSave = document.getElementById('buttonSave');
    const tablaRegistro = document.getElementById('tablaRegistro');

    const guardarActividad = () => {
        const actividadText = document.getElementById('actividad-text').value;
        console.log(actividadText);
        tablaRegistro.insertRow(-1).innerHTML = `<td>${actividadText}</td>`
    }

    buttonSave.addEventListener("click", guardarActividad);
}

funcionGuardar();

