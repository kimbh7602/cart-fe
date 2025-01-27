'use client'

import Image from 'next/image'
import * as S from './styled'
import Cart from './Cart'
import { ITemplate } from '@/types'

interface IHome {
  list: Array<ITemplate>
}

const FORM_LINK = 'https://forms.gle/hi3PEtVLFwHPEQVWA'

const HomeComponent = ({ list }: IHome) => {
  return (
    <S.Wrapper>
      <S.AdWrapper href={FORM_LINK} target='_blank' rel='noopener noreferrer'>
        <Image src='/home/ad-icon.svg' alt='ad-image' width={36} height={36} />
        <S.AdText>
          <p>까담은 지금 의견 담는 중</p>
          <b>설문 참여하고 커피 쿠폰 받자!</b>
        </S.AdText>
        <Image src='/arrow-right.svg' alt='arrow' width={24} height={24} />
      </S.AdWrapper>
      {list?.map((item: ITemplate) => (
        <Cart key={item?.id} template={item} />
      ))}
    </S.Wrapper>
  )
}

export default HomeComponent
