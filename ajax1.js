function ajax()
{
	var xhr=NULL;
	/*if (window.XMLHttpRequest)
	{
		xhr= new XMLHttpRequest ();
	}
	else if (window.ActiveXObject)
	{
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}*/

xhr.open("GET", "mubiz.com/developers/blocks", false);
xhr.send(null):=;

alert (xhr.responseText);
