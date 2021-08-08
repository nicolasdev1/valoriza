import { Request, Response } from 'express'

import { Compliment } from '../entities'
import { IComplimentRequest } from '../interfaces'
import { CreateComplimentService } from '../services'

class CreateComplimentController {
   async call(request: Request, response: Response): Promise<Response> {
      const {
         tag_id,
         user_sender,
         user_receiver,
         message
      }: IComplimentRequest = request.body

      const createComplimentService: CreateComplimentService = new CreateComplimentService()

      const compliment: Compliment = await createComplimentService.execute({
         tag_id,
         user_sender,
         user_receiver,
         message
      })

      return response.json(compliment)
   }
}

export default CreateComplimentController
