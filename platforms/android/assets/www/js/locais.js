//Gerar locais
for (var i = 0; i < local.length; i++){
	var locais = document.getElementById("locaisaqui");
	console.log(local[i]);
	var link = "local.html?idlocal=" + local[i].idlocal;
	var inserirInfos = '<a href="' + link + '"><div class="linha"><div class="pc30 icon"><img src="images/' + local[i].tipo +'.png"></div><div class="pc70"><h2 class="locaish2"> ' + local[i].nome +'</h2></div></div></a>'; //html
	locais.innerHTML += inserirInfos;
};