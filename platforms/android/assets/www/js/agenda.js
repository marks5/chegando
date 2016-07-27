//tudo rodando \/ 

var mesCelular = "";
var diaCelular = "";
var eventos = null;
var pegarMes = new Date().getMonth();
var pegarDia = new Date().getDate();
var img = null;
function calmesCelular (){
	
	if ((pegarMes+1) < 10) {
		mesCelular = "0"+ (pegarMes+1).toString();
	} else {
		mesCelular =  (pegarMes+1).toString();
	}
}
calmesCelular();


function caldiaCelular(){
	if(pegarDia < 10){
		diaCelular = "0" + pegarDia.toString();
	} else {
		diaCelular = pegarDia.toString();
	}
}
caldiaCelular();


var dataCelular = (new Date().getFullYear() + "-" + (mesCelular) + "-" + (diaCelular)).toString();


for (var i = 0; i < eventosTotal.length; i++) {
	console.log((eventosTotal[i].data).toString())
	console.log(dataCelular)
	if (dataCelular == eventosTotal[i].data){
		console.log((dataCelular == eventosTotal[i].data))
		console.log(eventosTotal[i].data)
		eventos = eventosTotal[i].conteudo;
	}
}
if (eventos!=null){
for (var i = 0; i < eventos.length; i++){
	
	var dataHorario = eventos[i].data;
	var arrumarData = function(datacomhorario){ //inverter a data e separar o horario
                    horario = datacomhorario.substring(11,16);
                    var data1 = datacomhorario.substring(0,10);
                    console.log(horario, data1);
                    var dataArray = data1.split("-");
                    dataFinal = dataArray[2] +"/"+ dataArray[1] + "/" + dataArray[0];
                    console.log(dataFinal);
               }
    arrumarData(dataHorario);


	var idesporte = eventos[i].idesporte;
	var idevento = eventos[i].idevento;
	var link = "evento.html?id="+ idevento; 
	
	var listaEventos = document.getElementById("listaEventos");

		for (var e = 0; e < esp.length; e++) {
		if (esp[e].idesporte == idesporte) {
			img = esp[e].idesporte
			
			nomeEsporte = esp[e].nome;
			};
		}

		var inserirInfos = '<div class="linha pc100"><div class="pc30"><a href="'+link+'">\
	<img id="icon" src="images/'+ img +'.png"/> </a></div><div class="pc70"><a href="'+link+'">\
	<h2 class="fonth2">'+ nomeEsporte +'</h2> <p class="tamfont">'+ dataFinal + '-' + horario +'</p>\
	<p class="tamfont">'+ eventos[i].nome+'</p></a></div>\
	<img id="bell" align="right" src="images/bell.png" onclick="avisonotificacao('+eventos[i].idevento+',\''+nomeEsporte+'\',\''+eventos[i].data+'\')"/></div>'; //html
	listaEventos.innerHTML += inserirInfos;
}

}else{
	ididioma = window.localStorage.getItem("ididioma");
	if (ididioma == 1){
	var inserirInfos = '<h1 id="naohaevento">Não há eventos hoje : (</h1>';
	var listaEventos = document.getElementById("listaEventos");
	listaEventos.innerHTML = inserirInfos;
	}
	else{
	var inserirInfos = '<h1 id="naohaevento">There are no events today : (</h1>';
	var listaEventos = document.getElementById("listaEventos");
	listaEventos.innerHTML = inserirInfos;
	}
}

/*function avisonotificacao(){
	document.getElementById("shadow").className += " is-active";
	document.getElementById("alertaNotificacao").style.display = "inherit";
	document.getElementById("alertaNotificacao").style.zIndex = "200";
}*/
function fecharAviso(){
	document.getElementById("shadow").className = "shadow";
	document.getElementById("alertaNotificacao").style.display = "none";
}
function notificar(){
	console.log("funciona");
}

function removerAcentos(stringcomacento){
	var string = stringcomacento;
	var mapaAcentosHex ={
		a : /[\xE0-\xE6]/g,
		A : /[\xC0-\xC6]/g,
		e : /[\xE8-\xEB]/g,
		E : /[\xC8-\xCB]/g,
		i : /[\xEC-\xEF]/g,
		I : /[\xCC-\xCF]/g,
		o : /[\xF2-\xF6]/g,
		O : /[\xD2-\xD6]/g,
		u : /[\xF9-\xFC]/g,
		U : /[\xD9-\xDC]/g,
		c : /\xE7/g,
		C : /\xC7/g,
		n : /\xF1/g,
		N : /\xD1/g,
	};

	for (var letra in mapaAcentosHex){
		var expressaoRegular = mapaAcentosHex[letra];
		string = string.replace(expressaoRegular, letra);
	}
	return string;
};