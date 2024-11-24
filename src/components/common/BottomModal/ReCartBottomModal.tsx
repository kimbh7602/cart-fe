'use client'

import Image from 'next/image'
import * as S from './BottomModal.styled'
import { useAtom } from 'jotai'
import { bottomModalAtom, bottomModalListAtom } from '@/store'
import { IBottomModal } from '@/types'

interface IProps {
  onClickClose: () => void
  onClickCopy: () => void
  onClickIncomplete: () => void
}

const ReCartBottomModal = ({ onClickClose, onClickCopy, onClickIncomplete }: IProps) => {
  return (
    <S.Wrapper>
      <S.BottomModalWrapper>
        <S.BottomModalContainer>
          <S.TitleWrapper>
            <h3>$장바구니 N</h3>
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
