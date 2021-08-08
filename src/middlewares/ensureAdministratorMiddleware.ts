import { NextFunction, Request, Response } from 'express'

import { AppError } from '../errors'
import { HttpStatusCode } from '../enums'
import { GetUserService } from '../services'
import { User } from '../entities'

const ensureAdministratorMiddleware = async (
   request: Request,
   _: Response,
   next: NextFunction
): Promise<void> => {
   const { user_id }: Request = request

   const getUserService: GetUserService = new GetUserService()

   const { admin }: User = await getUserService.execute(user_id)

   if (!admin) {
      throw new AppError('You are not authorized to access this resource', HttpStatusCode.FORBIDDEN)
   }

   return next()
}

export default ensureAdministratorMiddleware
