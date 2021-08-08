import { Request, Response, NextFunction,  } from 'express'
import { IncomingHttpHeaders } from 'http'
import { verify } from 'jsonwebtoken'

import { AppError } from '../errors'
import { HttpStatusCode } from '../enums'
import { IJwtPayload } from '../interfaces'

const ensureAuthenticationMiddleware = (
   request: Request,
   _: Response,
   next: NextFunction
): void => {
   const { authorization }: IncomingHttpHeaders = request.headers

   if (!authorization) {
      throw new AppError('No authorization token', HttpStatusCode.UNAUTHORIZED)
   }

   const [, token]: string[] = authorization.split(' ')

   try {
      const { sub: user_id } = verify(token, process.env.JWT_PRIVATE_KEY) as IJwtPayload

      request.user_id = user_id

      return next()
   } catch (error) {
      throw new AppError('Invalid token', HttpStatusCode.UNAUTHORIZED)
   }
}

export default ensureAuthenticationMiddleware
