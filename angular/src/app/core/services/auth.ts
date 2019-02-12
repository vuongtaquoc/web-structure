import { Injectable } from '@angular/core'
import { NOT_FOUND, UNAUTHORIZED } from 'http-status-codes'
import Cookies from 'js-cookie'

import { ApiService } from './api'

import { AUTH } from '@app/shared/constant'

@Injectable()
export class AuthService extends ApiService {
  constructor() {
    super('auth')
  }

  async login(data) {
    const user = await this.post('login', {
      username: data.username,
      password: data.password
    })

    if (!user) {
      throw {
        status: NOT_FOUND,
      }
    }

    // TODO fake
    if (!user.isAdmin) {
      throw {
        status: UNAUTHORIZED
      }
    }

    return user
  }

  async logout() {
    await this.post('logout', {})

    return new Promise((resolve) => {
      Cookies.remove(AUTH.AUTHORIZATION)
      resolve(true)
    })
  }
}
