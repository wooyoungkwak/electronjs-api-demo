const {ipcRenderer} = require('electron')

$('#sync-send').on('click', () => {
    const message = ipcRenderer.sendSync("sync-Request", "Message ... ")    
    $('#sync-receive').html(message)
})

