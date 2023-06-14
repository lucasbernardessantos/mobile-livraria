"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeitorRepository = void 0;
const db_1 = require("../db/db");
class LeitorRepository {
    constructor() {
        this.database = new db_1.Database();
    }
    async gravar(leitor) {
        let db = await this.database.connection();
        let result = null;
        if (!db)
            return;
        let sql = `
    insert into leitor values("${leitor.Nome}", "${leitor.Email}", "${leitor.CPF}", "${leitor.Senha}")
    `;
        try {
            result = await db.run(sql);
        }
        catch (error) {
            return error;
        }
        finally {
            await db.close();
        }
        return result?.lastID;
    }
    async pegarTodos() {
        let db = await this.database.connection();
        if (!db)
            return;
        let sql = `
      select 
        rowid, nome, email, cpf, senha
      from leitor;
    `;
        try {
            let result = await db.all(sql);
            return result;
        }
        catch (error) {
            return error;
        }
        finally {
            await db.close();
        }
    }
    async login(login) {
        let db = await this.database.connection();
        if (!db)
            return;
        let sql = `
      select 
        rowid
      from leitor
      where 
        email = '${login.Email}' and
        senha = '${login.Senha}';
    `;
        try {
            return await db.get(sql);
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
      from leitor
      where rowid = ${id}
    `;
        try {
            let result = await db.run(sql);
            return result;
        }
        catch (error) {
            return error;
        }
        finally {
            await db.close();
        }
    }
}
exports.LeitorRepository = LeitorRepository;
