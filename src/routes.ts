import { Router } from 'express'

import { CreateUserController, CreateTagController } from './controllers'
import { ensureAdministratorMiddleware } from './middlewares'

const router: Router = Router()

const createUserController: CreateUserController = new CreateUserController()
const createTagController: CreateTagController = new CreateTagController()

router.post('/users', createUserController.call)
router.post('/tags', ensureAdministratorMiddleware, createTagController.call)

export default router
