import { expect, describe, it, beforeEach } from 'vitest'

import { CreateGymService } from './create-gym'
import { GymsRepository } from '../repositories/gyms-repository'
import { InMemoryGymsRepository } from '../repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: GymsRepository
let sut: CreateGymService

describe('Create Gym Service', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymService(gymsRepository)
  })

  it('should to register', async () => {
    const { gym } = await sut.handle({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
