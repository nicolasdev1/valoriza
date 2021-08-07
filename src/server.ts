import 'reflect-metadata'

import express, { Express } from 'express'

import './database'
import { router } from './routes'

const app: Express = express()
app.use(express.json())
app.use(router)

const port: string | Number = process.env.PORT || 7001
app.listen(port, (): void => console.log(`Server is running in port ${port}...`))
