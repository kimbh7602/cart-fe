import Image from 'next/image'
import styled from 'styled-components'

export const CartTitleWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  border-radius: 0px 0px 28px 28px;
  background: ${({ theme }) => theme.green_scale.green_500};
  gap: 2px;
  z-index: 1;
`

export const CartTitle = styled.div`
  display: grid;
  grid-template-columns: 56px auto 61px;
  gap: 16px;
  align-items: center;
  width: 100%;

  h3 {
    color: ${({ theme }) => theme.white};
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.6px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`

export const ShareBadge = styled.div<{ $isShared: boolean | undefined }>`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ $isShared, theme }) => ($isShared ? theme.green_scale.green_500 : theme.green_scale.green_100)};
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    padding: 4px 8px;
    border-radius: 8px;
    background: ${({ $isShared, theme }) => ($isShared ? theme.green_scale.green_50 : theme.green_scale.green_400)};
  }
`

export const CartTitleButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  p {
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.2px;
    padding: 8px;
  }

  > div {
    width: 1px;
    height: 16px;
    background: ${({ theme }) => theme.green_scale.green_300};
    margin: 0 8px;
  }
`

export const CartContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 20px 200px 20px;
`

export const CartContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    color: ${({ theme }) => theme.gray_scale.gray_300};
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
  }

  h3 {
    color: ${({ theme }) => theme.black};
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.6px;
  }
`

export const CartInputWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 96px;
  gap: 8px;
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

export const BasketsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const BasketWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 68px;
  align-items: center;
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
  display: display;
  /* grid-template-columns: 24px auto; */
  align-items: center;
  gap: 8px;
`

export const BasketRight = styled.div`
  display: display;
  /* grid-template-columns: 48px 20px; */
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

export const BottomSheetWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 28px 20px;
  border-radius: 28px 28px 0 0;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.12);
  background: ${({ theme }) => theme.white};

  @media screen and (min-width: 480px) {
    width: 480px;
  }
`

export const BottomTitle = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.6px;
  padding: 16px 0;
`

export const BottomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 12px;
  padding: 16px;
  background: ${({ theme }) => theme.green_scale.green_500};
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.2px;
`

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 48px);
`

export const EmptyTitle = styled.h3`
  color: ${({ theme }) => theme.gray_scale.gray_500};
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px; /* 140% */
  letter-spacing: -0.6px;
  margin: 16px 0 4px 0;
`

export const EmptyText = styled.p`
  color: ${({ theme }) => theme.gray_scale.gray_300};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.2px;
`
