$.ajax({
	method: 'GET',
	dataType: 'json',
	url: "http://190.242.42.197/aplicativos/SoporteTecnico/apiSoporte/requests.php",
	contentType: 'application/json; charset=UTF-8',
	success: function(data) {
		console.log(data);
	},
	beforeSend: function(xhr) {
		xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		xhr.withCredentials = true;
	}
})