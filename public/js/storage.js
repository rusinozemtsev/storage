(function() {
	window.storage = function(fileElement, callback) {
		
		var serverUrl = '//' + location.hostname + ':' + location.port + '/api/upload';

		fileElement.addEventListener('change', function(e) {

			var formData = new FormData();
			formData.append('file', this.files[0]);

			var xhr = new XMLHttpRequest();
			xhr.open('POST', serverUrl, true);
			xhr.onload = function(e) {
				callback.call(null, null, e.target.responseText);
			};

			xhr.send(formData);

		});

	}

})();
