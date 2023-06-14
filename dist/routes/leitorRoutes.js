"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leitorRoutes = void 0;
const leitorRepository_1 = require("./../repository/leitorRepository");
const express_1 = __importDefault(require("express"));
const leitorDTO_1 = require("../dto/leitorDTO");
const leitorLogin_1 = require("../dto/leitorLogin");
exports.leitorRoutes = express_1.default.Router();
exports.leitorRoutes.get('/obterTodos', async (req, res) => {
    let leitorRepository = new leitorRepository_1.LeitorRepository();
    res.json(await leitorRepository.pegarTodos());
});
exports.leitorRoutes.post('/cadastrar', async (req, res) => {
    let leitor = new leitorDTO_1.LeitorDTO(req.body.nome, req.body.email, req.body.cpf, req.body.senha);
    let leitorRepository = new leitorRepository_1.LeitorRepository();
    console.log(leitor.CPF);
    res.json(await leitorRepository.gravar(leitor));
});
exports.leitorRoutes.get('/login', async (req, res) => {
    let login = new leitorLogin_1.LeitorLoginDTO(req.body.email, req.body.senha);
    let leitorRepository = new leitorRepository_1.LeitorRepository();
    res.json(await leitorRepository.login(login));
});
exports.leitorRoutes.put('/alterar', (req, res) => {
    res.send('Alteração ainda não implementado filho da puta.');
});
exports.leitorRoutes.delete('/deletar', async (req, res) => {
    let id = req.body.id;
    let leitorRepository = new leitorRepository_1.LeitorRepository();
    res.send(await leitorRepository.deletar(id)).status(200);
});
