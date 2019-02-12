import axios from 'axios'
import Cookies from 'js-cookie'

import { AUTH } from '@app/shared/constant'

export class ApiService {
  private apiPrefix: string

  constructor(apiPrefix: string) {
    this.apiPrefix = apiPrefix
  }

  get(url, params?) {
    return this.request({
      method: 'get',
      path: url,
      data: params
    })
  }

  post(url, data) {
    return this.request({
      method: 'post',
      path: url,
      data
    })
  }

  put(url, data) {
    return this.request({
      method: 'put',
      path: url,
      data
    })
  }

  delete(url, params?) {
    return this.request({
      method: 'delete',
      path: url,
      data: params
    })
  }

  request(opts) {
    const method = opts.method.toLowerCase()
    const option: any = {
      headers: {
        'Content-Type': 'application/json',
        [AUTH.AUTHORIZATION]: `Bearer ${Cookies.get(AUTH.AUTHORIZATION)}`,
        ...opts.headers
      },
      method: opts.method,
      url: `/${this.apiPrefix}/${opts.path}`,
      responseType: 'json'
    }

    if (method !== 'get' && method !== 'head') {
      option.data = JSON.stringify(opts.data)
    } else {
      option.params = opts.data
    }

    return axios(option).then(res => {
      const data = res.data

      opts.success && opts.success(data)

      return data
    }).catch((...args) => {
      const [ res ] = args

      opts.error && opts.error(res)

      return Promise.reject(res)
    })
  }
}
