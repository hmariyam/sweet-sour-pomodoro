const {app,BrowserWindow} = require("electron");

function createWindow(){
    // height and width of the window
    const win = new BrowserWindow({
        width:830,
        height:600,
        resizable:false
    })
    // load the window with the html file
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)