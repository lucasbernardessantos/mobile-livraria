"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mensagens = void 0;
class Mensagens {
    constructor() {
        this.mensagens = [];
    }
    adicionar(msg) {
        this.mensagens.push(msg);
    }
    pegar() {
        return this.mensagens;
    }
    limpar() {
        this.mensagens = [];
    }
}
exports.Mensagens = Mensagens;
