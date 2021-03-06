import {
   Request,
   Response,
   NextFunction
} from 'express'

import { AppError } from '../errors'
import { HttpStatusCode } from '../enums'

const handleErrorMiddleware = (
   error: Error,
   _: Request,
   response: Response,
   __: NextFunction
): Response => {

   if (error instanceof AppError) {
      return response
               .status(error.statusCode)
               .json({ status: 'error', message: error.message })
   }

   return response
            .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({ status: 'error', message: 'Internal server error' })

}

export default handleErrorMiddleware
