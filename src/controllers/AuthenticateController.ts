import { Request, Response } from 'express'

import { AuthenticateService } from '../services'
import { IAuthenticateRequest } from '../interfaces'

class AuthenticateController {
   async call(request: Request, response: Response): Promise<Response> {
      const { email, password }: IAuthenticateRequest = request.body

      const authenticateService: AuthenticateService = new AuthenticateService()

      const token = await authenticateService.execute({ email, password })

      return response.json(token)
   }
}

export default AuthenticateController
