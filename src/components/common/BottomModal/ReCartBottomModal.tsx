'use client'

import Image from 'next/image'
import * as S from './BottomModal.styled'
import { ITemplate } from '@/types'

interface IProps {
  template: ITemplate | null
  onClickClose: () => void
  onClickCopy: () => void
  onClickIncomplete: () => void
}

const ReCartBottomModal = ({ template, onClickClose, onClickCopy, onClickIncomplete }: IProps) => {
  return (
    <S.Wrapper>
      <S.BottomModalWrapper>
        <S.BottomModalContainer>
          <S.TitleWrapper>
            <h3>{template?.name}</h3>
            <Image src='/cancel.svg' alt='cancel' width={24} height={24} onClick={onClickClose} />
          </S.TitleWrapper>
          <S.List>
            <S.ListItem onClick={onClickIncomplete}>
              <Image src='/refresh.svg' alt='refresh' width={24} height={24} />
              <p>완료되지 않은 상품만 다시 담기</p>
            </S.ListItem>
            <S.ListItem onClick={onClickCopy}>
              <Image src='/double-tick.svg' alt='double-tick' width={24} height={24} />
              <p>전체 상품 다시 담기</p>
            </S.ListItem>
          </S.List>
        </S.BottomModalContainer>
      </S.BottomModalWrapper>
    </S.Wrapper>
  )
}

export default ReCartBottomModal
