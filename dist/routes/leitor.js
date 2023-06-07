"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leitorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const sqlite3_1 = __importDefault(require("sqlite3"));
let db = new sqlite3_1.default.Database('');
exports.leitorRoutes = express_1.default.Router();
exports.leitorRoutes.get('/obterTodos', (req, res) => {
    res.send('Obter todos leitores').status(200);
});
exports.leitorRoutes.post('/cadastrar', (req, res) => {
    res.send('Cadastrar novo leitor').status(200);
});
exports.leitorRoutes.put('/alterar', (req, res) => {
    res.send('Alterar dados de leitor cadastrado').status(200);
});
exports.leitorRoutes.delete('/deletar', (req, res) => {
    res.send('Deletando leitor cadastrado').status(200);
});
