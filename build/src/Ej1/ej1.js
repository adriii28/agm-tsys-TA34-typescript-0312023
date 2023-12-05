"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre = '', edad = 0, dni, sexo = Persona.DEFAULT_SEXO, peso = 0, altura = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}
exports.Persona = Persona;
Persona.DEFAULT_SEXO = 'H';
