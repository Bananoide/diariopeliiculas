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

var sub = document.getElementById("subirVol");
  var baj = document.getElementById("bajarVol");

  subirBoton.addEventListener("click", function() {
    if (audio.volume < 1) {
      audio.volume += 0.1;
    }
  });

  bajarBoton.addEventListener("click", function() {
    if (audio.volume > 0) {
      audio.volume -= 0.1;
    }
  });
