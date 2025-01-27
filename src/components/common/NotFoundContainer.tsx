'use client'

import Image from 'next/image'
import * as S from './NotFound.styled'
import WriteHeader from '../layout/WriteHeader'

const NotFoundContainer = () => {
  return (
    <>
      <WriteHeader hasBorderBottom={true} />
      <S.EmptyWrapper>
        <Image src='/not-found.png' alt='not-found-image' width={160} height={160} priority />
        <S.EmptyTitle>앗, 페이지를 찾을 수 없어요!</S.EmptyTitle>
        <S.EmptyText>
          페이지가 존재하지 않거나
          <br />
          사용할 수 없는 페이지입니다.
        </S.EmptyText>
      </S.EmptyWrapper>
    </>
  )
}

export default NotFoundContainer
