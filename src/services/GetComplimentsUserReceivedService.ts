import { getCustomRepository } from 'typeorm'

import { Compliment } from '../entities'
import { ComplimentRepository } from '../repositories'

class GetComplimentsUserReceivedService {

   async execute(user_id: string): Promise<Compliment[]> {
      const complimentRepository: ComplimentRepository = getCustomRepository(ComplimentRepository)

      const compliments: Compliment[] = await complimentRepository.findByUserReceiver(user_id)

      return compliments
   }

}

export default GetComplimentsUserReceivedService
