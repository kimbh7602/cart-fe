'use client'

import { fetchData } from '@/api'
import { BASE_API } from '@/constants'
import useCheckToken from '@/hooks/useCheckToken'
import { iamAtom } from '@/store'
import { getTokens } from '@/utils'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  const [, setIam] = useAtom(iamAtom)
  const { accessToken } = getTokens()
  const { checkToken } = useCheckToken()

  const getUser = async () => {
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/user`,
        accessToken: accessToken,
      })

      setIam(data)
    } catch (e: any) {
      console.log(e)
      checkToken(e?.response?.data?.code)
    }
  }

  useEffect(() => {
    if (accessToken) {
      getUser()
    }
  }, [accessToken])

  return <>{children}</>
}

export default RootProvider
