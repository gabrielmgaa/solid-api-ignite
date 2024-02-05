import { PrismaGymsRepository } from '@/http/repositories/prisma/prisma-gyms-repositories'
import { CreateGymService } from '../create-gym'

export function makeCreateGymService() {
  const gymsRepository = new PrismaGymsRepository()
  const service = new CreateGymService(gymsRepository)

  return service
}
