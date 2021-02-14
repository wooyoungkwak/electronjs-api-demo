const { shell } = require('electron')

const os = require('os')

var $BtnFileOpen = $('#fileOpen');

$BtnFileOpen.on('click', (e) => {
    shell.showItemInFolder(os.homedir());
});
