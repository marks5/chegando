console.log("carregou")

function setaridioma(ididioma)  {

console.log(ididioma);

window.localStorage.setItem("ididioma", ididioma);

  
};

function setaridiomaOpc(ididioma)  {

console.log(ididioma);

window.localStorage.setItem("ididioma", ididioma);
if(ididioma == 1){
var selecionado = document.getElementById("idioma_radioPT");
var cheked = document.createAttribute("cheked");
selecionado.setAttributeNode(cheked);
window.location = "principal.html";

} else {
    var selecionado = document.getElementById("idioma_radioEN");
    var cheked = document.createAttribute("cheked");
    selecionado.setAttributeNode(cheked);
    window.location = "principal.html";

}


  
};


function idiomaselecionado() {
 ididioma =  window.localStorage.getItem("ididioma");

 if (ididioma != null ){

  window.location = "principal.html";

 };
};

function alterarinformacoesPrincipal(){
    ididioma =  window.localStorage.getItem("ididioma");
    console.log(ididioma);
    if (ididioma == 2){

        document.querySelector("#agenda").innerHTML="EVENTS";
        document.querySelector("#esportes").innerHTML="SPORTS";
        document.querySelector("#locais").innerHTML="PLACES";
        document.querySelector("#opcoes").innerHTML="OPTIONS";

        document.querySelector("#tituloPrincipal").innerHTML="Olympics Rio 2016";
        document.querySelector("#textoLegenda").innerHTML="Opening ceremony of the 2016 Olympics <br> 05/08/2016 - 20h.";
        document.querySelector("#destaque").innerHTML="Highlights";
        
       


    };
     };

     function alterarinformacoesAgenda(){
    ididioma = window.localStorage.getItem("ididioma");
    console.log(ididioma);
    if (ididioma == 2){    
        document.querySelector("#agenda").innerHTML="EVENTS";
        document.querySelector("#esportes").innerHTML="SPORTS";
        document.querySelector("#locais").innerHTML="PLACES";
        document.querySelector("#opcoes").innerHTML="OPTIONS";
        document.querySelector("#titulo").innerHTML="Events"; 
        document.querySelector("#not1").textContent="When you clicking the bell you will receive a notification about it";
        document.querySelector("#not2").textContent="Do you want to be notified?";
        document.querySelector("#buttonSim").innerHTML="Yes";
        document.querySelector("#buttonNo").innerHTML="No";  
    };
     };

function alterarinformacoesEsporte(){
    ididioma =  window.localStorage.getItem("ididioma");
    console.log(ididioma);
    if (ididioma == 2){

        document.querySelector("#agenda").innerHTML="EVENTS";
        document.querySelector("#esportes").innerHTML="SPORTS";
        document.querySelector("#locais").innerHTML="PLACES";
        document.querySelector("#opcoes").innerHTML="OPTIONS";
        document.querySelector("#titulo").innerHTML="Sports";     

    };
     };


function alterarinformacoesLocais(){
    ididioma =  window.localStorage.getItem("ididioma");
    console.log(ididioma);
    if (ididioma == 2){

        document.querySelector("#agenda").innerHTML="EVENTS";
        document.querySelector("#esportes").innerHTML="SPORTS";
        document.querySelector("#locais").innerHTML="PLACES";
        document.querySelector("#opcoes").innerHTML="OPTIONS";

        document.querySelector("#titulo").innerHTML="Places";
   
        
       


    };
     };

function alterarinformacoesMapa(){
    ididioma =  window.localStorage.getItem("ididioma");
    console.log(ididioma);
    if (ididioma == 2){

        document.querySelector("#agenda").innerHTML="EVENTS";
        document.querySelector("#esportes").innerHTML="SPORTS";
        document.querySelector("#locais").innerHTML="PLACES";
        document.querySelector("#opcoes").innerHTML="OPTIONS";
        document.querySelector("#titulo").innerHTML="Route";
    };
}

     function alterarinformacoesOpcoes(){
    ididioma =  window.localStorage.getItem("ididioma");
    console.log(ididioma);
    if (ididioma == 2){

        document.querySelector("#agenda").innerHTML="EVENTS";
        document.querySelector("#esportes").innerHTML="SPORTS";
        document.querySelector("#locais").innerHTML="PLACES";
        document.querySelector("#opcoes").innerHTML="OPTIONS";

        document.querySelector("#titulo").innerHTML="Options";
        document.querySelector("#h4inline").innerHTML="Notification";
        document.querySelector("#notificacao").innerHTML="Remember in ";
        document.querySelector("#tituloidioma").innerHTML="Language";
        document.querySelector("#info").innerHTML="About";
        document.querySelector("#versao").innerHTML="version : 1.0";
        document.querySelector("#desenvolvedores").innerHTML="Developers";
        document.querySelector("#textodev").innerHTML="Developers";

    };
     };

function alterarinformacoesLocal(){
    ididioma =  window.localStorage.getItem("ididioma");
    console.log(ididioma);
    if (ididioma == 2){

        document.querySelector("#agenda").innerHTML="EVENTS";
        document.querySelector("#esportes").innerHTML="SPORTS";
        document.querySelector("#locais").innerHTML="PLACES";
        document.querySelector("#opcoes").innerHTML="OPTIONS";
        document.querySelector("#titulo").innerHTML="Place";
    };
}




