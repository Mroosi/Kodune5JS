window.onload = function() {
  var bead = document.getElementsByClassName("bead");
              for(var i = 0, len = bead.length; i < len; i++){
                 bead[i].onclick = function(){this.classList.toggle("paremale");}
              }

}