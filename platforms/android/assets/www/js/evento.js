/*busca o id na url*/
function queryString(parameter) {  
              var loc = location.search.substring(1, location.search.length);   
              var param_value = false;   
              var params = loc.split("&");   
              for (i=0; i<params.length;i++) {   
                  param_name = params[i].substring(0,params[i].indexOf('='));   
                  if (param_name == parameter) {                                          
                      param_value = params[i].substring(params[i].indexOf('=')+1)   
                  }   
              }   
              if (param_value) {   
                  return param_value;   
              }   
              else {   
                  return false;   
              }   
        }

var idPagina = queryString("id");
console.log(idPagina);
/*fim da busca ao id na url*/

for (var i = 0; i < eventos.length; i++){
	var arrumarData = function(datacomhorario){ //inverter a data e separar o horario
        horario = datacomhorario.substring(11,16);
        var data1 = datacomhorario.substring(0,10);
        console.log(horario, data1);
        var dataArray = data1.split("-");
        dataFinal = dataArray[2] +"/"+ dataArray[1] + "/" + dataArray[0];
        console.log(dataFinal);
               }
    arrumarData(dataHorario);
	var nomelocal = eventos[i].nome;
	var idevento = eventos[i].idevento;
	console.log(idevento);
	var idesporte = eventos[i].idesporte;
	for (var a = 0; a < local.length; a++) {
		if (eventos[i].idlocal == local[a].idlocal) {
			var latitude = local[a].lagitude;
			var longitude = local[a].longitude;
		};
	};

	if (idevento == idPagina) {	
		var eventoUnico = document.getElementById("eventoUnico");
		for (var e = 0; e < esp.length; e++) {
			if (esp[e].idesporte == idesporte) {
				nomeEsporte = esp[e].nome;
				};
			for (var u=0; u < categoria.length; u++) {
			if (categoria[u].idesporte == idesporte)
				if (categoria[u].idmodalidade == -1) { //verifica se tem modalidade	
			    link = "categoria.html?id="+ idesporte ; //pag seguinte se n tiver modalidade    
				}
				else {
				link = "modalidades.html?id="+ idesporte ; //pag seguinte se tiver modalidade		
				};
			};
		}
		var inserirInfos = '<div id="content"><h2 id="titulo">' + nomeEsporte +
		'</h2><a href="'+ link +'"><button class="myButton">Regras</button></a>\
		<div class="linhaEvento"><h3 class="tituloEvento">Data:</h3><p>'+ dataFinal +
		'</p></div><div class="linhaEvento"><h3 class="tituloEvento">Horário:</h3><p>' + horario + 
		'</p></div><div class="linhaEvento"><h3 class="tituloEvento">Local:</h3><p>'+ nomelocal +
		'</p></div><a href="mapa.html?latitude='+latitude+'&longitude='+longitude+'"><button class="myButton">Como chegar</button></a>'; //html
		eventoUnico.innerHTML += inserirInfos;
	}
};
