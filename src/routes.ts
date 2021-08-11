import { Router } from 'express'

import {
   CreateTagController,
   CreateUserController,
   AuthenticateController,
   CreateComplimentController,
   GetComplimentsUserSentController,
   GetComplimentsUserReceivedController,
   GetTagsController
} from './controllers'
import { routesNomenclature } from './constants'
import { ensureAdministratorMiddleware, ensureAuthenticationMiddleware } from './middlewares'

const router: Router = Router()

const authenticateController: AuthenticateController = new AuthenticateController()

const createUserController: CreateUserController = new CreateUserController()
const createTagController: CreateTagController = new CreateTagController()
const createComplimentController: CreateComplimentController = new CreateComplimentController()

const getComplimentsUserSentController: GetComplimentsUserSentController = new GetComplimentsUserSentController()
const getComplimentsUserReceivedController: GetComplimentsUserReceivedController = new GetComplimentsUserReceivedController()
const getTagsController: GetTagsController = new GetTagsController()

router.post(routesNomenclature.SESSIONS, authenticateController.call)
router.post(routesNomenclature.USERS, createUserController.call)

router.use(ensureAuthenticationMiddleware)

router.post(routesNomenclature.TAGS, ensureAdministratorMiddleware, createTagController.call)
router.post(routesNomenclature.COMPLIMENTS, createComplimentController.call)

router.get(routesNomenclature.USERS_COMPLIMENTS_SENT, getComplimentsUserSentController.call)
router.get(routesNomenclature.USERS_COMPLIMENTS_RECEIVED, getComplimentsUserReceivedController.call)
router.get(routesNomenclature.TAGS, getTagsController.call)

export default router
