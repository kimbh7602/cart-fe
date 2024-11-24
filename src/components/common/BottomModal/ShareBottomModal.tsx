'use client'

import Image from 'next/image'
import * as S from './BottomModal.styled'

interface IProps {
  onClickClose: () => void
  onStopShare: () => void
  onClickShare: () => void
}

const BottomModal = ({ onClickClose, onStopShare, onClickShare }: IProps) => {
  const handleClickShareUrl = () => {
    onClickShare()
  }
  const handleClickShareKakao = () => {
    onClickShare()
  }
  const handleClickShareX = () => {
    onClickShare()
  }

  return (
    <S.Wrapper>
      <S.BottomModalWrapper>
        <S.BottomModalContainer>
          <S.TitleWrapper>
            {/* <h3>{title}</h3> */}
            <h3>$장바구니 N</h3>
            <Image src='/cancel.svg' alt='cancel' width={24} height={24} onClick={onClickClose} />
          </S.TitleWrapper>
          <S.List>
            <S.ListItem onClick={handleClickShareUrl}>
              <Image src='/share.svg' alt='share' width={24} height={24} />
              <p>URL 복사하기</p>
            </S.ListItem>
            <S.ListItem onClick={handleClickShareKakao}>
              <Image src='/home/kakao-talk.svg' alt='basket' width={24} height={24} />
              <p>카카오톡으로 공유하기</p>
            </S.ListItem>
            <S.ListItem onClick={handleClickShareX}>
              <Image src='/home/twitter.svg' alt='success' width={24} height={24} />
              <p>X로 공유하기</p>
            </S.ListItem>
            <S.ListItem $isRed={true} onClick={onStopShare}>
              <Image src='/cancel-red.svg' alt='cancel' width={24} height={24} />
              <p>공유 중지하기</p>
            </S.ListItem>
          </S.List>
        </S.BottomModalContainer>
      </S.BottomModalWrapper>
    </S.Wrapper>
  )
}

export default BottomModal
