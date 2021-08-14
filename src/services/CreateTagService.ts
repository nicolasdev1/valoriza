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

      const correctTagName: string = name.toLowerCase().replace(/\W/g, '-')

      const tagAlreadyExists: Tag = await tagRepository.findOne({ name: correctTagName })

      if (tagAlreadyExists) {
         throw new AppError(`Tag with name ${correctTagName} already exists`)
      }

      const tag: Tag = tagRepository.create({ name: correctTagName })

      await tagRepository.save(tag)

      return tag
   }

}

export default CreateTagService
