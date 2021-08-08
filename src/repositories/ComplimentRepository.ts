import { EntityRepository, Repository } from 'typeorm'

import { Compliment } from '../entities'
import { IComplimentRepository } from '../interfaces'

@EntityRepository(Compliment)
class ComplimentRepository extends Repository<Compliment> implements IComplimentRepository {
   async findByUserReceiver(user_id: string): Promise<Compliment[]> {
      const complimentsReceived: Promise<Compliment[]> = this.find({ user_receiver: user_id })

      return complimentsReceived
   }

   async findByUserSender(user_id: string): Promise<Compliment[]> {
      const complimentsSent: Promise<Compliment[]> = this.find({ user_sender: user_id })

      return complimentsSent
   }
}

export default ComplimentRepository
