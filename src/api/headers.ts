import { ActionType } from '@/types'
import _ from 'lodash'

export const getRequestHeaders = (action: ActionType) => {
  const { pureHeader, accessToken } = action

  const header = { accept: 'application/json;charset=UTF-8' }

  if (accessToken) _.assign(header, { Authorization: `Bearer ${accessToken}` })

  return pureHeader ? undefined : header
}
