"use strict";
const electrodomesticos = new Array(10);
electrodomesticos[0] = new Lavadora();
electrodomesticos[1] = new Television();
electrodomesticos[2] = new Lavadora();
electrodomesticos[3] = new Television();
electrodomesticos[4] = new Electrodomestico();
electrodomesticos[5] = new Lavadora();
electrodomesticos[6] = new Television();
electrodomesticos[7] = new Lavadora();
electrodomesticos[8] = new Television();
electrodomesticos[9] = new Electrodomestico();
let precioTotalElectrodomesticos = 0;
let precioTotalLavadoras = 0;
let precioTotalTelevisiones = 0;
for (const electrodomestico of electrodomesticos) {
    const precioFinalElectrodomestico = electrodomestico.precioFinal();
    precioTotalElectrodomesticos += precioFinalElectrodomestico;
    if (electrodomestico instanceof Lavadora) {
        precioTotalLavadoras += precioFinalElectrodomestico;
    }
    else if (electrodomestico instanceof Television) {
        precioTotalTelevisiones += precioFinalElectrodomestico;
    }
}
console.log(`Precio total de Electrodomésticos: ${precioTotalElectrodomesticos}`);
console.log(`Precio total de Lavadoras: ${precioTotalLavadoras}`);
console.log(`Precio total de Televisiones: ${precioTotalTelevisiones}`);
