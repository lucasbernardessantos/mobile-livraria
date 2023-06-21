"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoResponseDTO = void 0;
class EmprestimoResponseDTO {
    constructor(id, leitor, obra, status, dataEmprestimo, dataDevolucao) {
        this.id = id;
        this.leitor = leitor;
        this.obra = obra;
        this.status = status;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
    }
}
exports.EmprestimoResponseDTO = EmprestimoResponseDTO;
