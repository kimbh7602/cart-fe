'use client'

import { useAtom } from 'jotai'
import * as S from './styled'
import { iamAtom, isLoadingAtom } from '@/store'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Modal from '../common/Modal'
import { deleteData, fetchData } from '@/api'
import { BASE_API } from '@/constants'
import { cautionToast, deleteTokens, getTokens } from '@/utils'
import useCheckToken from '@/hooks/useCheckToken'
import { useRouter } from 'next/navigation'
import Loader from '../common/Loader'

const DeleteAccountContainer = () => {
  const router = useRouter()
  const [iam] = useAtom(iamAtom)
  const [checked, setChecked] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)
  const [count, setCount] = useState(0)
  const { accessToken } = getTokens()
  const { checkToken } = useCheckToken()

  const handleClickSubmit = () => {
    setIsOpen(false)
  }

  const handleClickDelete = async () => {
    setIsLoading(true)
    try {
      await deleteData({
        url: `${BASE_API}/user`,
        accessToken: accessToken,
      })

      setIsOpen(false)
      setIsSuccessModalOpen(true)
      setIsLoading(false)
    } catch (e: any) {
      checkToken(e?.response?.data?.code)
      cautionToast('삭제에 실패했어요')
      setIsLoading(false)
    }
  }

  const handleClickClose = () => {
    deleteTokens()
    setIsSuccessModalOpen(false)
    router.replace('/')
  }

  const getCount = async () => {
    try {
      const { data } = await fetchData({
        url: `${BASE_API}/templates/count`,
        accessToken: accessToken,
      })

      setCount(data?.count)
    } catch (e: any) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (accessToken) {
      getCount()
    }
  }, [accessToken])

  return (
    <>
      <S.DeleteWrapper>
        <S.DeleteTitleWrapper>
          <h1>
            계정 삭제 시 아래 정보가 <span>모두 사라져요!</span>
          </h1>
          <p>삭제하시면 지금까지 담은 장바구니가 사라져 복구가 불가해요</p>
        </S.DeleteTitleWrapper>
        <S.DeleteItemListWrapper>
          <p>지금까지 담은 장바구니와 목록</p>
          <p>
            회원 데이터 <span>(생년월일, 성별)</span>
          </p>
        </S.DeleteItemListWrapper>
        <S.DeleteCautionWrapper>
          <p>✓ 통신비밀보호법에 따라 로그인 기록, IP는 3개월간 보관합니다.</p>
          <p>✓ 정보통신 이용 촉진 및 정보보호 등에 관한 법률에 따라 이메일 정보는 6개월간 보관합니다.</p>
        </S.DeleteCautionWrapper>
        <S.DeleteBottom>
          <span>계정 정보 및 이용정보는 복구 불가</span>하지만 동일한 계정으로 재가입은 언제든지 가능해요!
        </S.DeleteBottom>
      </S.DeleteWrapper>
      <S.BottomSheet>
        <S.AgreeWrapper>
          {checked ? (
            <Image
              onClick={() => setChecked(!checked)}
              src='/checkbox-active.svg'
              alt='basket'
              width={24}
              height={24}
            />
          ) : (
            <Image onClick={() => setChecked(!checked)} src='/checkbox.svg' alt='basket' width={24} height={24} />
          )}
          <p onClick={() => setChecked(!checked)}>주의 사항을 모두 숙지했고, 내용에 동의합니다.</p>
        </S.AgreeWrapper>
        <S.DeleteButton onClick={() => setIsOpen(true)} disabled={!checked}>
          까담 계정 삭제
        </S.DeleteButton>
      </S.BottomSheet>
      {isOpen && (
        <Modal
          title={`지금까지 담은 ${count}개의 장바구니가 사라져요!`}
          text='계정을 삭제하면 장바구니 목록이 바로 삭제됩니다.
      그래도 삭제하시나요?'
          submitButtonText='더 담을래요'
          onClickSubmitButton={handleClickSubmit}
          hasCancelButton={true}
          cancelButtonText='까담 계정 삭제'
          onClickCancelButton={handleClickDelete}
        />
      )}
      {isSuccessModalOpen && (
        <Modal
          title='계정 삭제가 완료됐어요'
          text='그동안 까담을 이용해 주셔서 감사합니다.'
          submitButtonText='또 담으러 오세요!'
          onClickSubmitButton={handleClickClose}
          hasCancelButton={false}
        />
      )}
      {isLoading && <Loader />}
    </>
  )
}

export default DeleteAccountContainer
