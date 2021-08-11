import 'reflect-metadata'

import cors from 'cors'
import express, { Express } from 'express'

import 'express-async-errors'

import './database/connection'

import router from './routes'
import { handleErrorMiddleware, loggerMiddleware } from './middlewares'

const app: Express = express()

app.use(cors())
app.use(express.json())

app.use(loggerMiddleware)

app.use(router)

app.use(handleErrorMiddleware)

export default app
