'use client'

import Image from 'next/image'
import * as S from './styled'
import { useRouter } from 'next/navigation'

interface ICartHeader {
  setIsOpen: (args: boolean) => void
  onClick?: () => void
}

const CartHeader = ({ setIsOpen, onClick }: ICartHeader) => {
  const router = useRouter()

  const handleClickBack = () => {
    if (onClick) {
      onClick()
      return
    }

    router.back()
  }

  return (
    <S.CartHeaderWrapper>
      <S.IconWrapper onClick={handleClickBack}>
        <Image src='/arrow-left.svg' alt='arrow-left' width={32} height={32} />
      </S.IconWrapper>
      <S.IconWrapper>
        <Image src='/more.svg' alt='more' width={24} height={24} onClick={() => setIsOpen(true)} />
      </S.IconWrapper>
    </S.CartHeaderWrapper>
  )
}

export default CartHeader
