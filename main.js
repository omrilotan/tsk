const { app, BrowserWindow } = require('electron');
const { join } = require('path');

let win = null;

app
	.on('ready', () => {
		win = new BrowserWindow({
			nodeIntegration: true,
			width: 800,
			height: 600,
			titleBarStyle: 'hidden',
	    backgroundColor: '#312450',
			icon: join(__dirname, 'rocket.icns')
		});

		win.on('closed', () => {
			win = null;
		});

		win.loadFile('index.html');
	})
	.on('window-all-closed', app.quit.bind(app));
