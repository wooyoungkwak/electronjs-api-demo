const { ipcRenderer } = require('electron')

$('#drag-file-link').on('dragstart', (event) => {
    event.preventDefault()
    ipcRenderer.sender.send('onDragStart', __filename)
    console.log('file link ... ');
})