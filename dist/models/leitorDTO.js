"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeitorDTO = void 0;
class LeitorDTO {
    constructor(nome, email, cpf, id) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.id = id;
    }
    get Nome() {
        return this.nome;
    }
    get Email() {
        return this.email;
    }
    get CPF() {
        return this.cpf;
    }
    get Id() {
        return this.id;
    }
}
exports.LeitorDTO = LeitorDTO;
