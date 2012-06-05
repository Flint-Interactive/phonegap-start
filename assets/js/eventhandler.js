//
// Handles Javascript events for our app
//

<script src="phonegap.js" type="text/javascript" charset="utf-8"></script>

function geoSuccess(position)
{
	document.getElementById("title_bar").innerHTML="geolocating";
}

function geoError(error)
{
	alert("code: " + error.code + "\n" + "message: " + error.message);
}

function geolocate()
{
	if (navigator.network.connection.type == Connection.NONE)
		{
			alert("No internet connection - we won't be able to show you any maps");
		}
	else
		{
			alert("We can reach Google - get ready for some awesome maps!");
		}
	document.getElementById("title_bar").innerHTML="it works!";
	// returns position
	geolocation.getCurrentPosition(geoSuccess, geoError);
}