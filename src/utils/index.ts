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
