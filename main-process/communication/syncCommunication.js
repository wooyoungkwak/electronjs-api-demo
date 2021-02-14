const {ipcMain} = require('electron')

ipcMain.on('sync-Request', (event, message) => {
    event.returnValue = message  + " ... synchronous "
})