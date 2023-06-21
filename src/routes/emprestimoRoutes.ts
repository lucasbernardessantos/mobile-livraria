import express, { Request, Response} from 'express'
import { EmprestimoDTO } from '../dto/emprestimoDTO'
import { EmprestimoRepository } from '../repository/emprestimoRepository'

export const emprestimoRoutes = express.Router()

emprestimoRoutes.post('/cadastrar', async (req: Request, res: Response) => {
  let emprestimo = new EmprestimoDTO(req.body.leitor, req.body.obra, 'emprestado', req.body.dataEmprestimo, req.body.dataDevolucao)
  let emprestimoRepository = new EmprestimoRepository()

  res.json(await emprestimoRepository.gravar(emprestimo))
})

emprestimoRoutes.get('/obterTodos', async (req: Request, res: Response) => {
  let obraRepository = new EmprestimoRepository()

  res.json(await obraRepository.pegarTodos())
})

emprestimoRoutes.get('/obterPeloId', async (req: Request, res: Response) => {
  let id: number = req.body.id
  let emprestimoRepository = new EmprestimoRepository()

  res.json(await emprestimoRepository.pegarPeloId(id))
})

emprestimoRoutes.delete('/deletar', async (req: Request, res: Response) => {
  let id: number = req.body.id
  let emprestimoRepository = new EmprestimoRepository()

  res.send(await emprestimoRepository.deletar(id)).status(200)
})