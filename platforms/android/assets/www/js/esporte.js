//Gerar esporte

for (var i=0; i< esp.length; i++) {
	
	var esportes = document.getElementById("esportesaqui"); 
	if (esp[i].icon_end === "Olimpico") {
		var img = esp[i].nome.toLowerCase(); //cria a url da img nome_do_esporte
		
	} //coloca em letra minuscula
	else {
		var icone = esp[i].nome.toLowerCase();
		var img = icone+"(P)"; //diz que é paralimpico
	}
	var linkimg = img.replace(/\s/g,""); //cria a url da img nome_do_esporte tirando os espaços do nome do esporte
	var linkimg2 = removerAcentos(linkimg);//tira os acentos do nome do esporte para transformar no link da imagem
	console.log(linkimg2);
		for (var e=0; e < categoria.length; e++) {
			if (categoria[e].idesporte == esp[i].idesporte)
				if (categoria[e].idmodalidade == -1) { //verifica se tem modalidade	
			    link = "categoria.html?id="+ esp[i].idesporte ; //pag seguinte se n tiver modalidade    
				}
				else {
				link = "modalidades.html?id="+ esp[i].idesporte ; //pag seguinte se tiver modalidade		
				};
			};
	var inserirInfos = '<div class="linha"><a href="' +
	 link +	'"> <div class="pc30 icon"><img src="images/' + linkimg2 +
	'.png"></div><div class="pc70"> <h2 class="esportesh2"> ' + esp[i].nome +
	'</h2></div></div><br></a>'; //gera o HTML
	esportes.innerHTML += inserirInfos; //insere o html
};

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
