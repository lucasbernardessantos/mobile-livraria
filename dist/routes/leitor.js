"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leitorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const leitorDTO_1 = require("../models/leitorDTO");
const leitorRepository_1 = require("../repository/leitorRepository");
exports.leitorRoutes = express_1.default.Router();
exports.leitorRoutes.get('/obterTodos', (req, res) => {
    res.send('Obter todos leitores').status(200);
});
exports.leitorRoutes.post('/cadastrar', async (req, res) => {
    let entity = req.body;
    let leitorRepository = new leitorRepository_1.LeitorRepository();
    let leitor = new leitorDTO_1.LeitorDTO(entity.nome, entity.email, entity.cpf);
    let id = await leitorRepository.gravar(leitor);
    res.json(id);
});
exports.leitorRoutes.put('/alterar', (req, res) => {
    res.send('Alteração ainda não implementado filho da puta.');
});
exports.leitorRoutes.delete('/deletar', (req, res) => {
    res.send('Deletando leitor cadastrado').status(200);
});
