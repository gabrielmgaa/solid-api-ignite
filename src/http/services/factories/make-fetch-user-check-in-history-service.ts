import { FetchUserCheckInsHistoryService } from '../fetch-user-check-ins-history'
import { PrismaCheckInRepository } from '@/http/repositories/prisma/prisma-check-in-repositories'

export function makeFetchNearbyGymService() {
  const checkInRepository = new PrismaCheckInRepository()
  const service = new FetchUserCheckInsHistoryService(checkInRepository)

  return service
}
