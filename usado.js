function myFunction(){
        var x=document.getElementById("miMenu");
        if (x.className === "menu"){
            x.className += " responsive";
        }
        else{
            x.className="menu";
        }
    }

 var audio = document.getElementById("miAudio");
  var vol = document.getElementById("miVol");
  var subirBoton = document.getElementById("subirVol");
  var bajarBoton = document.getElementById("bajarVol");

  vol.addEventListener("input", function() {
    audio.volume = vol.value;
  });

  subirBoton.addEventListener("click", function() {
    if (audio.volume < 1) {
      audio.volume += 0.1;
      vol.value = audio.volume;
    }
  });

  bajarBoton.addEventListener("click", function() {
    if (audio.volume > 0) {
      audio.volume -= 0.1;
      vol.value = audio.volume;
    }
  });
