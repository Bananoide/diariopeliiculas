function myFunction(){
        var x=document.getElementById("miMenu");
        if (x.className === "menu"){
            x.className += " responsive";
        }
        else{
            x.className="menu";
        }
    }

function genfav(resultado){
	if(resultado=="terror"){
		window.location.href = "terror.html";
	}
	else if(resultado=="comedia"){
		window.location.href="comwdia.html";
	}
}

var audio=document.getElementById("miAudio");
var vol=document.getElementById("miVol");

vol.addEventListener("input", function(){
	audio.volume= vol.value;
});
