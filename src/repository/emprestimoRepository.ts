import { Database } from "../db/db"
import { EmprestimoDTO } from "../dto/emprestimoDTO"
import { EmprestimoResponseDTO } from "../dto/emprestimoResponseDTO"
import { LeitorRepository } from "./leitorRepository"
import { ObraRepository } from "./obraRepository"

export class EmprestimoRepository {
  private database

  constructor() {
    this.database = new Database()
  }

  async gravar(emprestimo: EmprestimoDTO) {
    let db = await this.database.connection()
    if (!db) return

    let sql = `
      insert into emprestimo
      values("${emprestimo.Leitor}", "${emprestimo.Obra}", "${emprestimo.DataEmprestimo}", "${emprestimo.DataDevolucao}", "${emprestimo.Status}")
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
    let obraRepository = new ObraRepository()
    let leitorRepository = new LeitorRepository()
    if (!db) return

    let sql = `
      select 
        rowid, leitor, obra, dataEmprestimo, dataDevolucao, status
      from emprestimo;
    `

    try {
      let resultado = await db.all(sql)
      let emprestimoResponse: EmprestimoResponseDTO[] = []

      for(let i = 0; i < resultado.length; i++) {
        let obra = await obraRepository.pegarPeloId(resultado[i].obra)
        let leitor = await leitorRepository.pegarPeloId(resultado[i].leitor)

        if (!obra) return null

        let emprestimo = new EmprestimoResponseDTO(resultado[i].rowid, leitor, obra, resultado[i].status, resultado[i].dataEmprestimo, resultado[i].dataDevolucao)
        emprestimoResponse.push(emprestimo)
      }

      return emprestimoResponse
    } catch (error) {
      return error
    } finally {
      await db.close()
    }
  }

  async pegarPeloId(id: number) {
    let db = await this.database.connection()
    let obraRepository = new ObraRepository()
    let leitorRepository = new LeitorRepository()
    if (!db) return

    let sql = `
      select 
        rowid, leitor, obra, dataEmprestimo, dataDevolucao, status
      from emprestimo
      where rowid = ${id}
    `

    try {
      let resultado = await db.get(sql)
      let obra = await obraRepository.pegarPeloId(resultado.obra)
      let leitor = await leitorRepository.pegarPeloId(resultado.leitor)

      if (!obra) return null

      let emprestimoResponse = new EmprestimoResponseDTO(
        resultado.rowid, 
        leitor, 
        obra, 
        resultado.status, 
        resultado.dataEmprestimo, 
        resultado.dataDevolucao
      )
      
      return emprestimoResponse
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
      from emprestimo
      where rowid = ${id}
    `

    console.log(sql)

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