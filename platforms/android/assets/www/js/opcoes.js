var opcaoidioma =  window.localStorage.getItem("ididioma");

if(opcaoidioma == 1){
	console.log("Português");
	document.querySelector("#idiomas").innerHTML='<h2 id="tituloidioma">Idiomas</h2>\
					<form>\
						<div class="radio">\
						<input type="radio" id="idioma_radioPT" name="idioma" onclick="setaridiomaOpc(1)" checked ><img src="images/ptbr.png" width="1.5em" >PORTUGUÊS</input><br>\
						</div>\
						<div class="radio">\
						<input type="radio" id="idioma_radioEN" name="idioma" onclick="setaridiomaOpc(2)"><img src="images/usen.png" width="1.5em" height="15em" onclick="setaridiomaOpc(2)">ENGLISH</input><br>\
						</div>\
					</form>';
}else{
	console.log("Inglês");
	document.querySelector("#idiomas").innerHTML='<h2 id="tituloidioma">Idiomas</h2>\
					<form>\
						<div class="radio">\
						<input type="radio" id="idioma_radioPT" name="idioma" onclick="setaridiomaOpc(1)"><img src="images/ptbr.png" width="1.5em" >PORTUGUÊS</input><br>\
						</div>\
						<div class="radio">\
						<input type="radio" id="idioma_radioEN" name="idioma" onclick="setaridiomaOpc(2)" checked><img src="images/usen.png" width="1.5em" height="15em" onclick="setaridiomaOpc(2)">ENGLISH</input><br>\
						</div>\
					</form>';
}