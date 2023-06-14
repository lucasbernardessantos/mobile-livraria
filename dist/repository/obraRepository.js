"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObraRepository = void 0;
const obraResponseDTO_1 = require("../dto/obraResponseDTO");
const db_1 = require("./../db/db");
const autorRepository_1 = require("./autorRepository");
class ObraRepository {
    constructor() {
        this.database = new db_1.Database();
    }
    async gravar(obra) {
        let db = await this.database.connection();
        if (!db)
            return;
        let sql = `
      insert into obra 
      values("${obra.Titulo}", "${obra.Autor}")
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
        if (!db)
            return;
        let sql = `
      select 
        rowid, titulo, autor
      from obra;
    `;
        try {
            let resultado = await db.all(sql);
            let obraResponse = [];
            let autorRepository = new autorRepository_1.AutorRepository();
            for (let i = 0; i < resultado.length; i++) {
                let autor = await autorRepository.pegarPeloId(resultado[i].autor);
                let obra = new obraResponseDTO_1.ObraResponseDTO(resultado[i].titulo, autor, resultado[i].rowid);
                obraResponse.push(obra);
            }
            return obraResponse;
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
        let autorRepository = new autorRepository_1.AutorRepository();
        if (!db)
            return;
        let sql = `
      select rowid, titulo, autor
      from obra
      where rowid = ${id}
    `;
        try {
            let resultado = await db.get(sql);
            let autor = await autorRepository.pegarPeloId(resultado.autor);
            let obraResponse = new obraResponseDTO_1.ObraResponseDTO(resultado.titulo, autor, resultado.rowid);
            return obraResponse;
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
      from obra
      where rowid = ${id}
    `;
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
exports.ObraRepository = ObraRepository;
