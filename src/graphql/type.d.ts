import { PrismaClient } from '@prisma/client'
import CustomUserTypeForSession from '@libs/types/customUserTypeForSession'
import { Request, Response } from 'express'

export type Context = {
  customData: string
  req: Request
  res: Response
  // client: PrismaClient
  // session: Session | null
  // user?: CustomUserTypeForSession | null
}
