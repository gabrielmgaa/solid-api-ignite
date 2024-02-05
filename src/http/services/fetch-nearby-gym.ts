import { Gym } from '@prisma/client'
import { GymsRepository } from '../repositories/gyms-repository'

interface FetchNearbyGymServiceRequest {
  userLatitude: number
  userLongitude: number
}

interface FetchNearbyGymServiceResponse {
  gyms: Gym[]
}

export class FetchNearbyGymService {
  constructor(private gymsRepository: GymsRepository) {}

  async handle({
    userLatitude,
    userLongitude,
  }: FetchNearbyGymServiceRequest): Promise<FetchNearbyGymServiceResponse> {
    const gyms = await this.gymsRepository.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    })

    return {
      gyms,
    }
  }
}
