'use client'

import React, { useCallback, useEffect, useState } from 'react'

import Tab from '@/components/common/Tab'
import { IBasket, ICategories, IKeyword, ITab, ITemplate, ITemplateBasket } from '@/types'

import * as S from './styled'
import Basket from './Basket'
import { fetchData } from '@/api'
import { BASE_API } from '@/constants'
import moment from 'moment'
import _ from 'lodash'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'

interface ISharedContents {
  id: string
  template: ITemplate | null
  getBaskets: () => void
  baskets: Array<IBasket>
  setBaskets: (args: Array<IBasket>) => void
  basket: ITemplateBasket
  setBasket: (args: ITemplateBasket) => void
}

const SharedContents = ({ id, template, getBaskets, baskets, setBaskets, basket, setBasket }: ISharedContents) => {
  const [selectedCategory, setSelectedCategory] = useState<ICategories | null>(null)

  const [categories, setCategories] = useState<Array<ICategories>>([])
  const [, setIsLoading] = useAtom(isLoadingAtom)

  const getCategoryBaskets = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/categories/${selectedCategory?.id}/baskets/public?templateId=${id}`,
      })

      setBaskets(data?.result)
      setIsLoading(false)
    } catch (e: any) {
      console.log(e)
      setIsLoading(false)
    }
  }, [id, selectedCategory?.id, setIsLoading])

  const handleClickTab = (tab: ICategories | null) => {
    setSelectedCategory(tab)
  }

  const getCategories = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/template/${id}/categories`,
      })

      setCategories(data?.result)
      setIsLoading(false)
    } catch (e: any) {
      console.log(e)
      setIsLoading(false)
    }
  }, [id, setIsLoading])

  useEffect(() => {
    if (id) {
      getBaskets()
      getCategories()
    }
  }, [getBaskets, getCategories, id])

  useEffect(() => {
    if (selectedCategory) {
      getCategoryBaskets()
    } else {
      getBaskets()
    }
  }, [getBaskets, getCategoryBaskets, selectedCategory])

  return (
    <>
      <S.CartContentsWrapper>
        <S.CartContentTitle>
          <h3>{template?.name}</h3>
          <p>내 장바구니에 담기 전에는 보기만 가능해요</p>
        </S.CartContentTitle>
        <Tab tabs={categories} selectedTab={selectedCategory} setSelectedTab={handleClickTab} />

        <S.BasketsWrapper>
          {baskets?.map((basket, index) => (
            <Basket key={index} basket={basket} />
          ))}
        </S.BasketsWrapper>
      </S.CartContentsWrapper>
    </>
  )
}

export default SharedContents
