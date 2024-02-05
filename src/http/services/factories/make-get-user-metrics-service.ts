import { PrismaCheckInRepository } from '@/http/repositories/prisma/prisma-check-in-repositories'
import { GetUserMetricsService } from '../get-user-metrics'

export function makeFetchNearbyGymService() {
  const checkInRepository = new PrismaCheckInRepository()
  const service = new GetUserMetricsService(checkInRepository)

  return service
}
