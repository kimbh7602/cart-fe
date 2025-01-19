import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
`

export const BottomModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`

export const BottomModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 28px 20px;
  border-radius: 28px 28px 0px 0px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.12);
`

export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 24px;
  gap: 16px;
  padding: 16px 0;

  h3 {
    color: ${({ theme }) => theme.black};
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.6px;
  }

  img {
    cursor: pointer;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ListItem = styled.li<{ $isRed?: boolean }>`
  display: grid;
  grid-template-columns: 24px auto;
  align-items: center;
  gap: 8px;
  padding: 8px;
  cursor: pointer;

  p {
    color: ${({ $isRed, theme }) => ($isRed ? theme.red_scale.red_500 : theme.black)};

    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.2px;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 18px 0;
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.2px;
  border-radius: 12px;
`

export const CancelButtonText = styled.p`
  color: ${({ theme }) => theme.gray_scale.gray200};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.2px;
  cursor: pointer;
  padding: 8px;
`
