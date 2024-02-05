import { PrismaCheckInRepository } from '@/http/repositories/prisma/prisma-check-in-repositories'
import { PrismaGymsRepository } from '@/http/repositories/prisma/prisma-gyms-repositories'
import { CheckInService } from '../check-in'

export function makeCheckInService() {
  const checkInRepository = new PrismaCheckInRepository()
  const gymsRepository = new PrismaGymsRepository()

  const service = new CheckInService(checkInRepository, gymsRepository)

  return service
}
