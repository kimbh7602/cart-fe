'use client'

import Image from 'next/image'
import * as S from './styled'

const Empty = () => {
  return (
    <S.EmptyWrapper>
      <Image src='/home/home-empty.png' alt='empty-image' width={160} height={160} priority />
      <S.EmptyTitle>까먹기 전에 담아보세요!</S.EmptyTitle>
      <S.EmptyText>아래 화면의 + 버튼으로 담아보세요</S.EmptyText>
    </S.EmptyWrapper>
  )
}

export default Empty
