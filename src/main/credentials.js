'use strict'
import keytar from 'keytar'
import os from 'os'

const SERVICE = 'streetboard'
const USER = os.userInfo().username

export function load () {
  // return Promise
  return keytar.getPassword(SERVICE, USER)
}

export function save (data) {
  keytar.setPassword(SERVICE, USER, JSON.stringify(data))
}
