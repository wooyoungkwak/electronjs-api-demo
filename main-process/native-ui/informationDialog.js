const { ipcMain, dialog } = require('electron')

ipcMain.on('information-dialog', (e) => {

    const options = {
        type : 'info',
        title : 'Information',
        message : '선택 하시겠습니까?',
        buttons : ['yes', 'no']
    }

    dialog.showMessageBox(options).then((opt) => {
        console.log(opt);
        e.sender.send("information-dialog-selection", opt.response)
    })
})