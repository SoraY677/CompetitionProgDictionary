const { app, BrowserWindow } = require('electron')



function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('../index.html')
}

export function execApp() {
  app.whenReady().then(createWindow)
}