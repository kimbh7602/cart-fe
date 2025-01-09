'use client'

import { fetchData } from '@/api'
import WriteComponent from '@/components/basket/WriteComponent'
import WriteHeader from '@/components/layout/WriteHeader'
import { BASE_API } from '@/constants'
import { IBasket } from '@/types'
import { useCallback, useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'
import Loader from '@/components/common/Loader'
import { getTokens } from '@/utils'
import useCheckToken from '@/hooks/useCheckToken'

interface PageProps {
  params: {
    id: string
  }
}

const Write = ({ params }: PageProps) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [basket, setBasket] = useState<IBasket | null>(null)
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)
  const { accessToken } = getTokens()
  const { checkToken } = useCheckToken()

  const getTemplate = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/baskets/${params?.id}`,
        accessToken: accessToken,
      })

      setBasket(data?.result)
      setIsLoading(false)
    } catch (e: any) {
      console.log(e)
      checkToken(e?.response?.data?.code)
      setIsLoading(false)
    }
  }, [params?.id, setIsLoading])

  useEffect(() => {
    if (params?.id) {
      getTemplate()
    }
  }, [getTemplate, params?.id])

  return (
    <>
      <WriteHeader hasTrash={true} onClickTrash={() => setIsDeleteOpen(true)} />
      <WriteComponent id={params?.id} basket={basket} isDeleteOpen={isDeleteOpen} setIsDeleteOpen={setIsDeleteOpen} />
      {isLoading && <Loader />}
    </>
  )
}

export default Write
