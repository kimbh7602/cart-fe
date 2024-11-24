import Image from 'next/image'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 20px;
  background: ${({ theme }) => theme.white};
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.black};
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.6px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.black};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`

export const Count = styled.p`
  text-align: right;
  color: ${({ theme }) => theme.gray_scale.gray_200};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`

export const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;

  @media screen and (max-width: 405px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Icon = styled(Image)<{ $selected: boolean }>`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  opacity: ${({ $selected }) => ($selected ? '1' : '0.3')};
  cursor: pointer;
`

export const CountInputWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 96px;
  gap: 8px;
  align-items: center;

  > p {
    color: ${({ theme }) => theme.black};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.2px;
  }
`

export const CountWrapper = styled.div`
  display: grid;
  grid-template-columns: 24px auto 24px;
  align-items: center;
  gap: 8px;

  input {
    width: 32px;
    color: ${({ theme }) => theme.black};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.2px;
    border: none;
    text-align: center;
  }
`

export const Button = styled.button`
  position: fixed;
  bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 40px);
  max-width: 440px;
  border-radius: 12px;
  background: ${({ theme }) => theme.green_scale.green_500};
  padding: 18px 0;
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.2px;
`
