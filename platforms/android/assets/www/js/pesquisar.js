
//pela data funcionando:
function pesquisar() {
	var inserirInfos = "";
	var listaEventos = document.querySelector("#listaEventos");
	listaEventos.innerHTML = inserirInfos;
	pesquisaUsuarioCrua = document.querySelector('#pesquisaAgenda').value;
	//pesquisaUsuarioCrua = "Centro Olimpico de Hoquei";
	pesquisaUsuarioCrua2 = removerAcentos(pesquisaUsuarioCrua);
	pesquisaUsuario = pesquisaUsuarioCrua2.toLowerCase()
	console.log(pesquisaUsuario);
	for (var i = 0; i < eventosTotal.length; i++){
		var dataHorario = eventosTotal[i].data;

		var arrumarData = function(datacomhorario){ //inverter a data e separar o horario
                    horario = datacomhorario.substring(11,16);
                    var data1 = datacomhorario.substring(0,10);
                    var dataArray = data1.split("-");
                    dataFinal = dataArray[2] +"/"+ dataArray[1] + "/" + dataArray[0];
               }
    	arrumarData(dataHorario);
    	if (pesquisaUsuario == dataFinal) {
    		console.log("achou pela data");
    		eventoBusca = eventosTotal[i].conteudo;
    		inserirInfosDaBusca(eventoBusca);
    	};
		for (var content in eventosTotal[i]) {
		 
		    var obj = eventosTotal[i][content];
		  
		    if (typeof obj !== "string"){
		    	// console.log(obj) //lista os objetos de conteudo
			    for (var nome in obj) {  
			        if(!obj.hasOwnProperty(nome)) continue;	//fazer as pesquisas aqui     
			        // console.log(obj[nome].idevento + " = " + obj[nome].idlocal); //fica o idevento = idlocal de todos os conteudos
			        var local = obj[nome].nome;	       
			        var local2 = removerAcentos(local);
			        var local3 = local2.toLowerCase();
			        var idesporte = obj[nome].idesporte
			        if (pesquisaUsuario == local3) { //PESQUISA POR LOCAL FUNFANDOOO
			        	console.log("ACHOUUUUU pelo nome do local")
			        	eventoBusca =  obj[nome];
			        	console.log(obj[nome])
    					inserirInfosDaBusca2(eventoBusca);
			        }
			        
			    };
			}
		};
	};
	//Caso busque pela data e ele gere um ARRAY:
function inserirInfosDaBusca(argument){
	eventos1 = argument;
	console.log(eventos1);
for (var i = 0; i < eventos1.length; i++){
	var dataHorario = eventos1[i].data;
	var data1 = "";
	var arrumarData = function(datacomhorario){ //inverter a data e separar o horario
                    horario = datacomhorario.substring(11,16);
                    data1 = datacomhorario.substring(0,10);
                  
                    var dataArray = data1.split("-");
                    dataFinal = dataArray[2] +"/"+ dataArray[1] + "/" + dataArray[0];
                    
               }
    arrumarData(dataHorario);

	var idesporte = eventos1[i].idesporte;
	var idevento = eventos1[i].idevento;
	var link = "evento.html?id="+ idevento +"&data=" +data1 ; 
	

	var listaEventos = document.querySelector('#listaEventos');
	

	for (var e = 0; e < esp.length; e++) {
		if (esp[e].idesporte == idesporte) {
			img = esp[e].idesporte
			
			nomeEsporte = esp[e].nome;
			};
		}
		
	var inserirInfos = '<div class="linha pc100"><div class="pc30"><a href="'+link+'">\
	<img id="icon" src="images/'+ img +'.png"/> </a></div><div class="pc70"><a href="'+link+'">\
	<h2 class="fonth2">'+ nomeEsporte +'</h2> <p class="tamfont">'+ dataFinal + '-' + horario +'</p>\
	<p class="tamfont">'+ eventos1[i].nome+'</p></a></div>\
	<img id="bell" align="right" src="images/bell.png" onclick="avisonotificacao('+eventos1[i].idevento+',\''+nomeEsporte+'\',\''+eventos1[i].data+'\')"/></div>'; //html
	listaEventos.innerHTML += inserirInfos;
};

}

//Caso busque e ache resposta em vários objetos separados, usar esse código:

function inserirInfosDaBusca2(argument){
	eventos2 = argument
	console.log(eventos2)
	var dataHorario = eventos2.data;
	var data1= "";

	var arrumarData = function(datacomhorario){ //inverter a data e separar o horario
                    horario = datacomhorario.substring(11,16);
                    data1 = datacomhorario.substring(0,10);
                  
                    var dataArray = data1.split("-");
                    dataFinal = dataArray[2] +"/"+ dataArray[1] + "/" + dataArray[0];
                    
               }
    arrumarData(dataHorario);

	var idesporte = eventos2.idesporte;
	var idevento = eventos2.idevento;
	var link = "evento.html?id="+ idevento+"&data="+ data1; 
	

	var listaEventos = document.querySelector('#listaEventos');
	

	for (var e = 0; e < esp.length; e++) {
		if (esp[e].idesporte == idesporte) {
			img = esp[e].idesporte
			nomeEsporte = esp[e].nome;
			};
		}
		
	var inserirInfos = '<div class="linha pc100"><div class="pc30"><a href="'+link+'">\
	<img id="icon" src="images/'+ img +'.png"/> </a></div><div class="pc70"><a href="'+link+'">\
	<h2 class="fonth2">'+ nomeEsporte +'</h2> <p class="tamfont">'+ dataFinal + '-' + horario +'</p>\
	<p class="tamfont">'+ eventos2.nome+'</p></a></div>\
	<img id="bell" align="right" src="images/bell.png" onclick="avisonotificacao('+eventos2.idevento+',\''+nomeEsporte+'\',\''+eventos2.data+'\')"/></div>'; //html
	listaEventos.innerHTML += inserirInfos;


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
}
};
