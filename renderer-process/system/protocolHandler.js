const {shell} = require('electron')
const path = require('path')

$('#lanchAnother').on('click', () => {
    const pagePath = path.join('file://', __dirname, '../../html/window/createWindow.html')
    shell.openExternal(pagePath)
})