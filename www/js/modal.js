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

for (var i=0; i < modalidade.length; i++) {
	if (modalidade[i].idesporte == idPagina) {
		var categ = document.getElementById("modal");
    link = "categoria.html?id=" + idPagina +'&idMod=' + modalidade[i].idmodalidade
		if (i % 2 == 0) {
			var inserirInfos = '<a href="' + link +
      '"><li class="impar">' + modalidade[i].nome + '</li></a>'
		}
		else {
			var inserirInfos = '<a href="' + link +
      '"><li class="par">' + modalidade[i].nome + '</li></a>'
		}
		categ.innerHTML += inserirInfos;
	}
}
