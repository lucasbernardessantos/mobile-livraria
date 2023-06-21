"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoRepository = void 0;
const db_1 = require("../db/db");
const emprestimoResponseDTO_1 = require("../dto/emprestimoResponseDTO");
const leitorRepository_1 = require("./leitorRepository");
const obraRepository_1 = require("./obraRepository");
class EmprestimoRepository {
    constructor() {
        this.database = new db_1.Database();
    }
    async gravar(emprestimo) {
        let db = await this.database.connection();
        if (!db)
            return;
        let sql = `
      insert into emprestimo
      values("${emprestimo.Leitor}", "${emprestimo.Obra}", "${emprestimo.DataEmprestimo}", "${emprestimo.DataDevolucao}", "${emprestimo.Status}")
    `;
        try {
            let result = await db.run(sql);
            return result?.lastID;
        }
        catch (error) {
            return error;
        }
        finally {
            await db.close();
        }
    }
    async pegarTodos() {
        let db = await this.database.connection();
        let obraRepository = new obraRepository_1.ObraRepository();
        let leitorRepository = new leitorRepository_1.LeitorRepository();
        if (!db)
            return;
        let sql = `
      select 
        rowid, leitor, obra, dataEmprestimo, dataDevolucao, status
      from emprestimo;
    `;
        try {
            let resultado = await db.all(sql);
            let emprestimoResponse = [];
            for (let i = 0; i < resultado.length; i++) {
                let obra = await obraRepository.pegarPeloId(resultado[i].obra);
                let leitor = await leitorRepository.pegarPeloId(resultado[i].leitor);
                if (!obra)
                    return null;
                let emprestimo = new emprestimoResponseDTO_1.EmprestimoResponseDTO(resultado[i].rowid, leitor, obra, resultado[i].status, resultado[i].dataEmprestimo, resultado[i].dataDevolucao);
                emprestimoResponse.push(emprestimo);
            }
            return emprestimoResponse;
        }
        catch (error) {
            return error;
        }
        finally {
            await db.close();
        }
    }
    async pegarPeloId(id) {
        let db = await this.database.connection();
        let obraRepository = new obraRepository_1.ObraRepository();
        let leitorRepository = new leitorRepository_1.LeitorRepository();
        if (!db)
            return;
        let sql = `
      select 
        rowid, leitor, obra, dataEmprestimo, dataDevolucao, status
      from emprestimo
      where rowid = ${id}
    `;
        try {
            let resultado = await db.get(sql);
            let obra = await obraRepository.pegarPeloId(resultado.obra);
            let leitor = await leitorRepository.pegarPeloId(resultado.leitor);
            if (!obra)
                return null;
            let emprestimoResponse = new emprestimoResponseDTO_1.EmprestimoResponseDTO(resultado.rowid, leitor, obra, resultado.status, resultado.dataEmprestimo, resultado.dataDevolucao);
            return emprestimoResponse;
        }
        catch (error) {
            return error;
        }
        finally {
            await db.close();
        }
    }
    async deletar(id) {
        let db = await this.database.connection();
        if (!db)
            return;
        let sql = `
      delete
      from emprestimo
      where rowid = ${id}
    `;
        console.log(sql);
        try {
            return await db.run(sql);
        }
        catch (error) {
            return error;
        }
        finally {
            await db.close();
        }
    }
}
exports.EmprestimoRepository = EmprestimoRepository;
