import Image from 'next/image'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: 16px 20px 32px 20px;
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

export const AdWrapper = styled.a`
  display: grid;
  grid-template-columns: 36px auto 24px;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 12px 16px;
  border-radius: 16px;
  background: ${({ theme }) => theme.green_scale.green_600};
`

export const AdText = styled.div`
  p {
    overflow: hidden;
    color: ${({ theme }) => theme.white};
    text-overflow: ellipsis;

    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
  }

  b {
    overflow: hidden;
    color: ${({ theme }) => theme.white};
    text-overflow: ellipsis;

    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.2px;
  }
`

export const ContentWrapper = styled.div<{ $isShared?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $isShared }) => ($isShared ? '56px auto 56px' : '56px auto')};
  gap: 16px;
  width: 100%;
  padding: 8px;
`

export const ProgressCircle = styled.div<{ $value: number }>`
  width: 60px;
  height: 60px;
  display: flex;
  border-radius: 50%;
  position: relative;
  background: ${({ $value, theme }) => `conic-gradient(${theme.green_scale.green_500} ${$value}deg, #FFFFFF 0deg)`};
  transition: all 0.3s ease-in-out;
`

export const InnerCircle = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ theme }) => theme.white};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    color: ${({ theme }) => theme.black};
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.2px;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  p {
    color: ${({ theme }) => theme.gray_scale.gray_300};
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`

export const ShareBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    border-radius: 8px;
    background: ${({ theme }) => theme.green_scale.green_50};
    color: ${({ theme }) => theme.green_scale.green_500};
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    padding: 4px 8px;
  }
`

export const AddButtonWrapper = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: ${({ theme }) => theme.green_scale.green_500};
  border-radius: 50%;
`

export const Stamp = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 56px;
  height: 56px;
`
