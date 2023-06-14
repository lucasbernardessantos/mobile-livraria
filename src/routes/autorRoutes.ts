import { AutorRepository } from './../repository/autorRepository'
import express, { Request, Response} from 'express'
import { AutorDTO } from '../dto/autorDTO'

export const autorRoutes = express.Router()

autorRoutes.post('/cadastrar', async (req: Request, res: Response) => {
  let autor = new AutorDTO(req.body.nome, req.body.id)
  let autorRepository = new AutorRepository()

  res.json(await autorRepository.gravar(autor))
})

autorRoutes.get('/obterTodos', async (req: Request, res: Response) => {
  let autorRepository = new AutorRepository()

  res.json(await autorRepository.pegarTodos())
})

autorRoutes.get('/obterPeloId', async (req: Request, res: Response) => {
  let id: number = req.body.id
  let autorRepository = new AutorRepository()

  res.json(await autorRepository.pegarPeloId(id))
})

autorRoutes.delete('/deletar', async (req: Request, res: Response) => {
  let id: number = req.body.id
  let autorRepository = new AutorRepository()

  res.send(await autorRepository.deletar(id)).status(200)
})