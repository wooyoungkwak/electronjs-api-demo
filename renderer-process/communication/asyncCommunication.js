const {ipcRenderer} = require('electron')

$('#async-send').on('click', () => {
    ipcRenderer.send("async-Request", "Message ... ")    
})

ipcRenderer.on('async-Resonse', (event, message) => {
    $('#async-receive').html(message)
})
