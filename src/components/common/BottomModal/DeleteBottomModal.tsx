'use client'

import Image from 'next/image'
import * as S from './BottomModal.styled'

interface IProps {
  onClickClose: () => void
  onClickDelete: () => void
  onClickIncomplete: () => void
}

const DeleteBottomModal = ({ onClickClose, onClickDelete, onClickIncomplete }: IProps) => {
  const handleClickInComplete = async () => {
    onClickIncomplete()
    onClickDelete()
  }

  return (
    <S.Wrapper>
      <S.BottomModalWrapper>
        <S.BottomModalContainer>
          <S.TitleWrapper>
            <h3>장바구니를 삭제할까요?</h3>
          </S.TitleWrapper>
          <S.List>
            <S.ListItem onClick={handleClickInComplete}>
              <Image src='/refresh.svg' alt='refresh' width={24} height={24} />
              <p>완료되지 않은 상품만 다시 담기</p>
            </S.ListItem>
            <S.ListItem $isRed={true} onClick={onClickDelete}>
              <Image src='/cancel-red.svg' alt='cancel' width={24} height={24} />
              <p>장바구니 삭제하기</p>
            </S.ListItem>
          </S.List>
          <S.ButtonsWrapper>
            <S.ConfirmButton onClick={onClickClose}>닫기</S.ConfirmButton>
          </S.ButtonsWrapper>
        </S.BottomModalContainer>
      </S.BottomModalWrapper>
    </S.Wrapper>
  )
}

export default DeleteBottomModal
