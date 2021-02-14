const path = require('path')
const { ipcMain } = require('electron')

ipcMain.on('onDragStart', (event, filepath) => {
    // const iconName = 'codeIcon.png'
    // event.sender.startDrag({
    //     file: filepath,
    //     icon: path.join(__dirname, iconName)
    // })
    console.log(filepath);
})
