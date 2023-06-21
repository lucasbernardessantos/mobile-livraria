import express from 'express'
import cors from 'cors'
import { leitorRoutes } from './routes/leitorRoutes'
import { autorRoutes } from './routes/autorRoutes'
import { obraRoutes } from './routes/obraRoute'
import { emprestimoRoutes } from './routes/emprestimoRoutes'

const app = express()
const port = process.env.port || 3000

app.use(cors())
app.use(express.json())

app.use('/leitor', leitorRoutes)
app.use('/autor', autorRoutes)
app.use('/obra', obraRoutes)
app.use('/emprestimo', emprestimoRoutes)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})