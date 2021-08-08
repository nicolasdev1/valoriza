import { Request, Response } from 'express'
import { Compliment } from '../entities'

import { GetComplimentsUserSentService } from '../services'

class GetComplimentsUserSentController {
   async call(request: Request, response: Response): Promise<Response> {
      const { user_id }: Request = request

      const getComplimentsUserSentService: GetComplimentsUserSentService = new GetComplimentsUserSentService()

      const compliments: Compliment[] = await getComplimentsUserSentService.execute(user_id)

      return response.json(compliments)
   }
}

export default GetComplimentsUserSentController
