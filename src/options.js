/* Credit: Zach Adams https://github.com/zach-adams/simple-new-tab-url
 * Used with permission
 */

function key_delay(fn, ms) {
	let timer = 0;
	return function(...args) {
		clearTimeout(timer);
		timer = setTimeout(fn.bind(this, ...args), ms || 0);
	}
}

function sntu_init() {

	function sntu_set_version_number () {
		document.getElementById('version').textContent = chrome.runtime.getManifest().version;
	}
	sntu_set_version_number();



	let data_input_el = document.getElementById('data');
	let sync_input_el = document.getElementById('sync');
	let sync_enabled = true;

	chrome.storage.local.get({'data': '', 'sync': true}, function(local_results) {
		data_input_el.value = local_results.data;
		sync_enabled = local_results.sync;
		sync_input_el.checked = local_results.sync;
		if(sync_enabled) {
			chrome.storage.sync.get({'data': ''}, function(syncstorage) {
				if(syncstorage.data !== '') {
					data_input_el.value = syncstorage.data;
				}
			});
		}
	});

	function sntu_keyup_save_data(event) {
		chrome.storage.local.set({'data': event.target.value});
		if(sync_enabled) {
			chrome.storage.sync.set({'data': event.target.value});
		}
	}
	data_input_el.addEventListener('keyup', key_delay(sntu_keyup_save_data, 200));

	function sntu_save_sync_setting(event) {
		chrome.storage.local.set({'sync': event.target.checked });
	}
	sync_input_el.addEventListener('change', key_delay(sntu_save_sync_setting, 200));


	window.addEventListener("beforeunload", function(e){
		chrome.storage.local.set({
			'sync': sync_input_el.checked,
			'data': data_input_el.value
		});
		if(sync_input_el.checked) {
			chrome.storage.sync.set({ 'data': data_input_el.value });
		}
	}, false);

}

document.addEventListener("DOMContentLoaded", sntu_init);
