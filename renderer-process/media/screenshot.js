const {desktopCapturer, shell, remote} = require('electron')
const { screen } = remote

const fs = require('fs')
const os = require('os')
const path = require('path')

$('#btnScreenshot').on('click', () => {

    $('#screenshot').html('Gathering screen ... ')
    
    const thumbSize = determineScreenShotSize();

    let options = {
        types: ['screen'],
        thumbnailSize: thumbSize
    }

    desktopCapturer.getSources(options).then((sources) => {

        sources.forEach((source) => {

            if(source.name == 'Entire Screen' || source.name == 'Screen 1') {
                // const screenshotPath = path.join(os.tmpdir(), 'screenhot.png')
                const tempDir = "/home/young/사진/"
                const screenshotPath = path.join(tempDir, 'screenhot.png')

                fs.writeFile(screenshotPath, source.thumbnail.toPNG(), (error) => {

                    if (error) console.log(error)

                    shell.openExternal(screenshotPath)

                    const message = `Saved screenshot to - ${screenshotPath}`
                    $('#take').html(message)
                })
            }
        });
    })


    function determineScreenShotSize () {
        const screenSize = screen.getPrimaryDisplay().workAreaSize
        const maxDimension = Math.max(screenSize.width, screenSize.height)
        
        return {
            width: maxDimension * window.devicePixelRatio,
            height: maxDimension * window.devicePixelRatio
        }
    }

})

