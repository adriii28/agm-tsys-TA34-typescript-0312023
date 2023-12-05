"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ej1_1 = require("./Ej1/ej1");
const ej2_1 = require("./Ej2/ej2");
const Electrodomestico_1 = require("./Ej3/Electrodomestico");
const Lavadora_1 = require("./Ej3/Lavadora");
const Television_1 = require("./Ej3/Television");
console.log(' --- EJ1 ---');
const persona1 = new ej1_1.Persona('Juan', 25, '12345678X', 'H', 70, 175);
const persona2 = new ej1_1.Persona('Ana', 30, '98765432Y', 'M', 60, 160);
const persona3 = new ej1_1.Persona('Carlos', 22, '55555555Z', undefined, 75, 180);
console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(' --- EJ2 ---');
const passwordPersonalizada = new ej2_1.Password(12);
console.log('Contraseña personalizada:', passwordPersonalizada.getContraseña());
console.log(' --- EJ3 ---');
const listaElectrodomesticos = new Array(10);
listaElectrodomesticos[0] = new Electrodomestico_1.Electrodomestico();
listaElectrodomesticos[1] = new Electrodomestico_1.Electrodomestico();
listaElectrodomesticos[2] = new Electrodomestico_1.Electrodomestico();
listaElectrodomesticos[3] = new Lavadora_1.Lavadora();
listaElectrodomesticos[4] = new Lavadora_1.Lavadora();
listaElectrodomesticos[5] = new Lavadora_1.Lavadora();
listaElectrodomesticos[6] = new Television_1.Television();
listaElectrodomesticos[7] = new Television_1.Television();
listaElectrodomesticos[8] = new Television_1.Television();
listaElectrodomesticos[9] = new Television_1.Television();
let totalElectro = 0;
let totalLavadoras = 0;
let totalTele = 0;
for (const e of listaElectrodomesticos) {
    let precioElect = e.precioFinal();
    totalElectro += precioElect;
    if (e instanceof Lavadora_1.Lavadora) {
        totalLavadoras += precioElect;
    }
    else if (e instanceof Television_1.Television) {
        totalTele += precioElect;
    }
}
console.log('Total Electrodomesticos:', totalElectro);
console.log('Total Lavadoras: ', totalLavadoras);
console.log('Total Televisiones: ', totalTele);
