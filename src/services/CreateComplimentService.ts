import { getCustomRepository } from 'typeorm'

import { AppError } from '../errors'
import { Compliment, User } from '../entities'
import { IComplimentRequest } from '../interfaces'
import { ComplimentRepository, UserRepository } from '../repositories'

class CreateComplimentService {

   async execute({
      user_sender,
      user_receiver,
      tag_id,
      message
   }: IComplimentRequest): Promise<Compliment | never> {
      const complimentRepository: ComplimentRepository = getCustomRepository(ComplimentRepository)
      const userRepository: UserRepository = getCustomRepository(UserRepository)

      if (user_sender === user_receiver) {
         throw new AppError('You cannot send a compliment to yourself')
      }

      const userReceiverExists: User = await userRepository.findOne(user_receiver)

      if (!userReceiverExists) {
         throw new AppError(`User receiver does not exist`)
      }

      const compliment: Compliment = complimentRepository.create({
         user_sender,
         user_receiver,
         tag_id,
         message
      })

      await complimentRepository.save(compliment)

      return compliment
   }

}

export default CreateComplimentService
