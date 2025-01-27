'use client'

import * as S from './styled'
import { deleteData, fetchData } from '@/api'
import EditHeader from '@/components/layout/EditHeader'
import { BASE_API } from '@/constants'
import useCheckToken from '@/hooks/useCheckToken'
import { isLoadingAtom } from '@/store'
import { IBasket } from '@/types'
import { cautionToast, getTokens, successToast } from '@/utils'
import { useAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import Basket from './Basket'
import _ from 'lodash'
import DeleteBasketsBottomModal from '@/components/common/BottomModal/DeleteBasketsBottomModal'
import { useRouter } from 'next/navigation'
import { CART } from '@/routes'

interface IProps {
  id: string
}

const EditContainer = ({ id }: IProps) => {
  const router = useRouter()
  const [, setIsLoading] = useAtom(isLoadingAtom)
  const [basketIds, setBasketIds] = useState<Array<number>>([])
  const [baskets, setBaskets] = useState<Array<IBasket>>([])
  const [isOpen, setIsOpen] = useState(false)
  const { accessToken } = getTokens()
  const { checkToken } = useCheckToken()

  const getBaskets = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/baskets?templateId=${id}`,
        accessToken: accessToken,
      })

      setBaskets(data?.result)
      setIsLoading(false)
    } catch (e: any) {
      console.log(e)
      checkToken(e?.response?.data?.code)
      setIsLoading(false)
    }
  }, [id, setIsLoading])

  const handleClickDeleteOpen = () => {
    setIsOpen(true)
  }

  const handleClickDeleteClose = () => {
    setIsOpen(false)
  }

  const handleClickDelete = async () => {
    setIsLoading(true)
    try {
      await deleteData({
        url: `${BASE_API}/baskets`,
        body: {
          basketIds: basketIds,
        },
        accessToken: accessToken,
      })

      setBasketIds([])
      getBaskets()
      setIsOpen(false)
      setIsLoading(false)
      successToast('선택한 상품 삭제 완료')
      router.back()
    } catch (e: any) {
      console.log(e)
      checkToken(e?.response?.data?.code)
      setIsLoading(false)
      cautionToast('삭제에 실패했어요')
    }
  }

  useEffect(() => {
    if (id) {
      getBaskets()
    }
  }, [getBaskets, id])

  return (
    <>
      <EditHeader baskets={baskets} basketIds={basketIds} setBasketIds={setBasketIds} />
      <S.ContentsWrapper>
        <S.BasketsWrapper>
          {baskets?.map((basket, index) => (
            <Basket key={index} basket={basket} basketIds={basketIds} setBasketIds={setBasketIds} />
          ))}
        </S.BasketsWrapper>
      </S.ContentsWrapper>
      <S.BottomSheet>
        <S.DeleteButton onClick={handleClickDeleteOpen} disabled={_.isEmpty(basketIds)}>
          선택 삭제
        </S.DeleteButton>
      </S.BottomSheet>
      {isOpen && <DeleteBasketsBottomModal onClickClose={handleClickDeleteClose} onClickDelete={handleClickDelete} />}
    </>
  )
}

export default EditContainer
