import { Electrodomestico } from "./Electrodomestico";

export class Lavadora extends Electrodomestico {
    private static readonly CARGA_DEFAULT: number = 5;
  
    private carga: number;
  
    constructor(carga: number = Lavadora.CARGA_DEFAULT) {
      super();
      this.carga = carga;
    }
  
    getCarga(): number {
      return this.carga;
    }
  
    precioFinal(): number {
      const precioFinal = super.precioFinal();
  
      if (this.carga > 30) {
        precioFinal + 50;
      }
  
      return precioFinal;
    }
  }