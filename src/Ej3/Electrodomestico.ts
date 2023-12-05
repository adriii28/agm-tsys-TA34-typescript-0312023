export class Electrodomestico {
  private static readonly COLOR_DEFAULT: string = "Blanco";
  private static readonly CONSUMO_ENERGETICO_DEFAULT: string = "F";
  private static readonly PRECIO_BASE_DEFAULT: number = 100;
  private static readonly PESO_DEFAULT: number = 5;

  precio_base: number;
  color: string;
  consumo_energetico: string;
  peso: number;

  constructor(
    precio_base: number = Electrodomestico.PRECIO_BASE_DEFAULT,
    color: string = Electrodomestico.COLOR_DEFAULT,
    consumo_energetico: string = Electrodomestico.CONSUMO_ENERGETICO_DEFAULT,
    peso: number = Electrodomestico.PESO_DEFAULT
  ) {
    this.precio_base = precio_base;
    this.color = this.validarColor(color);
    this.consumo_energetico =
      this.comprobarConsumoEnergetico(consumo_energetico);
    this.peso = peso;
  }

  validarColor(color: string): string {
    const coloresValidos: string[] = [
      "blanco",
      "negro",
      "rojo",
      "azul",
      "gris",
    ];

    let colorValido = coloresValidos.find(
      (colorSelected) => colorSelected.toLowerCase() == color.toLowerCase()
    );

    if (colorValido) {
      return colorValido;
    } else {
      return Electrodomestico.COLOR_DEFAULT;
    }
  }

  comprobarConsumoEnergetico(letra: string): string {
    const letrasValidas: string[] = ["A", "B", "C", "D", "F"];
    let letraValida = letrasValidas.find(
      (letraSelected) => letraSelected.toUpperCase() == letra.toUpperCase()
    );
    if (letraValida) {
      return letraValida;
    } else {
      return Electrodomestico.CONSUMO_ENERGETICO_DEFAULT;
    }
  }

  precioFinal(): number {
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
    } else if (20 <= this.peso && this.peso <= 49) {
      this.precio_base += 50;
    } else if (50 <= this.peso && this.peso <= 79) {
      this.precio_base += 80;
    } else if (this.peso >= 80) {
      this.precio_base += 100;
    }

    return this.precio_base;
  }

  getPrecio(): number {
    return this.precio_base;
  }

  getColor(): string {
    return this.color;
  }

  getConsumoEnergetico(): string {
    return this.consumo_energetico;
  }

  getPeso(): number {
    return this.peso;
  }
}





