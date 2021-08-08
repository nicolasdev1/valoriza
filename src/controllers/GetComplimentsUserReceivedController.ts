import { Request, Response } from 'express'
import { Compliment } from '../entities'

import { GetComplimentsUserReceivedService } from '../services'

class GetComplimentsUserReceivedController {
   async call(request: Request, response: Response): Promise<Response> {
      const { user_id }: Request = request

      const getComplimentsUserReceivedService: GetComplimentsUserReceivedService = new GetComplimentsUserReceivedService()

      const compliments: Compliment[] = await getComplimentsUserReceivedService.execute(user_id)

      return response.json(compliments)
   }
}

export default GetComplimentsUserReceivedController
