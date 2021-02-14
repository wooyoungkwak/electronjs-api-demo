const {BrowserWindow} = require('electron').remote
const ipcRenderer = require('electron').ipcRenderer
const path = require('path')

$('#invisible-window-send').on('click', (event) => {

    const winID = BrowserWindow.getFocusedWindow().id
    const invisibleWidnowUrl = path.join('file://' , __dirname, '../../html/communication/invisible.html')

    let win = new BrowserWindow({
        width: 400,
        height: 400,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL(invisibleWidnowUrl)

    win.webContents.on('did-finish-load', () => {
        const input = 100
        win.webContents.send("compute-factorial", input, winID)
    })
})

ipcRenderer.on('factorial-computed', (event, input, output) => {
    $('#invisible-window-receive').html(`The factorial of ${input} is ${output}`)
})
