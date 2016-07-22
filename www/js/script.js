// Menu hamburguer

function slidetoggle() {
      var slider = document.getElementById("content-menu");
      document.getElementById("shadow").className += " is-active";
      if(slider.style.left == "0px") {
        slider.style.left = "-500px";
        
      }
      else {
        slider.style.left = "0px";
      }
    }
function slideclose() {
      var slider = document.getElementById("content-menu");
      document.getElementById("shadow").className = "shadow";
      slider.style.left = "-500px";
    }

// Redirecionar Menu

function principal(){
        location.href="principal.html"
      }
            function agenda(){
        location.href="agenda.html"
      }
            function esportes(){
        location.href="esportes.html"
      }
            function locais(){
        location.href="locais.html"
      }
            function opcoes(){
        location.href="opcoes.html"
      }
      function caminho(x){
        location.href="gm/"+x+".html"
      }