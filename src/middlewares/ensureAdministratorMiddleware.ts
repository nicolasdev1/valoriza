import {
   NextFunction,
   Request,
   Response
} from 'express'

import { User } from '../entities'
import { AppError } from '../errors'
import { HttpStatusCode } from '../enums'
import { GetUserByIdService } from '../services'

const ensureAdministratorMiddleware = async (
   request: Request,
   _: Response,
   next: NextFunction
): Promise<void | never> => {

   const { user_id }: Request = request

   const getUserByIdService: GetUserByIdService = new GetUserByIdService()

   const { admin }: User = await getUserByIdService.execute(user_id)

   if (!admin) {
      throw new AppError('You are not authorized to access this resource', HttpStatusCode.FORBIDDEN)
   }

   return next()

}

export default ensureAdministratorMiddleware
