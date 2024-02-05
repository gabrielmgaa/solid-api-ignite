import { PrismaGymsRepository } from '@/http/repositories/prisma/prisma-gyms-repositories'
import { SearchGymService } from '../search-gyms'

export function makeFetchNearbyGymService() {
  const gymsRepository = new PrismaGymsRepository()
  const service = new SearchGymService(gymsRepository)

  return service
}
