import { Request, Response } from 'express'

import { Compliment } from '../entities'
import { IComplimentRequest } from '../interfaces'
import { CreateComplimentService } from '../services'

class CreateComplimentController {

   async call(request: Request, response: Response): Promise<Response> {
      const {
         user_receiver,
         tag_id,
         message
      }: Omit<IComplimentRequest, "user_sender"> = request.body

      const { user_id: user_sender }: Request = request

      const createComplimentService: CreateComplimentService = new CreateComplimentService()

      const compliment: Compliment = await createComplimentService.execute({
         user_sender,
         user_receiver,
         tag_id,
         message
      })

      return response.json(compliment)
   }

}

export default CreateComplimentController
