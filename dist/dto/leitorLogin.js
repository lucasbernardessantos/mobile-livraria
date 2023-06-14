"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeitorLoginDTO = void 0;
class LeitorLoginDTO {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
    get Email() {
        return this.email;
    }
    get Senha() {
        return this.senha;
    }
}
exports.LeitorLoginDTO = LeitorLoginDTO;
