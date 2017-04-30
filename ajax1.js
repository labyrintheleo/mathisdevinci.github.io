/**
 * @author	Albin CAUDERLIER
 * @date	24/02/2017
 * 
 * Script jQuery appelant l'API de BlockCypher.com et affichant les données.
 * 
 */


$(document).ready(function(){
 $("button").click(function(e) {
     e.preventDefault();
     $.ajax({
		url : "https://api.mubiz.com/"+document.GetElementById('inputadresse').value+"/bitcoin/",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#user_url').append(data.user_url);
			$('#user_name').append(data.user_name);
		},

		error : function(xhr, status, err) {
			$('#user_url').append(err+" N/A");
			$('#user_adresse').append(err+" N/A");
		}
	});
 });	
});
