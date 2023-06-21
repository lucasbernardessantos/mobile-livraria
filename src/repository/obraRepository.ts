import { ObraDTO } from '../dto/obraDTO';
import { ObraResponseDTO } from '../dto/obraResponseDTO';
import { Database } from './../db/db';
import { AutorRepository } from './autorRepository';
export class ObraRepository {
  private database

  constructor() {
    this.database = new Database()
  }

  async gravar(obra: ObraDTO) {
    let db = await this.database.connection()
    if (!db) return

    let sql = `
      insert into obra 
      values("${obra.Titulo}", "${obra.Autor}")
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
        rowid, titulo, autor
      from obra;
    `

    try {
      let resultado = await db.all(sql)
      let obraResponse: ObraResponseDTO[] = []
      let autorRepository = new AutorRepository()

      for(let i = 0; i < resultado.length; i++) {
        let autor = await autorRepository.pegarPeloId(resultado[i].autor)
        let obra = new ObraResponseDTO(resultado[i].rowid, resultado[i].titulo, autor)
        obraResponse.push(obra)
      }

      return obraResponse
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
    let autorRepository = new AutorRepository()
    if (!db) return

    let sql = `
      select rowid, titulo, autor
      from obra
      where rowid = ${id}
    `

    try {
      let resultado = await db.get(sql)
      let autor = await autorRepository.pegarPeloId(resultado.autor)
      let obraResponse = new ObraResponseDTO(resultado.rowid, resultado.titulo, autor)
      
      return obraResponse
    } 
    catch (error) {
      console.log(error); 
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
      from obra
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