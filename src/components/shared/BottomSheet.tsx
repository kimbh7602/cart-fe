import { getTokens, successToast } from '@/utils'
import * as S from './styled'
import { useRouter } from 'next/navigation'
import { postData } from '@/api'
import { BASE_API } from '@/constants'
import useCheckToken from '@/hooks/useCheckToken'
import { useAtom } from 'jotai'
import { iamAtom, isLoadingAtom } from '@/store'
import { CART, HOME } from '@/routes'
import { useEffect } from 'react'
import { ITemplate } from '@/types'

interface IBottomSheet {
  id: string
  template: ITemplate | null
  isShared: boolean
}

const BottomSheet = ({ id, template, isShared }: IBottomSheet) => {
  const router = useRouter()
  const { accessToken } = getTokens()
  const { checkToken } = useCheckToken()
  const [, setIsLoading] = useAtom(isLoadingAtom)
  const [iam] = useAtom(iamAtom)

  const handleClickButton = async () => {
    if (!isShared) {
      router.replace(HOME)
      return
    }

    setIsLoading(true)
    if (!accessToken) {
      router.replace('/')
      setIsLoading(false)
    } else {
      if (iam?.id === template?.userId) {
        router.replace(`${CART}/${id}`)
      } else {
        try {
          const { data } = await postData({
            url: `${BASE_API}/template/public/${id}/copy`,
            accessToken: accessToken,
          })

          if (data?.result?.id) {
            successToast('까먹지 않도록 담아드렸어요!')
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
      <S.BottomTitle>{isShared ? '지금 보는 리스트, 까먹을 것 같나요?' : '어라, 뭐 사려고 했더라?'}</S.BottomTitle>
      <S.BottomButton onClick={handleClickButton}>지금 바로, 까먹지 말고 담아보세요!</S.BottomButton>
    </S.BottomSheetWrapper>
  )
}

export default BottomSheet
