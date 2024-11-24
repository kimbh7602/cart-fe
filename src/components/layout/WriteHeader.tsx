'use client'

import Image from 'next/image'
import * as S from './styled'
import { useRouter } from 'next/navigation'

interface IProps {
  hasTrash?: boolean
  onClickTrash?: () => void
}

const WriteHeader = ({ hasTrash, onClickTrash }: IProps) => {
  const router = useRouter()

  return (
    <S.WriteHeaderWrapper>
      <S.IconWrapper onClick={() => router.back()}>
        <Image src='/cart/arrow-left.svg' alt='arrow-left' width={32} height={32} />
      </S.IconWrapper>
      {hasTrash && (
        <S.IconWrapper onClick={onClickTrash}>
          <Image src='/cart/trash.svg' alt='trash' width={24} height={24} />
        </S.IconWrapper>
      )}
    </S.WriteHeaderWrapper>
  )
}

export default WriteHeader
