const {clipboard} = require('electron')

$('#copyInformation').on('click', () => {
    $('#copyInformation').val('')
})

$('#copyClipboard').on('click', () => {
    $('#copyInformation').val('Copied! Patte here to see')
    
    if ( clipboard.readText() === '' ) {
        clipboard.writeText('Electron Demo!')
    }
})

$('#pasteClipboard').on('click', () => {

    if ( clipboard.readText() === '' ) {
        clipboard.writeText('Electron Demo!')
    }

    var message = `Clipboard content is ${clipboard.readText()}`
    $('#pasteInformation').html(message)
})