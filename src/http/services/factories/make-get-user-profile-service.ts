import { GetUserProfile } from '../get-user-profile'
import { PrismaUsersRepository } from '@/http/repositories/prisma/prisma-users-repositories'

export function makeGetUserProfileService() {
  const usersRepository = new PrismaUsersRepository()
  const service = new GetUserProfile(usersRepository)

  return service
}
