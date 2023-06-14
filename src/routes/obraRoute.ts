import express, { Request, Response} from "express"
import { ObraDTO } from "../dto/obraDTO"
import { ObraRepository } from "../repository/obraRepository"

export const obraRoutes = express.Router()

obraRoutes.post('/cadastrar', async (req: Request, res: Response) => {
  let obra = new ObraDTO(req.body.titulo, req.body.autor, req.body.id)
  let obraRepository = new ObraRepository()

  res.json(await obraRepository.gravar(obra))
})

obraRoutes.get('/obterTodos', async (req: Request, res: Response) => {
  let obraRepository = new ObraRepository()

  res.json(await obraRepository.pegarTodos())
})

obraRoutes.get('/obterPeloId', async (req: Request, res: Response) => {
  let id: number = req.body.id
  let obraRepository = new ObraRepository()

  res.json(await obraRepository.pegarPeloId(id))
})

obraRoutes.delete('/deletar', async (req: Request, res: Response) => {
  let id: number = req.body.id
  let obraRepository = new ObraRepository()

  res.send(await obraRepository.deletar(id)).status(200)
})