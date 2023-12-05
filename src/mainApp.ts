import { Persona } from './Ej1/ej1';
import { Password } from './Ej2/ej2';
import { Electrodomestico } from './Ej3/Electrodomestico';
import { Lavadora } from './Ej3/Lavadora';
import { Television } from './Ej3/Television';

console.log(' --- EJ1 ---');

const persona1 = new Persona('Juan', 25, '12345678X', 'H', 70, 175);
const persona2 = new Persona('Ana', 30, '98765432Y', 'M', 60, 160);
const persona3 = new Persona('Carlos', 22, '55555555Z', undefined, 75, 180); 

console.log(persona1);
console.log(persona2);
console.log(persona3);

console.log(' --- EJ2 ---');

const passwordPersonalizada = new Password(12);
console.log('Contraseña personalizada:', passwordPersonalizada.getContraseña());

console.log(' --- EJ3 ---');

const listaElectrodomesticos: Electrodomestico[] = new Array(10);

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
  } else if (e instanceof Television) {
    totalTele += precioElect;
  }
}

console.log('Total Electrodomesticos:', totalElectro);
console.log('Total Lavadoras: ', totalLavadoras);
console.log('Total Televisiones: ', totalTele);
