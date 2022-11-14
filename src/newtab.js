
function loadContent() {
	// Security hazard from injecting arbitrary HTML into body? meh.

	browser.storage.local.get({'data': '', 'sync': true}).then(function(localstorage) {
		if(localstorage.sync === true) {
			browser.storage.sync.get({'data':''}).then(function(syncedstorage) {
				document.body.innerHTML = sanitizeHtml(syncedstorage.data);
			});
		} else {
			document.body.innerHTML = sanitizeHtml(localstorage.data);
		}
	});
}

function sanitizeHtml(x) {
	return DOMPurify.sanitize(x, {FORCE_BODY: true});
}

loadContent();
