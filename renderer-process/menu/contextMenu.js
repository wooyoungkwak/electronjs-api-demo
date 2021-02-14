const { ipcRenderer } = require('electron')

const $BtnContextPopup = $('#contextPopup');

$BtnContextPopup.on('click', (e) => {
    ipcRenderer.send('show-context-menu')
})

