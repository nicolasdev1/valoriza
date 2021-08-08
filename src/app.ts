import 'reflect-metadata'

import express, { Express } from 'express'

import 'express-async-errors'

import './database'

import router from './routes'
import { handleErrorMiddleware, loggerMiddleware } from './middlewares'

const app: Express = express()

app.use(express.json())

app.use(loggerMiddleware)

app.use(router)

app.use(handleErrorMiddleware)

export default app
