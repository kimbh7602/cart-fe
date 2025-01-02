import { getCookie, deleteCookie, setCookie } from 'cookies-next'
import _ from 'lodash'
import { toast } from 'react-toastify'

export const successToast = (message: string) => {
  toast.success(message)
}

export const cautionToast = (message: string) => {
  toast.error(message)
}

export const getIconSrc = (idx: number | undefined) => {
  return `/cart/cart_${idx || 1}.svg`
}

export const getAccessToken = () => {
  return getCookie('accessToken')
}

export const getRefreshToken = () => {
  return getCookie('refreshToken')
}

export const getTokens = () => {
  return {
    accessToken: getAccessToken(),
    refreshToken: getRefreshToken(),
  }
}

export const setTokens = (accessToken: string, refreshToken: string) => {
  setCookie('accessToken', accessToken)
  setCookie('refreshToken', refreshToken)
}

export const deleteTokens = () => {
  deleteCookie('accessToken')
  deleteCookie('refreshToken')
}
