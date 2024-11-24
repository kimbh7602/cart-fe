import axios from 'axios'

import { ActionType } from '@/types'

import { getRequestHeaders } from './headers'

const api = () => {
  const _client = axios.create({
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
  return _client
}

export const fetchData = async (action: ActionType) => {
  const { url, pureHeader } = action
  const headers = pureHeader ? undefined : getRequestHeaders(action)
  const response = await api().get(url, { headers })
  return response
}

export const postData = (action: ActionType) => {
  const { url, body, query } = action
  const headers = getRequestHeaders(action)
  const requestBody = body ? JSON.stringify(body) : JSON.stringify({ query: query?.replace(/\n+\s+/g, ' ').trim() })

  return api().post(url, requestBody, { headers })
}

export const putData = (action: ActionType) => {
  const { url, body } = action
  const headers = getRequestHeaders(action)
  return api().put(url, body, { headers })
}

export const patchData = (action: ActionType) => {
  const { url, body } = action
  const headers = getRequestHeaders(action)
  return api().patch(url, body, { headers })
}

export const deleteData = (action: ActionType) => {
  const { url } = action
  const headers = getRequestHeaders(action)
  return api().delete(url, { headers })
}

export default api
