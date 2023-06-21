import { Database } from "../db/db"
import { AutorDTO } from "../dto/autorDTO"

export class AutorRepository {
  private database

  constructor() {
    this.database = new Database()
  }

  async gravar(autor: AutorDTO) {
    let db = await this.database.connection()
    if (!db) return

    let sql = `
      insert into autor 
      values("${autor.Nome}")
    `
    
    try {
      let result = await db.run(sql)
      return result?.lastID
    } 
    catch (error) {
      return error
    }
    finally {
      await db.close()
    }
  }

  async pegarTodos() {
    let db = await this.database.connection()
    if (!db) return

    let sql = `
      select 
        rowid as id, nome
      from autor;
    `

    try {
      return await db.all(sql)
    }
    catch (error) {
      return error
    }
    finally {
      await db.close()
    }
  }

  async pegarPeloId(id: number) {
    let db = await this.database.connection()
    if (!db) return

    let sql = `
      select rowid as id, nome
      from autor
      where rowid = ${id}
    `

    try {
      return await db.get(sql)
    } 
    catch (error) {
      return error
    }
    finally {
      await db.close()
    }
  }

  async deletar(id: number) {
    let db = await this.database.connection()
    if (!db) return

    let sql = `
      delete
      from autor
      where rowid = ${id}
    `

    try {
      return await db.run(sql)
    } 
    catch (error) {
      return error
    }
    finally {
      await db.close()
    }
  }
}