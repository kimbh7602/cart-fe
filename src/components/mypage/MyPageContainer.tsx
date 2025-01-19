'use client'

import { useAtom } from 'jotai'
import * as S from './styled'
import { iamAtom, isLoadingAtom } from '@/store'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { DELETE_ACCOUNT } from '@/routes'
import Loader from '../common/Loader'
import { deleteTokens } from '@/utils'

const MyPageContainer = () => {
  const router = useRouter()
  const [iam] = useAtom(iamAtom)
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)

  const handleClickLogout = () => {
    setIsLoading(true)
    deleteTokens()
    router.replace('/')
    setIsLoading(false)
  }

  return (
    <>
      <S.MyPageWrapper>
        <S.MyPageTitleWrapper>
          <h1>마이페이지</h1>
          <p>{iam?.email}</p>
        </S.MyPageTitleWrapper>
        <S.MyPageListWrapper>
          <S.MyPageListItem>
            <p>개인정보 처리 방침</p>
            <Image src='/arrow-right-mypage.svg' alt='arrow' width={24} height={24} />
          </S.MyPageListItem>
          <S.MyPageListItem>
            <p>고객센터</p>
            <Image src='/arrow-right-mypage.svg' alt='arrow' width={24} height={24} />
          </S.MyPageListItem>
          <S.MyPageListItem onClick={handleClickLogout} $isLogout>
            <p>로그아웃</p>
            <Image src='/arrow-right-gray.svg' alt='arrow' width={24} height={24} />
          </S.MyPageListItem>
        </S.MyPageListWrapper>
      </S.MyPageWrapper>
      <S.BottomSheet onClick={() => router.push(DELETE_ACCOUNT)}>계정 삭제</S.BottomSheet>
      {isLoading && <Loader />}
    </>
  )
}

export default MyPageContainer
