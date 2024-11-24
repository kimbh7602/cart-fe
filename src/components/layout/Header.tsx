'use client'

import Image from 'next/image'
import * as S from './styled'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.IconWrapper>
        <Image src='/header-profile-icon.svg' alt='header-profile' width={32} height={32} />
      </S.IconWrapper>
    </S.HeaderWrapper>
  )
}

export default Header
