"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutorDTO = void 0;
class AutorDTO {
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
    }
    get Nome() {
        return this.nome;
    }
    get Id() {
        return this.id;
    }
}
exports.AutorDTO = AutorDTO;
