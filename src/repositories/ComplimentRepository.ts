import { EntityRepository, Repository } from 'typeorm'

import { Compliment } from '../entities'

@EntityRepository(Compliment)
class ComplimentRepository extends Repository<Compliment> {

   async findByUserReceiver(user_receiver: string): Promise<Compliment[]> {
      const complimentsReceived: Promise<Compliment[]> = this.find({
         where: { user_receiver }
      })

      return complimentsReceived
   }

   async findByUserSender(user_sender: string): Promise<Compliment[]> {
      const complimentsSent: Promise<Compliment[]> = this.find({
         where: { user_sender }
      })

      return complimentsSent
   }

}

export default ComplimentRepository
