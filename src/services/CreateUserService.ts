import { getCustomRepository } from 'typeorm'

import { UserRepository } from '../repositories'
import { IUserRequest } from '../interfaces'
import { User } from '../entities'

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest): Promise<User> {
        const userRepository: UserRepository = getCustomRepository(UserRepository)

        if (!email) {
            throw new Error('Email is required')
        }

        const userAlreadyExists: User = await userRepository.findOne({
            email
        })

        if (userAlreadyExists) {
            throw new Error('User already exists')
        }

        const user: User = userRepository.create({
            name,
            email,
            admin
        })

        await userRepository.save(user)
        return user
    }
}

export default CreateUserService
