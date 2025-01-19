'use client'

import Image from 'next/image'
import * as S from './BottomModal.styled'
import { ITemplate } from '@/types'
import { cautionToast } from '@/utils'
import { useEffect } from 'react'
import { SHARED_IMAGE_URL } from '@/constants'

interface IProps {
  template: ITemplate | null
  onClickClose: () => void
  onStopShare: () => void
  onClickShare: () => void
}

const BottomModal = ({ template, onClickClose, onStopShare, onClickShare }: IProps) => {
  const handleClickShareUrl = () => {
    if (typeof window === 'undefined') return

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(window && `${window.location.origin}/shared/${template?.id}`)
        .then(onClickShare)
        .catch(() => {
          cautionToast('다시 시도해주세요!')
        })
    }
  }
  const handleClickShareKakao = () => {
    if (typeof window === 'undefined') return

    const { Kakao } = window

    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '까담 - 까먹지 말고 담자',
        description: '공유된 장바구니를 확인해보세요!',
        imageUrl: SHARED_IMAGE_URL,
        link: {
          mobileWebUrl: `${window.location.origin}/shared/${template?.id}`,
          webUrl: `${window.location.origin}/shared/${template?.id}`,
        },
      },
    })
    onClickShare()
  }

  const handleClickShareX = () => {
    if (typeof window === 'undefined') return

    const text = '텍스트텍스트 내용내용'

    window.open(
      'https://twitter.com/intent/tweet?text=' + text + '&url=' + `${window.location.origin}/shared/${template?.id}`,
    )
    onClickShare()
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { Kakao } = window

      if (!Kakao.isInitialized()) {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY)
      }
    }
  }, [])

  return (
    <S.Wrapper>
      <S.BottomModalWrapper>
        <S.BottomModalContainer>
          <S.TitleWrapper>
            <h3>{template?.name}</h3>
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
