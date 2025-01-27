import { IBasket, ICategories } from '@/types'

import * as S from './styled'
import Image from 'next/image'

interface IProps {
  basket: IBasket
  basketIds: Array<number>
  setBasketIds: (args: Array<number>) => void
}

const Basket = ({ basket, basketIds, setBasketIds }: IProps) => {
  const checkBasket = () => {
    if (basketIds?.includes(basket?.id)) {
      const newList = basketIds?.filter((item) => item !== basket?.id)
      setBasketIds(newList)
    } else {
      setBasketIds([...basketIds, basket?.id])
    }
  }

  return (
    <S.BasketWrapper onClick={checkBasket}>
      <S.BasketLeft>
        {basketIds?.includes(basket?.id) ? (
          <Image src='/checkbox-active.svg' alt='basket' width={24} height={24} />
        ) : (
          <Image src='/checkbox.svg' alt='basket' width={24} height={24} />
        )}
        <h4>{basket?.name}</h4>
      </S.BasketLeft>
      <p>{basket?.count}</p>
    </S.BasketWrapper>
  )
}

export default Basket
