import styled from 'styled-components'

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 20px;
`

export const BasketsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const BasketWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  h4 {
    color: ${({ theme }) => theme.black};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.2px;
  }

  p {
    color: ${({ theme }) => theme.black};
    text-align: right;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
  }
`

export const BasketLeft = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  align-items: center;
  gap: 8px;
`

export const BasketRight = styled.div`
  display: grid;
  grid-template-columns: auto 37px;
  align-items: center;
  gap: 8px;
`

export const KeywordsWrapper = styled.div`
  position: relative;
  width: 100%;
`
export const KeywordsContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`

export const KeywordGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  background: ${({ theme }) => theme.white};
  /* padding: 4px; */
`

export const Keyword = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  gap: 4px;
  border-radius: 8px;
  background: ${({ theme }) => theme.green_scale.green_50};
  color: ${({ theme }) => theme.green_scale.green_500};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.2px;
  word-break: keep-all;
  white-space: nowrap;
`

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  height: 36px;
  opacity: 0.7;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  pointer-events: none;
`

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.gray_scale.gray_30};
  color: ${({ theme }) => theme.gray_scale.gray_200};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
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
