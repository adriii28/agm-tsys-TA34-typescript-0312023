"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lavadora = void 0;
const Electrodomestico_1 = require("./Electrodomestico");
class Lavadora extends Electrodomestico_1.Electrodomestico {
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
exports.Lavadora = Lavadora;
Lavadora.CARGA_DEFAULT = 5;
