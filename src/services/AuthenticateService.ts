import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'

import { User } from '../entities'
import { AppError } from '../errors'
import { UserRepository } from '../repositories'
import { IAuthenticateRequest } from '../interfaces'


class AuthenticateService {

   async execute({ email, password }: IAuthenticateRequest): Promise<string | never> {
      const userRepository: UserRepository = getCustomRepository(UserRepository)

      const user: User = await userRepository.findOne({ email })

      if (!user) {
         throw new AppError('Email/password incorrect')
      }

      const isValidPassword: boolean = await compare(password, user.password)

      if (!isValidPassword) {
         throw new AppError('Email/password incorrect')
      }

      const token: string = sign({ email: user.email },
                                 process.env.JWT_PRIVATE_KEY,
                                 { subject: user.id, expiresIn: '1d' })

      return token
   }

}

export default AuthenticateService
