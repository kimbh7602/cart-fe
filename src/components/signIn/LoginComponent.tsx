'use client'

import Image from 'next/image'
import { isIOS } from 'react-device-detect'

import * as S from './styled'
import { useLayoutEffect } from 'react'
import { getTokens } from '@/utils'
import { useRouter } from 'next/navigation'
import { HOME } from '@/routes'

const LoginComponent = () => {
  const router = useRouter()

  useLayoutEffect(() => {
    const { accessToken } = getTokens()
    if (accessToken) {
      router.replace(HOME)
    }
  }, [router])

  return (
    <S.Wrapper>
      <S.BottomButtons>
        <h3>3초 만에 시작해 보세요!</h3>
        <S.Buttons>
          <S.KaKaoButton href='https://ggadam-dev.shop/oauth2/authorization/kakao'>
            <Image src='/kakao-logo.svg' width='18' height='18' alt='kakao' />
            <p>카카오 로그인</p>
          </S.KaKaoButton>

          {/* {isIOS && (
            <S.AppleButton>
              <Image src='/apple-logo.svg' width='18' height='18' alt='apple' />
              <p>Apple 로그인</p>
            </S.AppleButton>
          )} */}
        </S.Buttons>
        <S.CsButton>
          <p>문의하기</p>
        </S.CsButton>
      </S.BottomButtons>
    </S.Wrapper>
  )
}

export default LoginComponent
