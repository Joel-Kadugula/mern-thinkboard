import express from 'express'
import cors from 'cors'

import notesRoutes from './routes/notesRoutes.js'
import rateLimiter from "./middlewares/rateLimiter.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use(rateLimiter)

app.use('/api/notes', notesRoutes)


export default app