'use client'

import Image from 'next/image'
import { isIOS } from 'react-device-detect'

import * as S from './styled'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'
import { login } from '@/api'

const LoginComponent = () => {
  const [, setIsLoading] = useAtom(isLoadingAtom)

  const handleClickKaKao = async () => {
    console.log('click kakao')
    setIsLoading(true)
    try {
      const { data } = await login({
        url: `https://ggadam-dev.shop/oauth2/authorization/kakao`,
      })

      console.log(data)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }

  return (
    <S.Wrapper>
      <S.BottomButtons>
        <h3>3초 만에 시작해 보세요!</h3>
        <S.Buttons>
          <S.KaKaoButton onClick={handleClickKaKao}>
            <Image src='/kakao-logo.svg' width='18' height='18' alt='kakao' />
            <p>카카오 로그인</p>
          </S.KaKaoButton>
          {/* <S.KaKaoButton  href='https://ggadam-dev.shop/oauth2/authorization/kakao'>
            <Image src='/kakao-logo.svg' width='18' height='18' alt='kakao' />
            <p>카카오 로그인</p>
          </S.KaKaoButton> */}

          {isIOS && (
            <S.AppleButton>
              <Image src='/apple-logo.svg' width='18' height='18' alt='apple' />
              <p>Apple 로그인</p>
            </S.AppleButton>
          )}
        </S.Buttons>
        <S.CsButton>
          <p>문의하기</p>
        </S.CsButton>
      </S.BottomButtons>
    </S.Wrapper>
  )
}

export default LoginComponent
