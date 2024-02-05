import { UsersRepository } from './../repositories/users-repository'
import { expect, describe, it, beforeEach } from 'vitest'

import { hash } from 'bcryptjs'

import { InMemoryUsersRepository } from '../repositories/in-memory/in-memory-users-repository'
import { GetUserProfile } from './get-user-profile'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

let usersRepository: UsersRepository
let sut: GetUserProfile

describe('GetUserProfile Service', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUserProfile(usersRepository)
  })

  it('should be able to get user profile', async () => {
    const createdUser = await usersRepository.create({
      email: 'user@example.com',
      name: 'Jhon Doe',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.handle({
      userId: createdUser.id,
    })

    expect(user.name).toEqual('Jhon Doe')
  })

  it('should not be able to get user profile with wrong id', async () => {
    await expect(() =>
      sut.handle({
        userId: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
