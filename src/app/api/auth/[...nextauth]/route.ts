import { postData } from '@/api'
import { BASE_API } from '@/constants'
import NextAuth, { User } from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import { cookies } from 'next/headers'

export const authOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  // callbacks: {
  //   async signIn({ user }: { user: User }) {
  //     const { name, email } = user

  //     const { data } = await postData({
  //       url: `${BASE_API}/login`,
  //       body: {
  //         email: email || 'asdf@asdf.asdf',
  //         provider: 'KAKAO',
  //         authIdentifier: '10',
  //         gender: 'M',
  //         ageRange: '10',
  //       },
  //     })

  //     const { accessToken, refreshToken } = data
  //     // 브라우저에 쿠키를 심어주는 것
  //     cookies().set('accessToken', accessToken)
  //     cookies().set('refreshToken', refreshToken)

  //     return true
  //   },
  // },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
