const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
let maiWindow

app.on('ready', () => {
  maiWindow = new BrowserWindow({
    width: 1024,
    height: 680,

    webPreferences: {
      nodeIntegration: true
    }
  })
  const urlLocation = isDev ? 'http://localhost:3000' : ''
  maiWindow.loadURL(urlLocation)
  maiWindow.webContents.openDevTools()
})
