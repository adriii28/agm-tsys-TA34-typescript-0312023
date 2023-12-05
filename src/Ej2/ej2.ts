export class Password {
    private longitud: number;
    private contraseña!: string;

    constructor(longitud: number = 8) {
        this.longitud = longitud;
        this.generarContraseñaAleatoria();
    }

    generarContraseñaAleatoria(): void {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let contraseñaGenerada = '';

        for (let i = 0; i < this.longitud; i++) {
            const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            contraseñaGenerada += caracterAleatorio;
        }

        this.contraseña = contraseñaGenerada;
    }

    getContraseña(): string {
        return this.contraseña;
    }
}



