'use client'

import Loader from '@/components/common/Loader'
import LoginComponent from '@/components/signIn/LoginComponent'
import { isLoadingAtom } from '@/store'
import { useAtom } from 'jotai'

const Login = () => {
  const [isLoading] = useAtom(isLoadingAtom)

  return (
    <>
      <LoginComponent />
      {isLoading && <Loader />}
    </>
  )
}

export default Login
