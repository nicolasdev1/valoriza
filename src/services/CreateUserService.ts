import { getCustomRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import { User } from '../entities'
import { AppError } from '../errors'
import { ICreateUserRequest } from '../interfaces'
import { UserRepository } from '../repositories'
import { passwordEncryption } from '../constants'

class CreateUserService {
    async execute({ name, email, password, admin }: ICreateUserRequest): Promise<User> {
        const userRepository: UserRepository = getCustomRepository(UserRepository)

        if (!email) {
            throw new AppError('Email is required')
        }

        const userAlreadyExists: User = await userRepository.findOne({
            email
        })

        if (userAlreadyExists) {
            throw new AppError('User already exists')
        }

        const passwordHash: string = await hash(password, passwordEncryption.SALT_LENGTH)

        const user: User = userRepository.create({
            name,
            email,
            password: passwordHash,
            admin
        })

        await userRepository.save(user)

        return user
    }
}

export default CreateUserService
