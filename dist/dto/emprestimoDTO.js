"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoDTO = void 0;
class EmprestimoDTO {
    constructor(leitor, obra, status, dataEmprestimo, dataDevolucao) {
        this.leitor = leitor;
        this.obra = obra;
        this.status = status;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
    }
    get Leitor() {
        return this.leitor;
    }
    get Obra() {
        return this.obra;
    }
    get Status() {
        return this.status;
    }
    get DataEmprestimo() {
        return this.dataEmprestimo;
    }
    get DataDevolucao() {
        return this.dataDevolucao;
    }
}
exports.EmprestimoDTO = EmprestimoDTO;
