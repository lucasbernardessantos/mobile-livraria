"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const leitorRoutes_1 = require("./routes/leitorRoutes");
const autorRoutes_1 = require("./routes/autorRoutes");
const obraRoute_1 = require("./routes/obraRoute");
const emprestimoRoutes_1 = require("./routes/emprestimoRoutes");
const app = (0, express_1.default)();
const port = process.env.port || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/leitor', leitorRoutes_1.leitorRoutes);
app.use('/autor', autorRoutes_1.autorRoutes);
app.use('/obra', obraRoute_1.obraRoutes);
app.use('/emprestimo', emprestimoRoutes_1.emprestimoRoutes);
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
