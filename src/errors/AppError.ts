import { HttpStatusCode } from '../enums'

class AppError {
    public readonly message: string
    public readonly statusCode: number

    constructor(message: string, statusCode: number = HttpStatusCode.BAD_REQUEST) {
        this.message = message
        this.statusCode = statusCode
    }
}

export default AppError
