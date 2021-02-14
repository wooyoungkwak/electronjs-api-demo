const { ipcRenderer } = require('electron')

const $BtnTray = $('#tray');

let trayOn = false

$BtnTray.on('click', (e) => {
    if(trayOn) {
        trayOn = false
        ipcRenderer.send('remove-tray')
        $('#trayState').html('')
    } else {
        trayOn = true
        ipcRenderer.send('put-in-tray')
        $('#trayState').html('Click demo again to remove.')
    }

});

ipcRenderer.on('tray-removed', () => {
    ipcRenderer.send('remove-tray')
    trayOn = false
    $('#trayState').html('')
})
