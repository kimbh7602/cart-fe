'use client'

import { deleteData, fetchData } from '@/api'
import WriteComponent from '@/components/basket/WriteComponent'
import WriteHeader from '@/components/layout/WriteHeader'
import { BASE_API } from '@/constants'
import { IBasket, ITemplate } from '@/types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'
import Loader from '@/components/common/Loader'

interface PageProps {
  params: {
    id: string
  }
}

const Write = ({ params }: PageProps) => {
  const router = useRouter()
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [basket, setBasket] = useState<IBasket | null>(null)
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)

  const getTemplate = async () => {
    setIsLoading(true)
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/basket/${params?.id}`,
      })

      setBasket(data?.result)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (params?.id) {
      getTemplate()
    }
  }, [params?.id])

  return (
    <>
      <WriteHeader hasTrash={true} onClickTrash={() => setIsDeleteOpen(true)} />
      <WriteComponent id={params?.id} basket={basket} isDeleteOpen={isDeleteOpen} setIsDeleteOpen={setIsDeleteOpen} />
      {isLoading && <Loader />}
    </>
  )
}

export default Write
