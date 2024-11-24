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

interface IProps {
  id: string
  accessToken: string | undefined
}

const WriteContainer = ({ id, accessToken }: IProps) => {
  const [template, setTemplate] = useState<ITemplate | null>(null)
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)

  const getTemplate = async () => {
    setIsLoading(true)
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/template/${id}`,
        accessToken: accessToken,
      })

      setTemplate(data?.result)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
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
      <WriteComponent id={id} template={template} accessToken={accessToken} />
      {isLoading && <Loader />}
    </>
  )
}

export default WriteContainer
