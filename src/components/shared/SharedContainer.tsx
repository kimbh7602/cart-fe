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
      console.log(e)
      setIsLoading(false)
    }
  }, [id, setIsLoading])

  useEffect(() => {
    if (id) {
      getBaskets()
    }
  }, [id])

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden'
  //   return () => {
  //     document.body.style.overflow = 'unset'
  //   }
  // }, [])

  return (
    <>
      <SharedTitle template={template} id={id} isDeleteOpen={isDeleteOpen} setIsDeleteOpen={setIsDeleteOpen} />
      <SharedContents
        id={id}
        template={template}
        getBaskets={getBaskets}
        baskets={baskets}
        setBaskets={setBaskets}
        basket={basket}
        setBasket={setBasket}
      />
      <BottomSheet id={id} />
      {isLoading && <Loader />}
    </>
  )
}

export default SharedContainer
