'use client'

import { useEffect, useState } from 'react'
import CartContents from '@/components/cart/CartContents'
import CartTitle from '@/components/cart/CartTitle'
import CartHeader from '@/components/layout/CartHeader'
import { fetchData } from '@/api'
import { BASE_API } from '@/constants'
import { ITemplate } from '@/types'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'
import Loader from '@/components/common/Loader'
import useCheckToken from '@/hooks/useCheckToken'
import { getTokens } from '@/utils'
import { useRouter } from 'next/navigation'
import { HOME } from '@/routes'

interface IProps {
  id: string
}

const CartContainer = ({ id }: IProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [isReCartOpen, setIsReCartOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
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

  const onClick = () => {
    router.push(HOME)
  }

  useEffect(() => {
    if (id) {
      getTemplate()
    }
  }, [id])

  return (
    <>
      <CartHeader setIsOpen={setIsOpen} onClick={onClick} />
      <CartTitle template={template} id={id} isDeleteOpen={isDeleteOpen} setIsDeleteOpen={setIsDeleteOpen} />
      <CartContents
        id={id}
        template={template}
        getTemplate={getTemplate}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isShareOpen={isShareOpen}
        setIsShareOpen={setIsShareOpen}
        isReCartOpen={isReCartOpen}
        setIsReCartOpen={setIsReCartOpen}
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
      />
      {isLoading && <Loader />}
    </>
  )
}

export default CartContainer
