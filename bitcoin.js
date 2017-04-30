

$(document).ready(function() {


	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_block_number').append(data.height);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
		}
	});

});


$(document).ready(function() {

	$.ajax({
		url : "https://bitcoin.mubiz.com/info",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_connection').append(data.connections),
			$('#bitcoin_version').append(data.version),
			$('#bitcoin_protocole_version').append(data.protocolversion);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_connection').append(err+" N/A"),
			$('#bitcoin_version').append(err+" N/A"),
			$('#bitcoin_protocole_version').append(err+" N/A");
		}
	});



});

$(document).ready(function(){
 $("button").click(function(e) {
     e.preventDefault();
     $.ajax({
		url : "https://api.mubiz.com/@"+document.GetElementById("inputadresse").value+"/bitcoin/",
	     
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#user_url').append(data.user_url);
			$('#user_name').append(data.user_name);
			$('#bitcoin_adress').append(data.bitcoin_adress);
		},

		error : function(xhr, status, err) {
			$('#user_url').append(err+" N/A");
			$('#user_adresse').append(err+" N/A");
			$('#bitcoin_adress').append(err+" N/A");
		}
	});
 });	
});
		  

