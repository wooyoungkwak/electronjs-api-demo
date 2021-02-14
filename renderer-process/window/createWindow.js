const { BrowserWindow } = require('electron').remote
const path = require('path')

let win


// 메인 윈도우 창 에서 새로운 윈도우 창 생성하기 
$('#createWindow').on('click', function () {

    const modalPath = path.join('file://', __dirname, '../../html/window/createWindow.html')
    win = new BrowserWindow({ width: 400, height: 320 })

    win.on('close', () => { win = null })
    win.on('resize', updateReply);
    win.on('move', updateReply);
    win.loadURL(modalPath)
    win.show()

})

// 메인 윈도우 창 에서 새로운 윈도우 창의 크기(width, height) 와 좌표(x, y) 표시
var updateReply = function () {
    const text = `Size : ${win.getSize()} || Position : ${win.getPosition()}`
    $('#manageWindow').text(text)
}

// 메인 윈도우 창 에서 프레임 없는 새로운 윈도우 창 생성
$('#framelessWindow').on('click', function(){
    const modalPath = path.join('file://', __dirname, '../../html/window/createWindow.html')
    win = new BrowserWindow({
        transparent : false,
        frame : false
    })

    win.on('close', () => {win = null})
    win.loadURL(modalPath)
    win.show()
})

