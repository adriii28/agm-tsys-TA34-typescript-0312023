"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;
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
exports.Electrodomestico = Electrodomestico;
Electrodomestico.COLOR_DEFAULT = "Blanco";
Electrodomestico.CONSUMO_ENERGETICO_DEFAULT = "F";
Electrodomestico.PRECIO_BASE_DEFAULT = 100;
Electrodomestico.PESO_DEFAULT = 5;
