'use client'

import * as S from './Modal.styled'

interface IModal {
  title: string
  text: string
  submitButtonText: string
  onClickSubmitButton: () => void
  hasCancelButton: boolean
  cancelButtonText: string
  onClickCancelButton: () => void
  hasLink: boolean
  linkText: string
  onClickLink: () => void
}

const Modal = ({
  title,
  text,
  submitButtonText,
  onClickSubmitButton,
  hasCancelButton,
  cancelButtonText,
  onClickCancelButton,
  hasLink,
  linkText,
  onClickLink,
}: IModal) => {
  return (
    <S.Wrapper>
      <S.ModalWrapper>
        <S.ContentWrapper>
          <S.Title>{title}</S.Title>
          <S.Text>{text}</S.Text>
          <S.LinkText onClick={onClickLink}>{linkText}</S.LinkText>
        </S.ContentWrapper>
        <S.SubmitButton onClick={onClickSubmitButton}>{submitButtonText}</S.SubmitButton>
        {hasCancelButton && <S.CancelButton onClick={onClickCancelButton}>{cancelButtonText}</S.CancelButton>}
      </S.ModalWrapper>
    </S.Wrapper>
  )
}

export default Modal
