import express, { Request, Response } from 'express'
import cors from 'cors'
import { leitorRoutes } from './routes/leitor'

const app = express()
const port = process.env.port || 3000

app.use(cors())
app.use('/leitor', leitorRoutes)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})