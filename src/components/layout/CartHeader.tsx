'use client'

import Image from 'next/image'
import * as S from './styled'
import { useRouter } from 'next/navigation'

interface ICartHeader {
  setIsOpen: (args: boolean) => void
}

const CartHeader = ({ setIsOpen }: ICartHeader) => {
  const router = useRouter()

  return (
    <S.CartHeaderWrapper>
      <S.IconWrapper onClick={() => router.back()}>
        <Image src='/arrow-left.svg' alt='arrow-left' width={32} height={32} />
      </S.IconWrapper>
      <S.IconWrapper>
        <Image src='/more.svg' alt='more' width={24} height={24} onClick={() => setIsOpen(true)} />
      </S.IconWrapper>
    </S.CartHeaderWrapper>
  )
}

export default CartHeader
