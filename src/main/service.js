'use strict'
import { ipcMain } from 'electron'
const HTTP = require('http')

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

ipcMain.on('configure', (event, arg) => {
  if (arg.message.token) {
    event.sender.send('configure-complete', {success: true})
  }
})
