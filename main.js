const { app, BrowserWindow, globalShortcut } = require('electron')

require(__dirname + '/main-process/menu/menuWindow')
require(__dirname + '/main-process/menu/contextMenu')
require(__dirname + '/main-process/native-ui/fileDialog')
require(__dirname + '/main-process/native-ui/errorDialog')
require(__dirname + '/main-process/native-ui/informationDialog')
require(__dirname + '/main-process/native-ui/saveDialog')
require(__dirname + '/main-process/native-ui/tray')
require(__dirname + '/main-process/communication/asyncCommunication')
require(__dirname + '/main-process/communication/syncCommunication')
require(__dirname + '/main-process/system/appInformation')
require(__dirname + '/main-process/system/protocolHandler')

// const ProgressBar = require('electron-progressbar');


var win;
function createWindow() {
    win = new BrowserWindow({
        width: 1300,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html');
}

function registShortcut() {
    globalShortcut.register('F12', () => {
        if (win.webContents.isDevToolsOpened()) {
            win.webContents.closeDevTools()
        } else {
            win.webContents.openDevTools()
        }
    })
}

app.whenReady().then(registShortcut)

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

// app.on('ready', function(){
//     var progressBar = new ProgressBar({
//         text: 'Preparing data...',
//         detail: 'Wait...'
//     });

//     progressBar
//         .on('completed', function () {
//             console.info(`completed...`);
//             progressBar.detail = 'Task completed. Exiting...';
//         })
//         .on('aborted', function () {
//             console.info(`aborted...`);
//         });

//     setTimeout(function () {
//         progressBar.setCompleted();
//     }, 3000);
// })