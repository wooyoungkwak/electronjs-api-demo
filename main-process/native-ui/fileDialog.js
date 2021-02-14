const { ipcMain, dialog } = require('electron')

ipcMain.on('open-file-dialog', (event) => {
    dialog.showOpenDialog({properties: ['openFile', 'openDirectory']}).then((opt) => {
        console.log(opt)
        if(!opt.canceled) {
            console.log(opt.filePaths[0])
            event.sender.send("selected-directory", opt.filePaths[0])
        }
    })
})