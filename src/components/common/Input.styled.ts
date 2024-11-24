import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: ${({ theme }) => theme.black};
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
  }

  p {
    color: ${({ theme }) => theme.gray_scale.gray_200};
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
  }
`

export const InputWrapper = styled.div<{ $isActive: boolean; $isDisabled?: boolean; $hasButton?: boolean }>`
  display: ${({ $hasButton }) => ($hasButton ? 'grid' : 'flex')};
  grid-template-columns: ${({ $hasButton }) => ($hasButton ? 'auto 24px' : 'unset')};
  gap: 8px;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px 12px 0px 0px;
  border-bottom: ${({ $isActive, theme }) =>
    $isActive ? `1px solid ${theme.gray_scale.gray_500}` : `1px solid ${theme.gray_scale.gray_100}`};
  background: ${({ $isDisabled, theme }) => $isDisabled && theme.gray_scale.gray_50};

  input {
    width: 100%;
    color: ${({ theme }) => theme.black};
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -0.2px;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.gray_scale.gray_200};
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;
`
