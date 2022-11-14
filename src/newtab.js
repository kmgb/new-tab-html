
function loadContent() {
	// Security hazard from injecting arbitrary HTML into body? meh.

	browser.storage.local.get({'url': '', 'sync': true}).then(function(localstorage) {
		if(localstorage.sync === true) {
			browser.storage.sync.get({'url':''}).then(function(syncedstorage) {
				document.body.innerHTML = syncedstorage.url;
			});
		} else {
			document.body.innerHTML = localstorage.url;
		}
	});
}

loadContent();

let favicon = document.getElementById('favicon');

if (window.matchMedia) {
	let mediaql = window.matchMedia('(prefers-color-scheme: dark)');

	if (mediaql.matches) {
		// Dark mode
		favicon.href = './icon16.png';
	}
	else {
		favicon.href = './icon16-dark.png';
	}

    mediaql.addEventListener('change', event => {
		location.reload();
	});
}
