import { Request, Response } from 'express'

import { User } from '../entities'
import { CreateUserService } from '../services'
import { ICreateUserRequest } from '../interfaces'

class CreateUserController {

   async call(request: Request, response: Response): Promise<Response> {
      const { name, email, password, admin }: ICreateUserRequest = request.body

      const createUserService: CreateUserService = new CreateUserService()

      const user: User = await createUserService.execute({ name, email, password, admin })

      return response.json(user)
   }

}

export default CreateUserController
