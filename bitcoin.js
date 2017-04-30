
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
	<title> Page bitcoin </title>
<style type="text/css">
  body {
    background-color:#E2DCDC;
	font-family : Verdana, sans-serif;
      }
  table{
    border-collapse: collapse;
    margin:auto;
}
/*td{
    border: 1px solid black;
}*/
</style>
	<script type="text/javascript" src="bitcoin.js" defer></script>
	<script type="text/javascript" src="ajax_adresse.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

	<script src="js/bootstrap.min.js"></script>
	
	
	<script>
		function Get_url(){
		/*var var1= document.getElementById("inputadresse").value;
		$.ajax({
			type:"GET",
			url:"https://api.mubiz.com/"+var1+"/bitcoin/",

			data:JSON,
			success : function(data) {
					$('#user_url').append(data.user_url);
					$('#user_name').append(data.user_name);
				},

				error : function(xhr, status, err) {
					$('#user_url').append(err+" N/A");
					$('#user_adresse').append(err+" N/A");
				}
			});*/
			if (document.getElementById("inputadresse").value=="albincauderlier"
			{
				var user_url=""albincauderlier";
				var user_name=""Albin CAUDERLIER";
			}
			else
			{
			user_url="erreur";
			user_name="erreur";
			}
		}
	</script>

</head>
<body>	
	<h1><center> Options Bitcoin</center></h1>


	<div>Blocks</div>
		<h2>
			<span id="bitcoin_block_number"></span>
		</h2>

	<div>Nombre Connections</div>
		<h2>
			<span id="bitcoin_connection"></span>
		</h2>

	<div>version</div>
		<h2>
			<span id="bitcoin_version"></span>
		</h2>

	<div>protocole version</div>
		<h2>
			<span id="bitcoin_protocole_version"></span>
		</h2>

<form name="Formulaire" id="formulaire">
  <div class="form-group">
    <input type="adresse" class="form-control" id="inputadresse" placeholder="url" onclick='Get_url()'>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Check me out
    </label>
  </div>
  <button id="button" type="submit" class="btn btn-default">Submit</button>
</form>

	<div>Resultat requete</div>
		<h2>
			<div>url</div>
			<span id="user_url"></span>
			<div>name</div>
			<span id="user_name"></span>
		</h2>


			
	
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	</body>
</html>
