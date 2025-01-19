'use client'

import { ITemplate } from '@/types'
import * as S from './styled'
import Input from '@/components/common/Input'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'
import { putData } from '@/api'
import { BASE_API } from '@/constants'
import { useRouter } from 'next/navigation'
import { CART } from '@/routes'
import { cautionToast, getIconSrc, getTokens, successToast } from '@/utils'

interface IProps {
  id: string
  template: ITemplate | null
}

const WriteComponent = ({ id, template }: IProps) => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [selectedIcon, setSelectedIcon] = useState(1)
  const [, setIsLoading] = useAtom(isLoadingAtom)
  const { accessToken } = getTokens()

  const ICON_LIST = Array.from({ length: 16 }, (_, i) => i + 1)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event?.target?.value

    if (value?.length > 30) {
      value = value?.slice(0, 30)
    }

    setName(value)
  }

  const handleSubmitTemplate = async () => {
    setIsLoading(true)
    try {
      await putData({
        url: `${BASE_API}/template/${id}`,
        body: {
          name: name,
          thumbnailIndex: selectedIcon,
        },
        accessToken: accessToken,
      })

      successToast(`${name} 수정 완료`)
      router.push(`${CART}/${id}`)
      setIsLoading(false)
    } catch (e) {
      cautionToast('수정에 실패했어요')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (template) {
      setName(template?.name)
      setSelectedIcon(template?.thumbnailIndex)
    }
  }, [template])

  return (
    <S.Wrapper>
      <S.Title>장바구니 수정</S.Title>
      <S.InputWrapper>
        <S.Label>이름</S.Label>
        <Input value={name} onChange={handleInput} isActive={true} />
        <S.Count>{name?.length} / 30</S.Count>
      </S.InputWrapper>
      <S.IconsWrapper>
        {ICON_LIST?.map((idx) => (
          <S.Icon
            priority
            key={idx}
            onClick={() => setSelectedIcon(idx)}
            $selected={selectedIcon === idx}
            src={getIconSrc(idx)}
            alt='cart-image'
            width='62'
            height='62'
          />
        ))}
      </S.IconsWrapper>
      <S.Button onClick={handleSubmitTemplate}>완료</S.Button>
    </S.Wrapper>
  )
}

export default WriteComponent
