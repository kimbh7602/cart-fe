import { postData } from '@/api'
import { BASE_API } from '@/constants'
import { ERROR_CODE } from '@/constants/errors'
import { getTokens, deleteTokens, setTokens } from '@/utils'
import { useRouter } from 'next/navigation'

const useCheckToken = () => {
  const router = useRouter()
  const { refreshToken } = getTokens()

  const refreshJWT = async () => {
    try {
      const { data } = await postData({
        url: `${BASE_API}/refresh`,
        body: {
          refreshToken: refreshToken,
        },
      })

      setTokens(data?.accessToken, data?.refreshToken)
      router.refresh()
    } catch (e) {
      console.log(e)
      deleteTokens()
      router.replace('/')
    }
  }

  const checkToken = (code: string) => {
    switch (code) {
      case ERROR_CODE.EMPTY_TOKEN:
        router.replace('/')
        break
      case ERROR_CODE.EXPIRED_TOKEN:
        refreshJWT()
        break
      case ERROR_CODE.WRONG_TOKEN:
        deleteTokens()
        router.replace('/')
        break
      default:
        break
    }
  }

  return { checkToken }
}

export default useCheckToken
