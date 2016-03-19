window.onload = function() {
  var laud = document.getElementById("target")
  var ylemine;
  var vasak;
   laud.onclick = function(){vasak=Math.floor((Math.random() * 1200) + 5);ylemine=Math.floor((Math.random() * 500) + 5);
       this.style.top= ylemine +"px";this.style.left= vasak +"px";};
}
