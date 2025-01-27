import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 8px;
  width: 100%;
  height: 48px;
  border-bottom: ${({ theme }) => `1px solid ${theme.gray_scale.gray_50}`};
  background: ${({ theme }) => theme.white};
  z-index: 10;
`
export const CartHeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.green_scale.green_500};
  z-index: 10;
`

export const WriteHeaderWrapper = styled.div<{ $hasBorderBottom?: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.white};
  z-index: 10;
  border-bottom: ${({ theme, $hasBorderBottom }) => $hasBorderBottom && `1px solid ${theme.gray_scale.gray_50}`};
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 8px;
  cursor: pointer;
`
