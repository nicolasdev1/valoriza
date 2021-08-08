import { NextFunction, Request, Response } from 'express'

const loggerMiddleware = (request: Request, _: Response, next: NextFunction): void => {
    console.log(`METHOD: ${request.method}\nPATH: ${request.path}`)

    return next()
}

export default loggerMiddleware
