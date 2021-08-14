import { Request, Response } from 'express'

import { GetUsersService } from '../services'
import { User } from '../entities'

class GetUsersController {

   async call(request: Request, response: Response): Promise<Response> {
      const getUsersService: GetUsersService = new GetUsersService()

      const users: User[] = await getUsersService.execute()

      return response.json(users)
   }

}

export default GetUsersController
