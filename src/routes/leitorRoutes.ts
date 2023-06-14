import { LeitorRepository } from './../repository/leitorRepository';
import express, { Request, Response} from 'express'
import { LeitorDTO } from '../dto/leitorDTO'
import { LeitorLoginDTO } from '../dto/leitorLogin';

export const leitorRoutes = express.Router()

leitorRoutes.get('/obterTodos', async (req: Request, res: Response) => {
  let leitorRepository = new LeitorRepository()

  res.json(await leitorRepository.pegarTodos())
})

leitorRoutes.get('/obterPeloId', async (req: Request, res: Response) => {
  let id: number = req.body.id
  let autorRepository = new LeitorRepository()

  res.json(await autorRepository.pegarPeloId(id))
})

leitorRoutes.post('/cadastrar', async (req: Request, res: Response) => {
  let leitor = new LeitorDTO(req.body.nome, req.body.email, req.body.cpf, req.body.senha) 
  let leitorRepository = new LeitorRepository()

  res.json(await leitorRepository.gravar(leitor))
})

leitorRoutes.get('/login', async (req: Request, res: Response) => {
  let login = new LeitorLoginDTO(req.body.email, req.body.senha)
  let leitorRepository = new LeitorRepository()

  res.json(await leitorRepository.login(login))
})

leitorRoutes.put('/alterar', (req: Request, res: Response) => {
  res.send('Alteração ainda não implementado filho da puta.')
})

leitorRoutes.delete('/deletar', async (req: Request, res: Response) => {
  let id: number = req.body.id
  let leitorRepository = new LeitorRepository()

  res.send(await leitorRepository.deletar(id)).status(200)
})