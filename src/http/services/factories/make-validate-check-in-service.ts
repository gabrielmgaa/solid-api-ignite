import { PrismaCheckInRepository } from '@/http/repositories/prisma/prisma-check-in-repositories'
import { ValidateCheckInService } from '../validate-check-in'

export function makeFetchNearbyGymService() {
  const checkInRepository = new PrismaCheckInRepository()

  const service = new ValidateCheckInService(checkInRepository)

  return service
}
