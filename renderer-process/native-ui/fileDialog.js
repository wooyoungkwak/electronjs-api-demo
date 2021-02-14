const { ipcRenderer } = require('electron')

const $BtnFileDialog = $('#fileDialog');

$BtnFileDialog.on('click', (e) => {
    ipcRenderer.send('open-file-dialog')
});

ipcRenderer.on('selected-directory', (e, path) => {
    $('#selectedPath').html(path)
})