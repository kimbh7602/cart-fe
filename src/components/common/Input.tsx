'use client'

import Image from 'next/image'

import { IInput } from '@/types'

import * as S from './Input.styled'

const Input = ({
  value,
  onChange,
  onKeydown,
  onKeyUp,
  placeholder,
  isActive,
  isDisabled = false,
  isAlert = false,
  hasLabel = false,
  label,
  alertMessage,
  hasButton,
}: IInput) => {
  return (
    <S.Wrapper>
      {hasLabel && <label>{label}</label>}
      <S.InputWrapper $isActive={isActive} $isDisabled={isDisabled} $hasButton={hasButton}>
        <input
          value={value}
          onChange={onChange}
          onKeyDown={onKeydown}
          onKeyUp={onKeyUp}
          placeholder={placeholder}
          disabled={isDisabled}
        />
        {hasButton && (
          <S.ButtonWrapper>
            {isActive && <Image src='/input-cancel.svg' alt='cancel' width={16} height={16} />}
          </S.ButtonWrapper>
        )}
      </S.InputWrapper>
      {isAlert && <p>{alertMessage}</p>}
    </S.Wrapper>
  )
}

export default Input
