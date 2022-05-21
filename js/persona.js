export function Persona (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.iniciar = (    ) => {
        return nombre;
    }
}

class Animal {
    
    _nombre;
    _tipo;
    _tamaño;

    constructor (nombre, tipo, tamaño, iniciar){
        this._nombre = nombre;
        this._tipo = tipo;
        this._tamaño = tamaño;

    }

    ataque (ataque){
        return ataque;
    }

}

export {Animal};