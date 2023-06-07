import express, { Request, Response} from 'express'
import sqlite3 from 'sqlite3'

let db = new sqlite3.Database('')

export const leitorRoutes = express.Router()

leitorRoutes.get('/obterTodos', (req: Request, res: Response) => {
  res.send('Obter todos leitores').status(200)
})

leitorRoutes.post('/cadastrar', (req: Request, res: Response) => {
  res.send('Cadastrar novo leitor').status(200)
})

leitorRoutes.put('/alterar', (req: Request, res: Response) => {
  res.send('Alterar dados de leitor cadastrado').status(200)
})

leitorRoutes.delete('/deletar', (req: Request, res: Response) => {
  res.send('Deletando leitor cadastrado').status(200)
})