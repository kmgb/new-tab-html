
function loadContent() {
	// Security hazard from injecting arbitrary HTML into body? meh.

	chrome.storage.local.get({'url': '', 'sync': true}, function(localstorage) {
		if(localstorage.sync === true) {
			chrome.storage.sync.get({'url':''}, function(syncedstorage) {
				document.body.innerHTML = syncedstorage.url;
			});
		} else {
			document.body.innerHTML = localstorage.url;
		}
	});
}

document.body.onload = loadContent;

if (window.matchMedia) {
	window.matchMedia('(prefers-color-scheme: dark)')
      	.addEventListener('change', event => {
			// Hot-reload our SVG file, since Chromium doesn't yet inform it
			location.reload();
		});
}