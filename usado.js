function myFunction(){
        var x=document.getElementById("miMenu");
        if (x.className === "menu"){
            x.className += " responsive";
        }
        else{
            x.className="menu";
        }
    }

var audio=document.getElementById("miAudio");
var vol=document.getElementById("miVol");

vol.addEventListener("input", function(){
	audio.volume= vol.value;
});
