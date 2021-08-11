import { Request, Response } from 'express'

import { Tag } from '../entities'
import { GetAllTagsService } from '../services'

class GetTagsController {

   async call(request: Request, response: Response): Promise<Response> {
      const getAllTagsService: GetAllTagsService = new GetAllTagsService()

      const tags: Record<string, Tag> = await getAllTagsService.execute()

      return response.json(tags)
   }

}

export default GetTagsController
