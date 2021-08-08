import { Router } from 'express'
import { routesNomenclature } from './constants'

import {
   CreateUserController,
   CreateTagController,
   AuthenticateController,
   CreateComplimentController,
   GetComplimentsUserSentController,
   GetComplimentsUserReceivedController
} from './controllers'
import { ensureAdministratorMiddleware, ensureAuthenticationMiddleware } from './middlewares'

const router: Router = Router()

const authenticateController: AuthenticateController = new AuthenticateController()

const createUserController: CreateUserController = new CreateUserController()
const createTagController: CreateTagController = new CreateTagController()
const createComplimentController: CreateComplimentController = new CreateComplimentController()

const getComplimentsUserSentController: GetComplimentsUserSentController = new GetComplimentsUserSentController()
const getComplimentsUserReceivedController: GetComplimentsUserReceivedController = new GetComplimentsUserReceivedController()

router.post(routesNomenclature.SESSIONS, authenticateController.call)

router.use(ensureAuthenticationMiddleware)
router.post(routesNomenclature.USERS, createUserController.call)
router.post(routesNomenclature.TAGS, ensureAdministratorMiddleware, createTagController.call)
router.post(routesNomenclature.COMPLIMENTS, createComplimentController.call)

router.get(routesNomenclature.USERS_COMPLIMENTS_SENT, getComplimentsUserSentController.call)
router.get(routesNomenclature.USERS_COMPLIMENTS_RECEIVED, getComplimentsUserReceivedController.call)

export default router
