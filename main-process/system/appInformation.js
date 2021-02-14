const {app, ipcMain} = require('electron')

ipcMain.on('request-AppInformation', (event) => {
    event.sender.send('response-AppInforamtion', app.getAppPath() )
})