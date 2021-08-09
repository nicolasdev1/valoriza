import { getCustomRepository } from 'typeorm'

import { User } from '../entities'
import { UserRepository } from '../repositories'

class GetUserByIdService {

   async execute(user_id: string): Promise<User> {
      const userRepository: UserRepository = getCustomRepository(UserRepository)

      const user: User = await userRepository.findOne(user_id)

      return user
   }

}

export default GetUserByIdService
