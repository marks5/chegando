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

var opcaoantecedencia = window.localStorage.getItem("antecedencia");

if(opcaoantecedencia == 12){
	console.log("12 hrs de antecedencia");
	document.querySelector("#antecedencias").innerHTML='<form>\
						<div class="divnotificacao">\
						<input type="radio" id="antecedencia12" name="antecedencia" onclick="setarAntecedenciaOpc(12)" checked>12:00</input><br>\
						</div>\
						<div class="divnotificacao">\
						<input type="radio" id="antecedencia6" name="antecedencia" onclick="setarAntecedenciaOpc(6)">06:00</input><br>\
						</div>\
						<div class="divnotificacao">\
						<input type="radio" id="antecedencia1" name="antecedencia" onclick="setarAntecedenciaOpc(1)">01:00</input><br>\
						</div>\
					</form>';
}else{
	if (opcaoantecedencia == 6){
		console.log("6 hrs de antecedencia");
		document.querySelector("#antecedencias").innerHTML='<form>\
						<div class="divnotificacao">\
						<input type="radio" id="antecedencia12" name="antecedencia" onclick="setarAntecedenciaOpc(12)">12:00</input><br>\
						</div>\
						<div class="divnotificacao">\
						<input type="radio" id="antecedencia6" name="antecedencia" onclick="setarAntecedenciaOpc(6)"checked>06:00</input><br>\
						</div>\
						<div class="divnotificacao">\
						<input type="radio" id="antecedencia1" name="antecedencia" onclick="setarAntecedenciaOpc(1)">01:00</input><br>\
						</div>\
					</form>';
	}else{
		console.log("1 hr de antecedencia");
		document.querySelector("#antecedencias").innerHTML='<form>\
						<div class="divnotificacao">\
						<input type="radio" id="antecedencia12" name="antecedencia" onclick="setarAntecedenciaOpc(12)">12:00</input><br>\
						</div>\
						<div class="divnotificacao">\
						<input type="radio" id="antecedencia6" name="antecedencia" onclick="setarAntecedenciaOpc(6)">06:00</input><br>\
						</div>\
						<div class="divnotificacao">\
						<input type="radio" id="antecedencia1" name="antecedencia" onclick="setarAntecedenciaOpc(1)" checked>01:00</input><br>\
						</div>\
					</form>';
	}
	
}


function setarAntecedenciaOpc(antecedencia){
	window.localStorage.setItem("antecedencia", antecedencia);
	
}
