'use client'

import Image from 'next/image'
import * as S from './BottomModal.styled'
import { ITemplate } from '@/types'

interface IProps {
  template: ITemplate | null
  onClickClose: () => void
  onClickShare: () => void
  onClickReCart: () => void
  onClickDelete: () => void
}

const BottomModal = ({ template, onClickClose, onClickShare, onClickReCart, onClickDelete }: IProps) => {
  return (
    <S.Wrapper>
      <S.BottomModalWrapper>
        <S.BottomModalContainer>
          <S.TitleWrapper>
            <h3>{template?.name}</h3>
            <Image src='/cancel.svg' alt='cancel' width={24} height={24} onClick={onClickClose} />
          </S.TitleWrapper>
          <S.List>
            <S.ListItem onClick={onClickShare}>
              <Image src='/share.svg' alt='share' width={24} height={24} />
              <p>공유하기</p>
            </S.ListItem>
            <S.ListItem onClick={onClickReCart}>
              <Image src='/basket.svg' alt='basket' width={24} height={24} />
              <p>다시 장보기</p>
            </S.ListItem>
            <S.ListItem>
              <Image src='/success.svg' alt='success' width={24} height={24} />
              <p>담긴 리스트 모두 완료하기</p>
            </S.ListItem>
            <S.ListItem $isRed={true} onClick={onClickDelete}>
              <Image src='/cancel-red.svg' alt='cancel' width={24} height={24} />
              <p>장바구니 삭제하기</p>
            </S.ListItem>
          </S.List>
        </S.BottomModalContainer>
      </S.BottomModalWrapper>
    </S.Wrapper>
  )
}

export default BottomModal
