import { Router } from 'express'
import { CreateUserController } from './controllers'

const router: Router = Router()

const createUserController: CreateUserController = new CreateUserController()

router.post('/users', createUserController.call)

export { router }
