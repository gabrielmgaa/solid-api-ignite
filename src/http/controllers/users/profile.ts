import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-user-profile-use.case'
import { FastifyReply, FastifyRequest } from 'fastify'

// services ou caso de uso são o que contém a lógica
// repositories são que o contém a abstração da conexão com o banco
// controllers são para lidar para com as requisições HTTP e mandar resposta com o usuário

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  const getUserProfile = makeGetUserProfileUseCase()

  const { user } = await getUserProfile.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({
    user: {
      ...user,
      password_hash: undefined,
    },
  })
}
