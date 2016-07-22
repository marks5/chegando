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

var i = queryString("idlocal");
i = i - 1; //O Json começa por 1, mas quando a gente transforma em objeto do javascript o primeiro index é o 0
console.log(i);
/* fim da busca ao id na url da pagina*/
var link = "mapa.html?latitude=" + local[i].lagitude + "&longitude=" + local[i].longitude;
var inserirInfos = '<h3 class="desclocais">' + local[i].nome + '</h3><br> <h4 class="endereco">Endereço: </h4><br>' + local[i].tipologradouro +' ' + local[i].logradouro + ', ' + local[i].numero + ' ' + local[i].complemento + ' <br> ' + local[i].bairro + ' - ' + local[i].cidade + '-' + local[i].estado + '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><a href="'+link+'"><button align="center" class="myButton">Como Chegar</button></a>';
var localhtml = document.getElementById("localaqui");
localhtml.innerHTML += inserirInfos;