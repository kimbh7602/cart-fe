import { IBasket } from '@/types'

import * as S from './styled'
import Image from 'next/image'
import { BASE_API } from '@/constants'
import { putData } from '@/api'
import { useRouter } from 'next/navigation'
import { BASKET } from '@/routes'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/store'

interface IProps {
  basket: IBasket
  getBaskets: () => void
  getTemplate: () => void
  accessToken: string | undefined
}

const Basket = ({ basket, getBaskets, getTemplate, accessToken }: IProps) => {
  const router = useRouter()
  const [, setIsLoading] = useAtom(isLoadingAtom)

  const checkBasket = async () => {
    setIsLoading(true)
    try {
      const { data } = await putData({
        url: `${BASE_API}/basket/check`,
        body: {
          checked: !basket?.checked,
          basketId: basket?.id,
        },
        accessToken: accessToken,
      })

      console.log(data)
      getBaskets()
      getTemplate()
      setIsLoading(false)
    } catch (e) {
      console.log(e)
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
          <Image src='/basket-checked.svg' alt='basket' width={24} height={24} />
        ) : (
          <Image src='/basket.svg' alt='basket' width={24} height={24} />
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
