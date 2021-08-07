import { Request, Response } from 'express'

import { Tag } from '../entities'
import { ITagRequest } from '../interfaces'
import { CreateTagService } from '../services'

class CreateTagController {
    async call(request: Request, response: Response) {
        const { name }: ITagRequest = request.body

        const createTagService: CreateTagService = new CreateTagService()

        const tag: Tag = await createTagService.execute({ name })

        return response.json(tag)
    }
}

export default CreateTagController
