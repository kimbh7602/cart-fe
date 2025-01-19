import styled from 'styled-components'

export const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 20px;
`

export const MyPageTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    color: ${({ theme }) => theme.black};
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.6px;
  }

  p {
    color: ${({ theme }) => theme.gray_scale.gray_300};
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
  }
`

export const MyPageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const MyPageListItem = styled.div<{ $isLogout?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;

  p {
    color: ${({ $isLogout = false, theme }) => ($isLogout ? theme.gray_scale.gray_300 : theme.black)};
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.2px;
  }
`

export const BottomSheet = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  color: ${({ theme }) => theme.gray_scale.gray_100};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.2px;
  padding: 8px;
  margin-bottom: 28px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
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
