const { ipcRenderer } = require('electron')

const $BtnSaveDialog = $('#saveDialog');

$BtnSaveDialog.on('click', (e) => {
    console.log('save-dialog .... click');
    ipcRenderer.send('save-dialog')
})

ipcRenderer.on('saved-file', (e, path) => {
    console.log(path.filePath)
    $('#selectedSave').html(path.filePath)
})