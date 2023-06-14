"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obraRoutes = void 0;
const express_1 = __importDefault(require("express"));
const obraDTO_1 = require("../dto/obraDTO");
const obraRepository_1 = require("../repository/obraRepository");
exports.obraRoutes = express_1.default.Router();
exports.obraRoutes.post('/cadastrar', async (req, res) => {
    let obra = new obraDTO_1.ObraDTO(req.body.titulo, req.body.autor, req.body.id);
    let obraRepository = new obraRepository_1.ObraRepository();
    res.json(await obraRepository.gravar(obra));
});
exports.obraRoutes.get('/obterTodos', async (req, res) => {
    let obraRepository = new obraRepository_1.ObraRepository();
    res.json(await obraRepository.pegarTodos());
});
exports.obraRoutes.get('/obterPeloId', async (req, res) => {
    let id = req.body.id;
    let obraRepository = new obraRepository_1.ObraRepository();
    res.json(await obraRepository.pegarPeloId(id));
});
exports.obraRoutes.delete('/deletar', async (req, res) => {
    let id = req.body.id;
    let obraRepository = new obraRepository_1.ObraRepository();
    res.send(await obraRepository.deletar(id)).status(200);
});
