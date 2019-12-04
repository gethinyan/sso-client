import api from './api'

const URL_PREFIX = process.env.NODE_ENV === 'production' ? '' : '/api'

export function signIn (params) {
  return api.post(URL_PREFIX + '/v1/signIn', params)
}
