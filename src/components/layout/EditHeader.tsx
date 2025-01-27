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
      <S.IconWrapper onClick={handleClickSelectAll}>
        {basketIds?.length > 0 ? (
          <Image src='/cart/unselect-all-icon.svg' alt='select-all' width={48} height={48} />
        ) : (
          <Image src='/cart/select-all-icon.svg' alt='select-all' width={48} height={48} />
        )}
      </S.IconWrapper>
    </S.WriteHeaderWrapper>
  )
}

export default EditHeader
