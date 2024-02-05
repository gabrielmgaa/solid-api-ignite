import { expect, describe, it, beforeEach } from 'vitest'

import { SearchGymService } from './search-gyms'
import { InMemoryGymsRepository } from '../repositories/in-memory/in-memory-gyms-repository'

let checkInsRepository: InMemoryGymsRepository
let sut: SearchGymService

describe('Fetch User Check-in History Service', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryGymsRepository()
    sut = new SearchGymService(checkInsRepository)
  })

  it('should be able to fetch check-in history', async () => {
    await checkInsRepository.create({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    await checkInsRepository.create({
      title: 'TypeScript Gym',
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    const { gyms } = await sut.handle({
      query: 'JavaScript Gym',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'JavaScript Gym' })])
  })

  it('should be able to fetch paginated check-in history', async () => {
    for (let i = 1; i <= 22; i++) {
      await checkInsRepository.create({
        title: `JavaScript Gym ${i}`,
        description: null,
        phone: null,
        latitude: -27.2092052,
        longitude: -49.6401091,
      })
    }

    const { gyms } = await sut.handle({
      query: 'JavaScript Gym',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'JavaScript Gym 21' }),
      expect.objectContaining({ title: 'JavaScript Gym 22' }),
    ])
  })
})
