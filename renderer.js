const {resolve} = require('path');
const {shell: {openItem}} = require('electron');
const [folders] = document.getElementsByClassName('favourite-folders');

folders.addEventListener('click', function clickFolders({target}) {
	const {folder} = target.dataset;
	if (!folder) { return; }

	const path = resolve(
		folder.replace(/^~/, process.env.HOME)
	);

	openItem(path);
});
