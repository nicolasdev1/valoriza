import { Request, Response } from 'express'

import { CreateUserService } from '../services'
import { IUserRequest } from '../interfaces'
import { User } from '../entities'

class CreateUserController {
    async call(request: Request, response: Response) {
        const { name, email, admin }:IUserRequest = request.body

        const createUserService: CreateUserService = new CreateUserService()

        const user: User = await createUserService.execute({ name, email, admin })

        return response.json(user)
    }
}

export default CreateUserController
