'use client'

import Image from 'next/image'
import * as S from './styled'
import { useRouter } from 'next/navigation'
import { IBasket } from '@/types'

interface IProps {
  baskets: Array<IBasket>
  basketIds: Array<number>
  setBasketIds: (args: Array<number>) => void
}

const EditHeader = ({ baskets, basketIds, setBasketIds }: IProps) => {
  const router = useRouter()

  const handleClickSelectAll = () => {
    if (basketIds?.length > 0) {
      setBasketIds([])
    } else {
      const ids = baskets?.map((item) => item?.id)
      setBasketIds(ids)
    }
  }

  return (
    <S.WriteHeaderWrapper>
      <S.IconWrapper onClick={() => router.back()}>
        <Image src='/cart/arrow-left.svg' alt='arrow-left' width={32} height={32} />
      </S.IconWrapper>
      <S.HeaderSelectButton onClick={handleClickSelectAll}>
        {basketIds?.length > 0 ? <>전체 해제</> : <>전체 선택</>}
      </S.HeaderSelectButton>
    </S.WriteHeaderWrapper>
  )
}

export default EditHeader
