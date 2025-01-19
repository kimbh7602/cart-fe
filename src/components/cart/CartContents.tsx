'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'

import Tab from '@/components/common/Tab'
import Input from '@/components/common/Input'
import { IBasket, ICategories, IKeyword, ITab, ITemplate, ITemplateBasket } from '@/types'

import * as S from './styled'
import Image from 'next/image'
import Basket from './Basket'
import CartBottomModal from '../common/BottomModal/CartBottomModal'
import ShareBottomModal from '../common/BottomModal/ShareBottomModal'
import ReCartBottomModal from '../common/BottomModal/ReCartBottomModal'
import DeleteBottomModal from '../common/BottomModal/DeleteBottomModal'
import { deleteData, fetchData, postData, putData } from '@/api'
import { BASE_API } from '@/constants'
import moment from 'moment'
import _, { get } from 'lodash'
import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/navigation'
import { CART, HOME } from '@/routes'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'
import { toast } from 'react-toastify'
import { cautionToast, getTokens, successToast } from '@/utils'
import useCheckToken from '@/hooks/useCheckToken'

const PLACE_HOLDER = '상품명을 입력해 주세요'

interface ICartContents {
  id: string
  template: ITemplate | null
  getTemplate: () => void
  isOpen: boolean
  setIsOpen: (args: boolean) => void
  isShareOpen: boolean
  setIsShareOpen: (args: boolean) => void
  isReCartOpen: boolean
  setIsReCartOpen: (args: boolean) => void
  isDeleteOpen: boolean
  setIsDeleteOpen: (args: boolean) => void
}

const SIZE = 100

const CartContents = ({
  id,
  template,
  getTemplate,
  isOpen,
  setIsOpen,
  isShareOpen,
  setIsShareOpen,
  isReCartOpen,
  setIsReCartOpen,
  isDeleteOpen,
  setIsDeleteOpen,
}: ICartContents) => {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<ICategories | null>(null)
  const [item, setItem] = useState<string>('')
  const [basket, setBasket] = useState<ITemplateBasket>({
    name: '',
    categoryName: '기타',
    count: 1,
  })
  const [isInputActive, setIsInputActive] = useState<boolean>(false)
  const [count, setCount] = useState(1)
  const [baskets, setBaskets] = useState<Array<IBasket>>([])
  const [keywords, setKeywords] = useState<Array<IKeyword>>([])
  const [categories, setCategories] = useState<Array<ICategories>>([])
  const [, setIsLoading] = useAtom(isLoadingAtom)
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

  const getCategoryBaskets = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/categories/${selectedCategory?.id}/baskets?templateId=${id}`,
        accessToken: accessToken,
      })

      setBaskets(data?.result)
      setIsLoading(false)
    } catch (e: any) {
      console.log(e)
      checkToken(e?.response?.data?.code)
      setIsLoading(false)
    }
  }, [id, selectedCategory?.id, setIsLoading])

  const handleClickTab = (tab: ICategories | null) => {
    setSelectedCategory(tab)
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasket({ ...basket, name: event?.target?.value })
  }

  const addBasket = async () => {
    setIsLoading(true)
    try {
      const { data } = await postData({
        url: `${BASE_API}/basket`,
        body: {
          templateId: Number(id),
          name: basket?.name,
          categoryName: basket?.categoryName,
          count: basket?.count,
        },
        accessToken: accessToken,
      })

      if (data?.result) {
        successToast(`${basket?.name} 담기 완료`)
        setBasket({
          name: '',
          categoryName: '기타',
          count: 1,
        })

        if (selectedCategory) {
          getCategoryBaskets()
        } else {
          getBaskets()
        }
        getTemplate()
        getCategories()
      }
      setIsLoading(false)
    } catch (e) {
      cautionToast(`${basket?.name} 담기 실패`)
      setIsLoading(false)
    }
  }

  const searchKeywords = useCallback(async () => {
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/search?keyword=${basket?.name}`,
        accessToken: accessToken,
      })

      console.log(data)
      setKeywords(data?.result)
    } catch (e: any) {
      console.log(e)
      checkToken(e?.response?.data?.code)
    }
  }, [basket?.name])

  const handleClickKeyword = async (keyword: { name: string; category: string }) => {
    setIsLoading(true)
    try {
      const { data } = await postData({
        url: `${BASE_API}/basket`,
        body: {
          templateId: Number(id),
          name: keyword?.name,
          categoryName: keyword?.category,
          count: basket?.count,
        },
        accessToken: accessToken,
      })

      if (data?.result) {
        successToast(`${keyword?.name} 담기 완료`)
        setBasket({
          name: '',
          categoryName: '기타',
          count: 1,
        })
        if (selectedCategory) {
          getCategoryBaskets()
        } else {
          getBaskets()
        }
        getTemplate()
        getCategories()
      }
      setIsLoading(false)
    } catch (e) {
      cautionToast(`${basket?.name} 담기 실패`)
      setIsLoading(false)
    }
    // setBasket({ ...basket, name: keyword?.name, categoryName: keyword?.category })
  }

  const handleAddBasket = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event?.nativeEvent?.isComposing) return

    if (event.key === 'Enter') {
      addBasket()
      return
    }
  }

  const handleInputCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (count <= 1) {
      cautionToast('상품을 1개 이상 담아주세요!')
      setBasket({ ...basket, count: 1 })
      setCount(1)
      return
    }

    if (count >= 9999) {
      cautionToast('상품은 9,999개까지만 담을 수 있어요!')
      setBasket({ ...basket, count: 9999 })
      return
    }

    setBasket({ ...basket, count: Number(event?.target?.value) })
  }

  const handleClickPlus = () => {
    if (count >= 9999) {
      cautionToast('상품은 9,999개까지만 담을 수 있어요!')
      setBasket({ ...basket, count: 9999 })
      return
    }
    setBasket({ ...basket, count: basket?.count + 1 })
  }

  const handleClickMinus = () => {
    if (count < 1) {
      cautionToast('상품을 1개 이상 담아주세요!')
      setBasket({ ...basket, count: 1 })
      return
    }
    setBasket({ ...basket, count: basket?.count - 1 })
  }

  const onCloseCart = () => {
    setIsOpen(false)
  }

  const onClickShare = () => {
    setIsOpen(false)
    setIsShareOpen(true)
  }

  const onClickReCart = () => {
    setIsOpen(false)
    setIsReCartOpen(true)
  }

  const onClickDelete = () => {
    setIsOpen(false)
    setIsDeleteOpen(true)
  }

  const onCloseShare = () => {
    setIsShareOpen(false)
  }

  const onStopShare = async () => {
    setIsLoading(true)
    try {
      const { data } = await putData({
        url: `${BASE_API}/template/${id}/share`,
        body: {
          isShared: false,
        },
        accessToken: accessToken,
      })

      successToast('장바구니를 닫았어요')
      setIsShareOpen(false)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
      setIsShareOpen(false)
      setIsLoading(false)
    }
  }

  const onCloseReCart = () => {
    setIsReCartOpen(false)
  }

  const onCloseDelete = () => {
    setIsDeleteOpen(false)
  }

  const deleteTemplate = async () => {
    setIsLoading(true)
    try {
      await deleteData({
        url: `${BASE_API}/template/${id}`,
        accessToken: accessToken,
      })

      successToast('장바구니를 삭제했어요!')
      router.push(HOME)
      setIsLoading(false)
    } catch (e) {
      cautionToast('장바구니 삭제에 실패했어요')
      setIsLoading(false)
    }
  }

  const incompleteTemplate = async () => {
    setIsLoading(true)
    try {
      const { data } = await postData({
        url: `${BASE_API}/template/${id}/copy/incomplete`,
        accessToken: accessToken,
      })

      if (data?.result?.id) {
        router.replace(`${CART}/${data?.result?.id}`)
      }

      setIsLoading(false)
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }

  const copyTemplate = async () => {
    setIsLoading(true)
    try {
      const { data } = await postData({
        url: `${BASE_API}/template/${id}/copy`,
        accessToken: accessToken,
      })

      if (data?.result?.id) {
        router.replace(`${CART}/${data?.result?.id}`)
      }

      setIsLoading(false)
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }

  const shareTemplate = async () => {
    setIsLoading(true)
    try {
      await putData({
        url: `${BASE_API}/template/${id}/share`,
        body: {
          isShared: true,
        },
        accessToken: accessToken,
      })

      successToast('장바구니를 열었어요!')
      getTemplate()
      setIsShareOpen(false)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
      setIsShareOpen(false)
      setIsLoading(false)
    }
  }

  const getCategories = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/template/${id}/categories`,
        accessToken: accessToken,
      })

      setCategories(data?.result)
      setIsLoading(false)
    } catch (e: any) {
      console.log(e)
      checkToken(e?.response?.data?.code)
      setIsLoading(false)
    }
  }, [accessToken, id, setIsLoading])

  useEffect(() => {
    if (id) {
      getBaskets()
      getCategories()
    }
  }, [getBaskets, getCategories, id])

  useEffect(() => {
    if (_.isEmpty(basket?.name)) {
      setKeywords([])
    } else {
      searchKeywords()
    }
  }, [basket?.name, searchKeywords])

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
          <p>{moment(template?.createTime).format('YYYY년 M월 D일')}에 만들고</p>
          <h3>지금까지 {template?.percent}% 완료했어요</h3>
        </S.CartContentTitle>
        <Tab tabs={categories} selectedTab={selectedCategory} setSelectedTab={handleClickTab} />
        <S.CartInputWrapper>
          <Input
            value={basket?.name}
            onChange={handleInput}
            onKeydown={handleAddBasket}
            placeholder={PLACE_HOLDER}
            isActive={isInputActive}
          />
          <S.CountWrapper>
            {basket?.count <= 1 ? (
              <Image src='/minus-disabled.svg' alt='minus' width={24} height={24} />
            ) : (
              <Image src='/minus.svg' alt='minus' width={24} height={24} onClick={handleClickMinus} />
            )}
            <input
              type='number'
              inputMode='numeric'
              min={1}
              max={9999}
              value={basket?.count}
              onChange={handleInputCount}
            />
            <Image src='/plus.svg' alt='plus' width={24} height={24} onClick={handleClickPlus} />
          </S.CountWrapper>
        </S.CartInputWrapper>

        {!_.isEmpty(basket?.name) && (
          <S.KeywordsWrapper>
            <S.KeywordsContainer>
              <S.KeywordGroup>
                <S.Keyword onClick={addBasket}>
                  <Image src='/cart/plus-keyword.svg' width='16' height='16' alt='plus' />
                  {`'${basket?.name}' 추가`}
                </S.Keyword>
                {keywords?.map((keyword, idx) => (
                  <S.Keyword onClick={() => handleClickKeyword(keyword)} key={idx}>
                    {keyword?.name}
                  </S.Keyword>
                ))}
              </S.KeywordGroup>
            </S.KeywordsContainer>
            <S.Gradient />
          </S.KeywordsWrapper>
        )}

        <S.BasketsWrapper>
          {baskets?.map((basket, index) => (
            <Basket
              key={index}
              basket={basket}
              getCategoryBaskets={getCategoryBaskets}
              getBaskets={getBaskets}
              getTemplate={getTemplate}
              selectedCategory={selectedCategory}
            />
          ))}
        </S.BasketsWrapper>
      </S.CartContentsWrapper>
      {isOpen && (
        <CartBottomModal
          template={template}
          onClickClose={onCloseCart}
          onClickShare={onClickShare}
          onClickReCart={onClickReCart}
          onClickDelete={onClickDelete}
        />
      )}
      {isShareOpen && (
        <ShareBottomModal
          template={template}
          onClickClose={onCloseShare}
          onStopShare={onStopShare}
          onClickShare={shareTemplate}
        />
      )}
      {isReCartOpen && (
        <ReCartBottomModal
          template={template}
          onClickClose={onCloseReCart}
          onClickCopy={copyTemplate}
          onClickIncomplete={incompleteTemplate}
        />
      )}
      {isDeleteOpen && (
        <DeleteBottomModal
          onClickClose={onCloseDelete}
          onClickDelete={deleteTemplate}
          onClickIncomplete={incompleteTemplate}
        />
      )}
    </>
  )
}

export default CartContents
