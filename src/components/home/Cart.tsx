'use client'

import Image from 'next/image'
import * as S from './styled'
import { useMemo, useState } from 'react'
import { useAtom } from 'jotai'
import { bottomModalAtom } from '@/store'
import { ITemplate } from '@/types'
import { useRouter } from 'next/navigation'
import _ from 'lodash'
import { getIconSrc } from '@/utils'

interface ICart {
  template: ITemplate
}

const Cart = ({ template }: ICart) => {
  const router = useRouter()

  const progressValue = useMemo(() => {
    return _.round((template?.percent || 0) * 3.6) || 0
  }, [template?.percent])

  const goToCart = () => {
    router.push(`/cart/${template?.id}`)
  }

  return (
    <>
      <S.ContentWrapper onClick={goToCart} $isShared={template?.isPublic}>
        <S.ProgressCircle $value={progressValue}>
          <S.InnerCircle>
            <Image src={getIconSrc(template?.thumbnailIndex)} alt='cart-image' width={56} height={56} />
            {template?.percent === 100 && <S.Stamp src='/stamp.svg' alt='stamp' width={56} height={56} />}
          </S.InnerCircle>
        </S.ProgressCircle>
        <S.ContentText>
          <h4>{template?.name}</h4>
          <p>
            {template?.preview?.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </p>
        </S.ContentText>
        {template?.isPublic && (
          <S.ShareBadge>
            <p>공유 중</p>
          </S.ShareBadge>
        )}
      </S.ContentWrapper>
    </>
  )
}

export default Cart
