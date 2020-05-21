const { app, BrowserWindow } = require('electron')

function createWindow () {
  // ブラウザウインドウを作成
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // そしてこのアプリの index.html をロード
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)