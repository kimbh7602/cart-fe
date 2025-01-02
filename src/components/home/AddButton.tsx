'use client'

import Image from 'next/image'
import * as S from './styled'
import { postData } from '@/api'
import { BASE_API } from '@/constants'
import { ITemplate } from '@/types'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'
import { useRouter } from 'next/navigation'
import { CART } from '@/routes'

interface IProps {
  list: Array<ITemplate>
  setList: (args: Array<ITemplate>) => void
  accessToken: string | undefined
}

const AddButton = ({ list, setList, accessToken }: IProps) => {
  const router = useRouter()
  const [, setIsLoading] = useAtom(isLoadingAtom)

  const addCart = async () => {
    setIsLoading(true)
    try {
      const { data } = await postData({
        url: `${BASE_API}/template`,
        accessToken: accessToken,
      })

      setList([data?.result, ...list])
      router.push(`${CART}/${data?.result?.id}`)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
    }
  }

  return (
    <S.AddButtonWrapper onClick={addCart}>
      <Image src='/home/plus-white.svg' alt='add' width={28} height={28} />
    </S.AddButtonWrapper>
  )
}

export default AddButton
