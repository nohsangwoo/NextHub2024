import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import NaverProvider from 'next-auth/providers/naver'
import NextAuth, { NextAuthOptions } from 'next-auth'
import jwt, { JwtPayload } from 'jsonwebtoken'
// import checkEmail from '@libs/server/checkEmail'
// import createUserForLogin from '@libs/server/createUserForLogin'
import KakaoProvider from 'next-auth/providers/kakao'
import { users } from './helpers/constants'

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET as string,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', placeholder: 'enter your email' },
        password: { label: 'Password', placeholder: 'enter your password' },
      },

      async authorize(credentials, req): Promise<any> {
        if (!credentials || !credentials.email || !credentials.password) {
          return null
        }
        const findedUser = users.find(item => item.email === credentials.email)
        if (!findedUser) {
          return null
        }

        if (findedUser?.password === credentials.password) {
          return findedUser
        }

        return null
      },
    }),

    // GoogleProvider({
    //   async profile(profile): Promise<any> {
    //     let userRole = 'Google User'

    //     const isEmailValidUserId = await checkEmail({
    //       email: profile?.email as string,
    //       type: userRole,
    //     })

    //     let isCreatedUserId: number | undefined = undefined
    //     // 2. if not valid, sign up
    //     if (!isEmailValidUserId) {
    //       isCreatedUserId = await createUserForLogin({
    //         NAME: profile?.name,
    //         EMAIL: profile?.email,
    //         TYPE: userRole,
    //         AVATAR_URL: profile?.picture,
    //       })
    //     }
    //     if (profile?.email === 'nsgr123@naver.com') {
    //       userRole = 'admin'
    //     }

    //     if (profile?.email)
    //       return {
    //         ...profile,
    //         id: profile.sub,
    //         role: userRole,
    //         userId: isEmailValidUserId ?? isCreatedUserId,
    //       }
    //   },
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),

    // NaverProvider({
    //   async profile(profile): Promise<any> {
    //     let userRole = 'Naver User'

    //     const id = profile.response.id
    //     const name = profile.response.name
    //     const email = profile.response.email
    //     const phone = profile.response.mobile

    //     const isEmailValidUserId = await checkEmail({
    //       email: email as string,
    //       type: userRole,
    //     })

    //     let isCreatedUserId: number | undefined = undefined
    //     // 2. if not valid, sign up
    //     if (!isEmailValidUserId) {
    //       isCreatedUserId = await createUserForLogin({
    //         NAME: name,
    //         EMAIL: email,
    //         PHONE: phone,
    //         TYPE: userRole,
    //       })
    //     }

    //     const profileForSession = {
    //       name,
    //       email,
    //       phone,
    //     }

    //     if (email)
    //       return {
    //         ...profileForSession,
    //         id: id,
    //         role: userRole,
    //         userId: isEmailValidUserId ?? isCreatedUserId,
    //       }
    //   },
    //   clientId: process.env.NAVER_CLIENT_ID as string,
    //   clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    // }),

    KakaoProvider({
      async profile(profile): Promise<any> {
        let userRole = 'Kakao User'
      },
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async jwt(params) {
      // jwt 토큰을 생성하는 역할을 합니다.
      const { token, user, account, profile, isNewUser } = params

      if (user) {
        token.user = user
      }
      return token
    },
    async session(params) {
      // 최종적으로 세션의 정보를 전달하는 역할을 합니다.
      const { session, token } = params

      // 토큰에 있는 정보를 세션에 저장합니다.(근데 너무 많아서 좀 추려야 할듯.)
      const userForSession = {
        // @ts-ignore
        name: token?.user?.name,
        // @ts-ignore
        email: token?.user?.email,
      }
      if (token.user) {
        // session.user = token.user
        session.user = userForSession
        // @ts-ignore
        session.user.role = token?.user?.role
        // @ts-ignore
        session.user.userId = token?.user?.userId
      }
      return session
    },
  },

  session: {
    strategy: 'jwt',
    // maxAge: 30 * 24 * 60 * 60, //30일
    // maxAge: 60, // 1분
    maxAge: 60 * 60 * 24 * 7, // 7일
  },
  jwt: {
    // jwt를 생성하는 방법을 정의합니다.
    async encode(parms) {
      const { token, secret } = parms

      return jwt.sign(token as any, process.env.JWT_ACCESS_SECRET as string)
    },
    async decode({ secret, token }): Promise<any> {
      return jwt.verify(
        token as string,
        process.env.JWT_ACCESS_SECRET as string,
      ) as JwtPayload
    },
  },
}

export default NextAuth(authOptions)
