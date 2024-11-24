'use client'

import { BeatLoader } from 'react-spinners'

import * as S from './styled'

const Loader = () => {
  return (
    <S.Wrapper>
      <BeatLoader color='#00D282' loading={true} size={13} aria-label='Loading Spinner' data-testid='loader' />
    </S.Wrapper>
  )
}

export default Loader
