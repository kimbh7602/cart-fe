'use client'

import Image from 'next/image'
import * as S from './styled'

const NotShared = () => {
  return (
    <S.EmptyWrapper>
      <Image src='/cart/not-shared.png' alt='not-shared-image' width={160} height={160} priority />
      <S.EmptyTitle>장바구니를 볼 수 없어요</S.EmptyTitle>
      <S.EmptyText>장바구니를 삭제했거나 공유를 중지한 장바구니예요</S.EmptyText>
    </S.EmptyWrapper>
  )
}

export default NotShared
