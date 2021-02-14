const {ipcRenderer, remote} = require('electron')
const {screen} = remote

const os = require('os')
const homeDir = os.homedir()

const size = screen.getPrimaryDisplay().size

$('#electronVersion').on('click', () => {
    const message = `This app is using Electron version ` + process.versions.electron
    $('#version').html(message)
})

$('#homeInformation').on('click', () => {
    const message = 'Your system home directory is: ' + homeDir
    $('#hInformation').html(message)
})

$('#screenInformation').on('click', () => {
    const message = `Your screen is ${size.width}px X ${size.height}px`
    $('#sInformation').html(message)
})

$('#appInformation').on('click', () => {
    ipcRenderer.send('request-AppInformation')
})

ipcRenderer.on('response-AppInforamtion', (event, appPath) => {
    $('#information').html(appPath)
})

