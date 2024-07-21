import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.gray_scale.gray_500};
`

export const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.gray_scale.gray_100};
`
