import sqlite3, { RunResult } from "sqlite3"
import { Database } from "../db/db"
import { LeitorDTO } from "../dto/leitorDTO"
import { LeitorLoginDTO } from "../dto/leitorLogin"

export class LeitorRepository {
  private database

  constructor() {
    this.database = new Database()
  }

  async gravar(leitor: LeitorDTO) {
    let db = await this.database.connection()
    let result = null

    if (!db) return

    
    let sql = `
    insert into leitor values("${leitor.Nome}", "${leitor.Email}", "${leitor.CPF}", "${leitor.Senha}")
    `
    
    try {
      result = await db.run(sql)
    } 
    catch (error) {
      return error
    }
    finally {
      await db.close()
    }

    return result?.lastID
  }

  async pegarTodos() {
    let db = await this.database.connection()
    if (!db) return

    let sql = `
      select 
        rowid, nome, email, cpf, senha
      from leitor;
    `

    try {
      let result = await db.all(sql)

      return result
    }
    catch (error) {
      return error
    }
    finally {
      await db.close()
    }
  }

  async login(login: LeitorLoginDTO) {
    let db = await this.database.connection()
    if (!db) return

    let sql = `
      select 
        rowid
      from leitor
      where 
        email = '${login.Email}' and
        senha = '${login.Senha}';
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
      from leitor
      where rowid = ${id}
    `

    try {
      let result = await db.run(sql)

      return result
    } 
    catch (error) {
      return error
    }
    finally {
      await db.close()
    }
  }
}