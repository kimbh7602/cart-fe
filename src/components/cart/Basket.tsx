import { IBasket, ICategories } from '@/types'

import * as S from './styled'
import Image from 'next/image'
import { BASE_API } from '@/constants'
import { putData } from '@/api'
import { useRouter } from 'next/navigation'
import { BASKET } from '@/routes'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'
import useCheckToken from '@/hooks/useCheckToken'
import { getTokens } from '@/utils'

interface IProps {
  basket: IBasket
  getBaskets: () => void
  getCategoryBaskets: () => void
  getTemplate: () => void
  selectedCategory: ICategories | null
}

const Basket = ({ basket, getCategoryBaskets, getBaskets, getTemplate, selectedCategory }: IProps) => {
  const router = useRouter()
  const [, setIsLoading] = useAtom(isLoadingAtom)
  const { accessToken } = getTokens()
  const { checkToken } = useCheckToken()

  const checkBasket = async () => {
    setIsLoading(true)
    try {
      await putData({
        url: `${BASE_API}/basket/check`,
        body: {
          checked: !basket?.checked,
          basketId: basket?.id,
        },
        accessToken: accessToken,
      })

      if (selectedCategory) {
        getCategoryBaskets()
      } else {
        getBaskets()
      }
      getTemplate()
      setIsLoading(false)
    } catch (e: any) {
      console.log(e)
      checkToken(e?.response?.data?.code)
      setIsLoading(false)
    }
  }

  const writeBasket = () => {
    router.push(`${BASKET}/${basket?.id}`)
  }

  return (
    <S.BasketWrapper>
      <S.BasketLeft onClick={checkBasket}>
        {basket?.checked ? (
          <Image src='/checkbox-active.svg' alt='basket' width={24} height={24} />
        ) : (
          <Image src='/checkbox.svg' alt='basket' width={24} height={24} />
        )}
        <h4>{basket?.name}</h4>
      </S.BasketLeft>
      <S.BasketRight onClick={writeBasket}>
        <p>{basket?.count}</p>
        <Image src='/edit.svg' alt='edit' width={20} height={20} />
      </S.BasketRight>
    </S.BasketWrapper>
  )
}

export default Basket
