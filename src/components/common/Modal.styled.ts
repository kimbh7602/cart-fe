import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
`

export const ModalWrapper = styled.div`
  width: 328px;
  padding: 28px 20px;
  background: ${({ theme }) => theme.white};
  border-radius: 28px;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.12);
  margin: auto;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.black};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.6px;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.gray_scale.gray_300};
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`

export const LinkText = styled.p`
  color: ${({ theme }) => theme.black};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.2px;
  text-decoration-line: underline;
`

export const SubmitButton = styled.button`
  width: 100%;
  border-radius: 12px;
  background: ${({ theme }) => theme.black};
  padding: 18px;
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.2px;
`

export const CancelButton = styled.button`
  width: 100%;
  border-radius: 12px;
  padding: 8px;
  color: ${({ theme }) => theme.gray_scale.gray_200};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.2px;
  margin-top: 8px;
`
