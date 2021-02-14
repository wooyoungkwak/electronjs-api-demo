const { shell } = require('electron')

const $BtnExternalOpen = $('#externalOpen')

$BtnExternalOpen.on('click', (e) => {
    shell.openExternal('http://www.naver.com');
    
})

