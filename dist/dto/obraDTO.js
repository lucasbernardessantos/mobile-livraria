"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObraDTO = void 0;
class ObraDTO {
    constructor(titulo, autor, id) {
        this.titulo = titulo;
        this.autor = autor;
        this.id = id;
    }
    get Titulo() {
        return this.titulo;
    }
    get Autor() {
        return this.autor;
    }
    get Id() {
        return this.id;
    }
}
exports.ObraDTO = ObraDTO;
