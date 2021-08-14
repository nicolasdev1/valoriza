import { getCustomRepository } from 'typeorm'

import { User } from '../entities'
import { UserRepository } from '../repositories'

class GetUsersService {

   async execute(): Promise<User[]> {
      const userRepository: UserRepository = getCustomRepository(UserRepository)

      const users: User[] = await userRepository.find()

      return users
   }

}

export default GetUsersService
