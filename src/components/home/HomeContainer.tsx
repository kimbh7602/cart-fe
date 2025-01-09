'use client'

import Empty from '@/components/home/Empty'
import HomeComponent from '@/components/home/Home'
import { useLayoutEffect, useState } from 'react'
import { fetchData } from '@/api'
import { BASE_API } from '@/constants'
import _ from 'lodash'
import AddButton from '@/components/home/AddButton'
import { ITemplate } from '@/types'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'
import Loader from '@/components/common/Loader'
import { getTokens } from '@/utils'
import useCheckToken from '@/hooks/useCheckToken'

const PREVIEW_COUNT = 3

const HomeContainer = () => {
  const [list, setList] = useState<Array<ITemplate>>([])
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)
  const [isLoaded, setIsLoaded] = useState(false)
  const { accessToken } = getTokens()
  const { checkToken } = useCheckToken()

  const getTemplates = async () => {
    setIsLoading(true)
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/templates?previewCount=${PREVIEW_COUNT}`,
        accessToken: accessToken,
      })

      setList(data?.result)
      setIsLoading(false)
      setIsLoaded(true)
    } catch (e: any) {
      console.log(e)
      checkToken(e?.response?.data?.code)
      setIsLoading(false)
      setIsLoaded(true)
    }
  }

  useLayoutEffect(() => {
    getTemplates()
  }, [])

  return (
    <>
      {_.isEmpty(list) ? <Empty /> : <HomeComponent list={list} />}
      <AddButton list={list} setList={setList} />
      {isLoading && <Loader />}
    </>
  )
}

export default HomeContainer
