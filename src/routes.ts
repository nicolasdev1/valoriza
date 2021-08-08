import { Router } from 'express'

import {
   CreateUserController,
   CreateTagController,
   AuthenticateController,
   CreateComplimentController
} from './controllers'
import { ensureAdministratorMiddleware } from './middlewares'

const router: Router = Router()

const createUserController: CreateUserController = new CreateUserController()
const createTagController: CreateTagController = new CreateTagController()
const authenticateController: AuthenticateController = new AuthenticateController()
const createComplimentController: CreateComplimentController = new CreateComplimentController()

router.post('/users', createUserController.call)
router.post('/tags', ensureAdministratorMiddleware, createTagController.call)
router.post('/sessions', authenticateController.call)
router.post('/compliments', createComplimentController.call)

export default router
