'use client'

import * as S from './BottomModal.styled'

interface IProps {
  onClickClose: () => void
  onClickDelete: () => void
}

const DeleteBasketBottomModal = ({ onClickClose, onClickDelete }: IProps) => {
  return (
    <S.Wrapper>
      <S.BottomModalWrapper>
        <S.BottomModalContainer>
          <S.TitleWrapper>
            <h3>이 상품을 장바구니에서 삭제할까요?</h3>
          </S.TitleWrapper>
          <S.ButtonsWrapper>
            <S.ConfirmButton onClick={onClickDelete}>삭제</S.ConfirmButton>
            <S.CancelButtonText onClick={onClickClose}>닫기</S.CancelButtonText>
          </S.ButtonsWrapper>
        </S.BottomModalContainer>
      </S.BottomModalWrapper>
    </S.Wrapper>
  )
}

export default DeleteBasketBottomModal
