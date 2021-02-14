const {ipcMain, dialog } = require('electron')

ipcMain.on('save-dialog', (event) => {
    const options = {
        title :'save an Image.',
        defaultPath: '/home/young/snap',
        filters : [
            { name: "Images", extensions: ["jpg", "png", "gif"]}
        ]
    }

    dialog.showSaveDialog(options).then((path) => {
        console.log(path);
        event.sender.send('saved-file', path);
    })
})

