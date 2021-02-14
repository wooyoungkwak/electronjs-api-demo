const ipcRenderer = require('electron').ipcRenderer

const $BtnErrorDialog = $('#errorDialog');

$BtnErrorDialog.on('click', (e) => {
    ipcRenderer.send('error-dialog')
});