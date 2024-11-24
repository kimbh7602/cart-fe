import Image from 'next/image'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url('/background.png');
  background-position-x: center;
  background-position-y: top;
  background-size: cover;
`

export const BottomButtons = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
  max-width: 480px;
  border-radius: 28px 28px 0px 0px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.12);
  padding: 28px 20px 24px 20px;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.black};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.6px;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const KaKaoButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 45px;
  border-radius: 6px;
  background: ${({ theme }) => theme.kakao_bg};

  p {
    color: rgba(0, 0, 0, 0.85);
    /* font-family: "Apple SD Gothic Neo"; */
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
`

export const AppleButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 45px;
  border-radius: 6px;
  background: ${({ theme }) => theme.black};

  p {
    color: ${({ theme }) => theme.white};
    /* font-family: "Apple SD Gothic Neo"; */
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
`

export const CsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  background: ${({ theme }) => theme.white};

  p {
    color: ${({ theme }) => theme.gray_scale.gray_200};
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.2px;
  }
`
