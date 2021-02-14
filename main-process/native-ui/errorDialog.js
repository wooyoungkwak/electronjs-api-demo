const { ipcMain, dialog } = require('electron')

ipcMain.on('error-dialog', (e) => {
    dialog.showErrorBox("An Error Message", "Demonstrating an error message.");
})