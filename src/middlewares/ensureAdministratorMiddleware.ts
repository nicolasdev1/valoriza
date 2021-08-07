import { NextFunction, Request, Response } from 'express'

import { HttpStatusCode } from '../enums'
import { AppError } from '../errors'

const ensureAdministratorMiddleware = (_: Request, __: Response, next: NextFunction) => {
    const admin = true

    if (!admin) {
        throw new AppError('Unauthorized', HttpStatusCode.UNAUTHORIZED)
    }

    return next()
}

export default ensureAdministratorMiddleware
