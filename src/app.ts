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

const port: string | Number = process.env.PORT || 7001

app.listen(port, (): void => console.log(`Server is running in port ${port}...`))
