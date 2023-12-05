import { Electrodomestico } from "./Electrodomestico";

export class Television extends Electrodomestico {
    private static readonly RESOLUCION_DEFAULT: number = 20;
    private static readonly FOURK_DEFAULT: boolean = false;
  
    private resolucion: number;
    private fourK: boolean;
  
    constructor(
      resolucion: number = Television.RESOLUCION_DEFAULT,
      fourK: boolean = Television.FOURK_DEFAULT
    ) {
      super();
      this.resolucion = resolucion;
      this.fourK = fourK;
    }
  
    precioFinal(): number {
      const precioFinal = super.precioFinal();
  
      if (this.resolucion > 40) {
        precioFinal * 0.7;
      }
  
      if (this.fourK) {
        precioFinal + 50;
      }
  
      return precioFinal;
    }
  
    getResolucion(): number {
      return this.resolucion;
    }
  
    get4k(): boolean {
      return this.fourK;
    }
  }