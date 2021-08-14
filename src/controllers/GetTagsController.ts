import { Request, Response } from 'express'

import { Tag } from '../entities'
import { GetTagsService } from '../services'

class GetTagsController {

   async call(request: Request, response: Response): Promise<Response> {
      const getTagsService: GetTagsService = new GetTagsService()

      const tags: Record<string, Tag> = await getTagsService.execute()

      return response.json(tags)
   }

}

export default GetTagsController
