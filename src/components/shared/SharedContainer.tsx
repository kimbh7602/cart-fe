'use client'

import { useCallback, useEffect, useState } from 'react'
import CartContents from '@/components/cart/CartContents'
import CartTitle from '@/components/cart/CartTitle'
import CartHeader from '@/components/layout/CartHeader'
import { fetchData } from '@/api'
import { BASE_API } from '@/constants'
import { IBasket, ITemplate, ITemplateBasket } from '@/types'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'
import Loader from '@/components/common/Loader'
import useCheckToken from '@/hooks/useCheckToken'
import { getTokens } from '@/utils'
import SharedContents from './SharedContents'
import SharedTitle from './SharedTitle'
import BottomSheet from './BottomSheet'
import { ERROR_CODE } from '@/constants/errors'
import NotShared from './NotShared'

interface IProps {
  id: string
}

const SharedContainer = ({ id }: IProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [isReCartOpen, setIsReCartOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [template, setTemplate] = useState<ITemplate | null>(null)
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)
  const [baskets, setBaskets] = useState<Array<IBasket>>([])
  const [basket, setBasket] = useState<ITemplateBasket>({
    name: '',
    categoryName: '기타',
    count: 1,
  })
  const [isShared, setIsShared] = useState(true)

  const getBaskets = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/baskets/public?templateId=${id}`,
      })

      setBaskets(data?.result)
      setTemplate(data?.template)
      setIsLoading(false)
    } catch (e: any) {
      if (e?.response?.data?.code === ERROR_CODE.NOT_SHARED) {
        setIsShared(false)
      }
      console.log(e)
      setIsLoading(false)
    }
  }, [id, setIsLoading])

  useEffect(() => {
    if (id) {
      getBaskets()
    }
  }, [id])

  return (
    <>
      <SharedTitle
        template={template}
        id={id}
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
        isShared={isShared}
      />
      {isShared ? (
        <SharedContents
          id={id}
          template={template}
          getBaskets={getBaskets}
          baskets={baskets}
          setBaskets={setBaskets}
          basket={basket}
          setBasket={setBasket}
        />
      ) : (
        <NotShared />
      )}
      <BottomSheet id={id} template={template} isShared={isShared} />
      {isLoading && <Loader />}
    </>
  )
}

export default SharedContainer
