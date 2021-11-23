import express, { Request, Response } from 'express'
import cors from 'cors'
import { routers } from './routes'

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
)

routers(app)

app.listen(8000, () => {
  console.info('port 8000')
})
