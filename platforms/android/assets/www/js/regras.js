/*busca o id na url da pagina*/

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
var idModalidade = queryString("idMod");
console.log(idModalidade);
var idCategoria = queryString("idCat");
console.log(idCategoria);
/* fim da busca ao id na url da pagina*/

for (var i=0; i< regras.length; i++) {  //se tiver vindo de esporte > modalidade > categoria > regra
  var regrasCategoria = document.getElementById("regrasCategoria");
  
  if (regras[i].idesporte == idPagina){
    if (regras[i].idmodalidade == idModalidade){
        if (regras[i].idcategorias == idCategoria ) {
          for (var e=0; e<esp.length; e++) { //buscar o nome do esporte no json de esportes 
            if (regras[i].idesporte == esp[e].idesporte) {
              var nomeEsporte = esp[e].nome;
              console.log(nomeEsporte); 
            };
          };
          for (var o=0; o<modalidade.length; o++) { //buscar o nome da modalidade no json de modalidades
            if (regras[i].idmodalidade == modalidade[o].idmodalidade) {
              var nomeModalidade = modalidade[o].nome;
              console.log(nomeModalidade);
            };
          };
          for (var u=0; u<categoria.length; u++) { //buscar o nome da categoria no json de categorias
            if (regras[i].idcategorias == categoria[u].idcategorias) {
              var nomeCategoria = categoria[u].nome;
              console.log(nomeCategoria);
            };
          };
          var inserirInfos = '<h2>' + nomeEsporte + '</h2><h3>' +
            nomeModalidade + '</h3><h4>' + nomeCategoria + 
            '</h4><div class="texto"><h4> Regras: </h4><p class="description">' +
            regras[i].regra + '</p></div></div>'; //gera o HTML
            regrasCategoria.innerHTML += inserirInfos; //insere o html
        }; 
    };
  };
};

if (idModalidade == false) { //se não tiver vindo de modalidade, e sim esporte > categoria > regra
  for (var i=0; i< regras.length; i++) {  
  var regrasCategoria = document.getElementById("regrasCategoria");
  
  if (regras[i].idesporte == idPagina){
        if (regras[i].idcategorias == idCategoria ) {
          for (var e=0; e<esp.length; e++) {
            if (regras[i].idesporte == esp[e].idesporte) {
              var nomeEsporte = esp[e].nome;
              console.log(nomeEsporte);
            };
          };
          for (var u=0; u<categoria.length; u++) {
            if (regras[i].idcategorias == categoria[u].idcategorias) {
              var nomeCategoria = categoria[u].nome;
              console.log(nomeCategoria);
            };
          };
          var inserirInfos = '<h2>' + nomeEsporte + '</h2><h3>' +
            nomeCategoria + '</h3></h4><div class="texto"><h4> Regras: </h4><p class="description">' +
            regras[i].regra + '</p></div></div>'; //gera o HTML
            regrasCategoria.innerHTML += inserirInfos; //insere o html
        }; 
    };
  };
};
