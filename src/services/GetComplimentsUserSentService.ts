import { getCustomRepository } from 'typeorm'
import { Compliment } from '../entities'
import { ComplimentRepository } from '../repositories'

class GetComplimentsUserSentService {
   async execute(user_id: string): Promise<Compliment[]> {
      const complimentRepository: ComplimentRepository = getCustomRepository(ComplimentRepository)

      const compliments: Compliment[] = await complimentRepository.findByUserSender(user_id)

      return compliments
   }
}

export default GetComplimentsUserSentService
