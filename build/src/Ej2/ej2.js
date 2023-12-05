"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
class Password {
    constructor(longitud = 8) {
        this.longitud = longitud;
        this.generarContraseñaAleatoria();
    }
    generarContraseñaAleatoria() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let contraseñaGenerada = '';
        for (let i = 0; i < this.longitud; i++) {
            const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            contraseñaGenerada += caracterAleatorio;
        }
        this.contraseña = contraseñaGenerada;
    }
    getContraseña() {
        return this.contraseña;
    }
}
exports.Password = Password;
