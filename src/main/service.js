'use strict'
import { ipcMain } from 'electron'
import HTTP from 'http'
import credentials from './credentials'
import { Playlist } from './playlist'

let playlist = new Playlist()
let settings = null

export function httpServer (mainWindow) {
  HTTP.createServer((request, response) => {
    request.addListener('end', () => {
      response.writeHead(200, {
        'Content-Type': 'text/plain'
      })
      response.end('ok')
      mainWindow.webContents.send('network-message', request)
    }).resume()
  }).listen(9900, '0.0.0.0')
}

export async function initService (mainWindow) {
  if (mainWindow) {
    httpServer(mainWindow)
    mainWindow.webContents.send('network-message', {url: '/settings'})
    try {
      const settings = JSON.parse(await credentials.load())
      if (settings == null) {
      }
    } catch (e) {
      // mainWindow.webContents.send('system-message', {})
    }
  }
}

export async function saveSettings () {
  await credentials.save(settings)
}

ipcMain.on('configure', (event, arg) => {
  if (arg.message.token) {
    event.sender.send('configure-complete', {success: true})
  }
})

ipcMain.on('video-request', (event, arg) => {
  if (playlist == null) {
    const arg = {
      command: 'error',
      reason: 'no-playlist',
    }
    event.sender.send('video-response', arg)
    return
  }

  if (arg.command === 'getnext') {
    const arg = {
      command: 'video',
      break: false,
      url: playlist.next(),
    }
    event.sender.send('video-response', arg)
  }
})

export default {
  initService, saveSettings,
}
