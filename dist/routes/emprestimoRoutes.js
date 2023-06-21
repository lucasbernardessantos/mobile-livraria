"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emprestimoRoutes = void 0;
const express_1 = __importDefault(require("express"));
const emprestimoDTO_1 = require("../dto/emprestimoDTO");
const emprestimoRepository_1 = require("../repository/emprestimoRepository");
exports.emprestimoRoutes = express_1.default.Router();
exports.emprestimoRoutes.post('/cadastrar', async (req, res) => {
    let emprestimo = new emprestimoDTO_1.EmprestimoDTO(req.body.leitor, req.body.obra, 'emprestado', req.body.dataEmprestimo, req.body.dataDevolucao);
    let emprestimoRepository = new emprestimoRepository_1.EmprestimoRepository();
    res.json(await emprestimoRepository.gravar(emprestimo));
});
exports.emprestimoRoutes.get('/obterTodos', async (req, res) => {
    let obraRepository = new emprestimoRepository_1.EmprestimoRepository();
    res.json(await obraRepository.pegarTodos());
});
exports.emprestimoRoutes.get('/obterPeloId', async (req, res) => {
    let id = req.body.id;
    let emprestimoRepository = new emprestimoRepository_1.EmprestimoRepository();
    res.json(await emprestimoRepository.pegarPeloId(id));
});
exports.emprestimoRoutes.delete('/deletar', async (req, res) => {
    let id = req.body.id;
    let emprestimoRepository = new emprestimoRepository_1.EmprestimoRepository();
    res.send(await emprestimoRepository.deletar(id)).status(200);
});
