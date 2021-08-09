import { getCustomRepository } from 'typeorm'

import { Tag } from '../entities'
import { AppError } from '../errors'
import { ITagRequest } from '../interfaces'
import { TagRepository } from '../repositories'

class CreateTagService {

   async execute({ name }: ITagRequest): Promise<Tag | never> {
      const tagRepository: TagRepository = getCustomRepository(TagRepository)

      if (!name) {
         throw new AppError('Name is required')
      }

      const tagAlreadyExists = await tagRepository.findOne({ name })

      if (tagAlreadyExists) {
         throw new AppError(`Tag with name ${name} already exists`)
      }

      const tag = tagRepository.create({ name })

      await tagRepository.save(tag)

      return tag
   }

}

export default CreateTagService
