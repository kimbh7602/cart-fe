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
}

const CartTitle = ({ template, id, isDeleteOpen, setIsDeleteOpen }: ITitle) => {
  const router = useRouter()

  const writeCart = () => {
    router.push(`${CART_WRITE}/${id}`)
  }

  return (
    <S.CartTitleWrapper>
      <S.CartTitle>
        <Image src={getIconSrc(template?.thumbnailIndex)} alt='cart-image' width={56} height={56} />
        <h3>{template?.name}</h3>
        <S.ShareBadge $isPublic={template?.isPublic}>
          <p>{template?.isPublic ? '공유 중' : '비공개'}</p>
        </S.ShareBadge>
      </S.CartTitle>
      <S.CartTitleButtons>
        <p onClick={writeCart}>수정</p>
        <div />
        <p onClick={() => setIsDeleteOpen(true)}>삭제</p>
      </S.CartTitleButtons>
    </S.CartTitleWrapper>
  )
}

export default CartTitle
