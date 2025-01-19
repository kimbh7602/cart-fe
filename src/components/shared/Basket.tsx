import { IBasket } from '@/types'

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
}

const Basket = ({ basket }: IProps) => {
  return (
    <S.BasketWrapper>
      <S.BasketLeft>
        {/* <Image src='/basket.svg' alt='basket' width={24} height={24} /> */}
        <h4>{basket?.name}</h4>
      </S.BasketLeft>
      <S.BasketRight>
        <p>{basket?.count}</p>
        {/* <Image src='/edit.svg' alt='edit' width={20} height={20} /> */}
      </S.BasketRight>
    </S.BasketWrapper>
  )
}

export default Basket
