'use strict'
import { ipcMain } from 'electron'
import HTTP from 'http'
import { load } from './credentials'

export function httpServer (mainWindow) {
  HTTP.createServer((request, response) => {
    request.addListener('end', () => {
      response.writeHead(200, {
        'Content-Type': 'text/plain'
      })
      response.end('Hello Electron Vue!\n')
      mainWindow.webContents.send('network-message', request)
    }).resume()
  }).listen(9900, '0.0.0.0')
}

export async function initService (mainWindow) {
  if (mainWindow) {
    httpServer(mainWindow)
    mainWindow.webContents.send('network-message', {url: '/settings'})
    try {
      const credentials = JSON.parse(await load())
      if (credentials == null) {
      }
    } catch (e) {
      // mainWindow.webContents.send('system-message', {})
    }
  }
}

ipcMain.on('configure', (event, arg) => {
  if (arg.message.token) {
    event.sender.send('configure-complete', {success: true})
  }
})
