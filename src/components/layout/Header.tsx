'use client'

import Image from 'next/image'
import * as S from './styled'
import { useRouter } from 'next/navigation'
import { MY_PAGE } from '@/routes'

const Header = () => {
  const router = useRouter()

  const handleClickProfile = () => {
    router.push(MY_PAGE)
  }

  return (
    <S.HeaderWrapper>
      <S.IconWrapper onClick={handleClickProfile}>
        <Image src='/header-profile-icon.svg' alt='header-profile' width={32} height={32} />
      </S.IconWrapper>
    </S.HeaderWrapper>
  )
}

export default Header
