const { app, BrowserWindow } = require('electron')
import path from "path"

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile(path.join(app.getAppPath(), 'src', 'index.html'))
}

export function exec() {
  app.whenReady().then(createWindow)
}