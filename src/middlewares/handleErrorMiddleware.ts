import { NextFunction, Request, Response } from 'express'

import { HttpStatusCode } from '../enums'
import { AppError } from '../errors'

const handleErrorMiddleware = (error: Error, _: Request, response: Response, __: NextFunction) => {
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
