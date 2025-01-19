import styled from 'styled-components'

export const DeleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 20px;
`

export const DeleteTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    color: ${({ theme }) => theme.black};
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.6px;

    span {
      color: ${({ theme }) => theme.green_scale.green_500};
    }
  }

  p {
    color: ${({ theme }) => theme.gray_scale.gray_500};
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
  }
`

export const DeleteItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.gray_scale.gray_30};
  padding: 12px 16px;

  p {
    color: ${({ theme }) => theme.black};
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;

    span {
      font-weight: 300;
    }
  }
`

export const DeleteCautionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    color: ${({ theme }) => theme.gray_scale.gray_500};
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
  }
`

export const DeleteBottom = styled.div`
  color: ${({ theme }) => theme.gray_scale.gray_500};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;

  span {
    font-weight: 700;
  }
`

export const BottomSheet = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px 32px 20px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
`

export const AgreeWrapper = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  p {
    color: ${({ theme }) => theme.black};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.2px;
  }
`

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 12px;
  background: ${({ theme }) => theme.green_scale.green_500};

  color: ${({ theme }) => theme.white};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.2px;

  &:disabled {
    background: ${({ theme }) => theme.gray_scale.gray_100};
    color: ${({ theme }) => theme.gray_scale.gray_200};
  }
`
