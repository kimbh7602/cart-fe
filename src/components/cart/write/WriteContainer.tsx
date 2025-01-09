'use client'

import { fetchData } from '@/api'
import WriteComponent from '@/components/cart/write/WriteComponent'
import WriteHeader from '@/components/layout/WriteHeader'
import { BASE_API } from '@/constants'
import { ITemplate } from '@/types'
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'
import Loader from '@/components/common/Loader'
import useCheckToken from '@/hooks/useCheckToken'
import { getTokens } from '@/utils'

interface IProps {
  id: string
}

const WriteContainer = ({ id }: IProps) => {
  const [template, setTemplate] = useState<ITemplate | null>(null)
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)
  const { accessToken } = getTokens()
  const { checkToken } = useCheckToken()

  const getTemplate = async () => {
    setIsLoading(true)
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/template/${id}`,
        accessToken: accessToken,
      })

      setTemplate(data?.result)
      setIsLoading(false)
    } catch (e: any) {
      console.log(e)
      checkToken(e?.response?.data?.code)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      getTemplate()
    }
  }, [id])

  return (
    <>
      <WriteHeader />
      <WriteComponent id={id} template={template} />
      {isLoading && <Loader />}
    </>
  )
}

export default WriteContainer
