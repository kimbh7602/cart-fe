'use client'

import { IBasket, ITemplate } from '@/types'
import * as S from './styled'
import Input from '@/components/common/Input'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { deleteData, putData } from '@/api'
import { BASE_API } from '@/constants'
import { useRouter } from 'next/navigation'
import DeleteBasketBottomModal from '../common/BottomModal/DeleteBasketBottomModal'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'
import { cautionToast, successToast } from '@/utils'

interface IProps {
  id: string
  basket: IBasket | null
  isDeleteOpen: boolean
  setIsDeleteOpen: (args: boolean) => void
}

const PLACE_HOLDER = '상품명을 입력해 주세요'

const WriteComponent = ({ id, basket, isDeleteOpen, setIsDeleteOpen }: IProps) => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [count, setCount] = useState(1)
  const [, setIsLoading] = useAtom(isLoadingAtom)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event?.target?.value)
  }

  const handleInputCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (count <= 1) {
      cautionToast('상품을 1개 이상 담아주세요!')
      setCount(1)
      return
    }

    if (count >= 9999) {
      cautionToast('상품은 9,999개까지만 담을 수 있어요!')
      setCount(9999)
      return
    }

    setCount(Number(event?.target?.value))
  }

  const handleClickPlus = () => {
    if (count >= 9999) {
      cautionToast('상품은 9,999개까지만 담을 수 있어요!')
      setCount(9999)
      return
    }
    setCount(count + 1)
  }

  const handleClickMinus = () => {
    if (count <= 1) {
      cautionToast('상품을 1개 이상 담아주세요!')
      setCount(1)
      return
    }
    setCount(count - 1)
  }

  const deleteBasket = async () => {
    setIsLoading(true)
    try {
      await deleteData({
        url: `${BASE_API}/baskets/${id}`,
      })

      successToast(`${name} 삭제 완료`)
      router.back()
      setIsLoading(false)
    } catch (e) {
      cautionToast('수정에 실패했어요')
      setIsLoading(false)
    }
  }

  const handleSubmitBasket = async () => {
    setIsLoading(true)
    try {
      await putData({
        url: `${BASE_API}/basket`,
        body: {
          content: name,
          count: count,
          basketId: id,
        },
      })

      successToast(`${name} 수정 완료`)
      router.back()
      setIsLoading(false)
    } catch (e) {
      cautionToast('수정에 실패했어요')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (basket) {
      setName(basket?.name)
      setCount(basket?.count)
    }
  }, [basket])

  return (
    <>
      <S.Wrapper>
        <S.Title>상품 수정</S.Title>
        <S.InputWrapper>
          <S.Label>이름</S.Label>
          <Input value={name} onChange={handleInput} placeholder={PLACE_HOLDER} isActive={false} />
          <S.CountInputWrapper>
            <p>수량</p>
            <S.CountWrapper>
              {count <= 1 ? (
                <Image src='/minus-disabled.svg' alt='minus' width={24} height={24} />
              ) : (
                <Image src='/minus.svg' alt='minus' width={24} height={24} onClick={handleClickMinus} />
              )}
              <input type='number' inputMode='numeric' min={1} max={9999} value={count} onChange={handleInputCount} />
              <Image src='/plus.svg' alt='plus' width={24} height={24} onClick={handleClickPlus} />
            </S.CountWrapper>
          </S.CountInputWrapper>
        </S.InputWrapper>
        <S.Button onClick={handleSubmitBasket}>완료</S.Button>
      </S.Wrapper>
      {isDeleteOpen && (
        <DeleteBasketBottomModal onClickClose={() => setIsDeleteOpen(false)} onClickDelete={deleteBasket} />
      )}
    </>
  )
}

export default WriteComponent
