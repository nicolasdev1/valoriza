import { getCustomRepository } from 'typeorm'
import { classToPlain } from 'class-transformer'

import { Tag } from '../entities'
import { TagRepository } from '../repositories'

class GetTagsService {

   async execute(): Promise<Record<string, Tag>> {
      const tagsRepository: TagRepository = getCustomRepository(TagRepository)

      const tags: Tag[] = await tagsRepository.find()

      return classToPlain(tags)
   }

}

export default GetTagsService
