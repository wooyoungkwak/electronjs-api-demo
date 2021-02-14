const {ipcMain} = require('electron')

ipcMain.on('async-Request', (event, message) => {
    event.sender.send('async-Resonse', message  + " ... asynchronous" )
})