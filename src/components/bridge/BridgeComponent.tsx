'use client'

import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'
import { useRouter, useSearchParams } from 'next/navigation'
import { login } from '@/api'
import { BASE_API } from '@/constants'
import { setCookie } from 'cookies-next'
import { useCallback, useEffect } from 'react'
import { HOME } from '@/routes'
import Loader from '../common/Loader'

const QUERY = 'q'

const BridgeComponent = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams?.get(QUERY)

  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)

  const handleQuery = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await login({
        url: `${BASE_API}/oauth2/login/${query}`,
      })

      setCookie('accessToken', data?.accessToken)
      setCookie('refreshToken', data?.refreshToken)

      setIsLoading(false)
      router.replace(HOME)
    } catch (e) {
      console.log(e)
      setIsLoading(false)
      router.replace('/')
    }
  }, [query, router, setIsLoading])

  useEffect(() => {
    if (query) {
      handleQuery()
    }
  }, [handleQuery, query])

  return <>{isLoading && <Loader />}</>
}

export default BridgeComponent
