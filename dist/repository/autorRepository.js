"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutorRepository = void 0;
const db_1 = require("../db/db");
class AutorRepository {
    constructor() {
        this.database = new db_1.Database();
    }
    async gravar(autor) {
        let db = await this.database.connection();
        if (!db)
            return;
        let sql = `
      insert into autor 
      values("${autor.Nome}")
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
        rowid, nome
      from autor;
    `;
        try {
            return await db.all(sql);
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
        if (!db)
            return;
        let sql = `
      select rowid, nome
      from autor
      where rowid = ${id}
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
      from autor
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
exports.AutorRepository = AutorRepository;
