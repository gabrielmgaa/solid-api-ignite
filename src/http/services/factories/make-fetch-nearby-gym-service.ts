import { PrismaGymsRepository } from '@/http/repositories/prisma/prisma-gyms-repositories'
import { FetchNearbyGymService } from '../fetch-nearby-gym'

export function makeFetchNearbyGymService() {
  const gymsRepository = new PrismaGymsRepository()
  const service = new FetchNearbyGymService(gymsRepository)

  return service
}
