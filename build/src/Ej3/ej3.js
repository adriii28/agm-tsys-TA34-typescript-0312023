"use strict";
class Electrodomestico {
    constructor(precio_base = Electrodomestico.PRECIO_BASE_DEFAULT, color = Electrodomestico.COLOR_DEFAULT, consumo_energetico = Electrodomestico.CONSUMO_ENERGETICO_DEFAULT, peso = Electrodomestico.PESO_DEFAULT) {
        this.precio_base = precio_base;
        this.color = this.validarColor(color);
        this.consumo_energetico =
            this.comprobarConsumoEnergetico(consumo_energetico);
        this.peso = peso;
    }
    validarColor(color) {
        const coloresValidos = [
            "blanco",
            "negro",
            "rojo",
            "azul",
            "gris",
        ];
        let colorValido = coloresValidos.find((colorSelected) => colorSelected.toLowerCase() == color.toLowerCase());
        if (colorValido) {
            return colorValido;
        }
        else {
            return Electrodomestico.COLOR_DEFAULT;
        }
    }
    comprobarConsumoEnergetico(letra) {
        const letrasValidas = ["A", "B", "C", "D", "F"];
        let letraValida = letrasValidas.find((letraSelected) => letraSelected.toUpperCase() == letra.toUpperCase());
        if (letraValida) {
            return letraValida;
        }
        else {
            return Electrodomestico.CONSUMO_ENERGETICO_DEFAULT;
        }
    }
    precioFinal() {
        switch (this.consumo_energetico) {
            case "A":
                this.precio_base += 100;
                break;
            case "B":
                this.precio_base += 80;
                break;
            case "C":
                this.precio_base += 60;
                break;
            case "D":
                this.precio_base += 50;
                break;
            case "E":
                this.precio_base += 40;
                break;
            case "F":
                this.precio_base += 10;
                break;
            default:
                break;
        }
        if (0 <= this.peso && this.peso <= 19) {
            this.precio_base += 10;
        }
        else if (20 <= this.peso && this.peso <= 49) {
            this.precio_base += 50;
        }
        else if (50 <= this.peso && this.peso <= 79) {
            this.precio_base += 80;
        }
        else if (this.peso >= 80) {
            this.precio_base += 100;
        }
        return this.precio_base;
    }
    getPrecio() {
        return this.precio_base;
    }
    getColor() {
        return this.color;
    }
    getConsumoEnergetico() {
        return this.consumo_energetico;
    }
    getPeso() {
        return this.peso;
    }
}
Electrodomestico.COLOR_DEFAULT = "Blanco";
Electrodomestico.CONSUMO_ENERGETICO_DEFAULT = "F";
Electrodomestico.PRECIO_BASE_DEFAULT = 100;
Electrodomestico.PESO_DEFAULT = 5;
class Lavadora extends Electrodomestico {
    constructor(carga = Lavadora.CARGA_DEFAULT) {
        super();
        this.carga = carga;
    }
    getCarga() {
        return this.carga;
    }
    precioFinal() {
        const precioFinal = super.precioFinal();
        if (this.carga > 30) {
            precioFinal + 50;
        }
        return precioFinal;
    }
}
Lavadora.CARGA_DEFAULT = 5;
class Television extends Electrodomestico {
    constructor(resolucion = Television.RESOLUCION_DEFAULT, fourK = Television.FOURK_DEFAULT) {
        super();
        this.resolucion = resolucion;
        this.fourK = fourK;
    }
    precioFinal() {
        const precioFinal = super.precioFinal();
        if (this.resolucion > 40) {
            precioFinal * 0.7;
        }
        if (this.fourK) {
            precioFinal + 50;
        }
        return precioFinal;
    }
    getResolucion() {
        return this.resolucion;
    }
    get4k() {
        return this.fourK;
    }
}
Television.RESOLUCION_DEFAULT = 20;
Television.FOURK_DEFAULT = false;
const listaElectrodomesticos = new Array(10);
listaElectrodomesticos[0] = new Electrodomestico();
listaElectrodomesticos[1] = new Electrodomestico();
listaElectrodomesticos[2] = new Electrodomestico();
listaElectrodomesticos[3] = new Lavadora();
listaElectrodomesticos[4] = new Lavadora();
listaElectrodomesticos[5] = new Lavadora();
listaElectrodomesticos[6] = new Television();
listaElectrodomesticos[7] = new Television();
listaElectrodomesticos[8] = new Television();
listaElectrodomesticos[9] = new Television();
let totalElectro = 0;
let totalLavadoras = 0;
let totalTele = 0;
for (const e of listaElectrodomesticos) {
    let precioElect = e.precioFinal();
    totalElectro += precioElect;
    if (e instanceof Lavadora) {
        totalLavadoras += precioElect;
    }
    else if (e instanceof Television) {
        totalTele += precioElect;
    }
}
console.log('Total Electrodomesticos:', totalElectro);
console.log('Total Lavadoras: ', totalLavadoras);
console.log('Total Televisiones: ', totalTele);
