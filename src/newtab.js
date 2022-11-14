
function loadContent() {
	// Security hazard from injecting arbitrary HTML into body? meh.

	browser.storage.local.get({'url': '', 'sync': true}).then(function(localstorage) {
		if(localstorage.sync === true) {
			browser.storage.sync.get({'url':''}).then(function(syncedstorage) {
				document.body.innerHTML = sanitizeHtml(syncedstorage.url);
			});
		} else {
			document.body.innerHTML = sanitizeHtml(localstorage.url);
		}
	});
}

function sanitizeHtml(x) {
	return DOMPurify.sanitize(x, {FORCE_BODY: true});
}

loadContent();
