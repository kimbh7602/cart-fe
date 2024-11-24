import styled from 'styled-components'

export const TabWrapper = styled.div`
  position: relative;
  width: 100%;
`
export const TabContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`

export const TabGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  border-radius: 100px;
  background: ${({ theme }) => theme.gray_scale.gray_30};
  padding: 4px;
`

export const Tab = styled.button<{ $isActive: boolean }>`
  padding: 8px 16px;
  border-radius: 100px;
  background: ${({ $isActive, theme }) => ($isActive ? theme.green_scale.green_500 : 'inherit')};
  box-shadow: ${({ $isActive }) => $isActive && '0px 4px 8px 0px rgba(0, 0, 0, 0.06)'};
  color: ${({ $isActive, theme }) => ($isActive ? theme.white : theme.gray_scale.gray_200)};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.2px;
  transition: all 0.3s ease-in-out;
  word-break: keep-all;
  white-space: nowrap;
`

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 98px;
  height: 44px;
  opacity: 0.8;
  background: linear-gradient(270deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
`
