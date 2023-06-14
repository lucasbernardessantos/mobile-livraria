"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autorRoutes = void 0;
const autorRepository_1 = require("./../repository/autorRepository");
const express_1 = __importDefault(require("express"));
const autorDTO_1 = require("../dto/autorDTO");
exports.autorRoutes = express_1.default.Router();
exports.autorRoutes.get('/obterTodos', async (req, res) => {
    let autorRepository = new autorRepository_1.AutorRepository();
    res.json(await autorRepository.pegarTodos());
});
exports.autorRoutes.get('/obterPeloId', async (req, res) => {
    let id = req.body.id;
    let autorRepository = new autorRepository_1.AutorRepository();
    res.json(await autorRepository.pegarPeloId(id));
});
exports.autorRoutes.post('/cadastrar', async (req, res) => {
    let autor = new autorDTO_1.AutorDTO(req.body.nome, req.body.id);
    let autorRepository = new autorRepository_1.AutorRepository();
    res.json(await autorRepository.gravar(autor));
});
exports.autorRoutes.delete('/deletar', async (req, res) => {
    let id = req.body.id;
    let autorRepository = new autorRepository_1.AutorRepository();
    res.send(await autorRepository.deletar(id)).status(200);
});
