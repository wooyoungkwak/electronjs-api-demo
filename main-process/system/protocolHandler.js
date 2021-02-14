const {app, dialog} = require('electron')
const path = require('path')

if ( process.defaultApp  ) {
    if ( process.argv.length > 2) {
        app.setAsDefaultProtocolClient('electron-api-demo', process.execPath, [path.resolve(process.argv[1])] )
    }
} else {
    app.setAsDefaultProtocolClient('electron-api-demo')
}

app.on('open-url', (event, url) => {
    dialog.showErrorBox("Welcom Back", `you arrive from : ${url}`)
})