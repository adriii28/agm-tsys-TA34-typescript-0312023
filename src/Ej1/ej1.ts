export class Persona {

    private static readonly DEFAULT_SEXO: string = 'H';

    private nombre: string;
    private edad: number;
    private dni: string;
    private sexo: string;
    private peso: number;
    private altura: number;


    constructor(nombre: string = '', edad: number = 0, dni: string, sexo: string = Persona.DEFAULT_SEXO, peso: number = 0, altura: number = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

}

