const { ipcRenderer } = require('electron')

$('#informationDialog').on('click', (e) => {
    ipcRenderer.send('information-dialog')
});

ipcRenderer.on('information-dialog-selection', (e, response) => {
    $('#selectedInformation').html(( response === 0 ? 'yes' : 'no' ))
})