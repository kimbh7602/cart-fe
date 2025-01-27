'use client'

import Image from 'next/image'
import * as S from './styled'
import { deleteData } from '@/api'
import { BASE_API } from '@/constants'
import { useRouter } from 'next/navigation'
import { CART_WRITE } from '@/routes'
import { ITemplate } from '@/types'
import { getIconSrc } from '@/utils'

interface ITitle {
  template: ITemplate | null
  id: string
  isDeleteOpen: boolean
  setIsDeleteOpen: (args: boolean) => void
  isShared: boolean
}

const SharedTitle = ({ template, id, isDeleteOpen, setIsDeleteOpen, isShared }: ITitle) => {
  const router = useRouter()

  const writeCart = () => {
    router.push(`${CART_WRITE}/${id}`)
  }

  return (
    <S.CartTitleWrapper>
      <S.CartTitle>
        <Image src={getIconSrc(template?.thumbnailIndex)} alt='cart-image' width={56} height={56} />
        <h3>까담</h3>
        <S.ShareBadge $isShared={isShared}>{isShared ? <p>보기 전용</p> : <p>비공개</p>}</S.ShareBadge>
      </S.CartTitle>
    </S.CartTitleWrapper>
  )
}

export default SharedTitle
