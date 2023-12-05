"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Television = void 0;
const Electrodomestico_1 = require("./Electrodomestico");
class Television extends Electrodomestico_1.Electrodomestico {
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
exports.Television = Television;
Television.RESOLUCION_DEFAULT = 20;
Television.FOURK_DEFAULT = false;
