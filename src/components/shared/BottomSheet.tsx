import { getTokens } from '@/utils'
import * as S from './styled'
import { useRouter } from 'next/navigation'
import { postData } from '@/api'
import { BASE_API } from '@/constants'
import useCheckToken from '@/hooks/useCheckToken'
import { useAtom } from 'jotai'
import { iamAtom, isLoadingAtom } from '@/store'
import { CART } from '@/routes'
import { useEffect } from 'react'
import { ITemplate } from '@/types'

interface IBottomSheet {
  id: string
  template: ITemplate | null
}

const BottomSheet = ({ id, template }: IBottomSheet) => {
  const router = useRouter()
  const { accessToken } = getTokens()
  const { checkToken } = useCheckToken()
  const [, setIsLoading] = useAtom(isLoadingAtom)
  const [iam] = useAtom(iamAtom)

  const handleClickButton = async () => {
    setIsLoading(true)
    if (!accessToken) {
      router.push('/')
      setIsLoading(false)
    } else {
      if (iam?.id === template?.userId) {
        router.push(`${CART}/${id}`)
      } else {
        try {
          const { data } = await postData({
            url: `${BASE_API}/template/public/${id}/copy`,
            accessToken: accessToken,
          })

          if (data?.result?.id) {
            router?.push(`${CART}/${data?.result?.id}`)
          }
        } catch (e: any) {
          console.log(e)
          checkToken(e?.response?.data?.code)
          setIsLoading(false)
        }
      }
    }
  }

  return (
    <S.BottomSheetWrapper>
      <S.BottomTitle>지금 보는 리스트, 까먹을 것 같나요?</S.BottomTitle>
      <S.BottomButton onClick={handleClickButton}>앱에서 까먹지 말고 담아보세요!</S.BottomButton>
    </S.BottomSheetWrapper>
  )
}

export default BottomSheet
