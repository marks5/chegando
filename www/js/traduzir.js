console.log("carregou")

function setaridioma(ididioma)  {

console.log(ididioma);

window.localStorage.setItem("ididioma", ididioma);
  
};

function setaridiomaOpc(ididioma)  {

console.log(ididioma);

window.localStorage.setItem("ididioma", ididioma);
window.location = "principal.html";
  
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

        document.querySelector('#agenda').innerHTML='EVENTS';
        document.querySelector('#esportes').innerHTML='SPORTS';
        document.querySelector('#locais').innerHTML='PLACES';
        document.querySelector('#opcoes').innerHTML='OPTIONS';

        document.querySelector('#titulo').innerHTML='Options';
        document.querySelector('#h4inline').innerHTML='Notification';
        document.querySelector('#notificacao').innerHTML='Remember in ';
        document.querySelector('#tituloidioma').innerHTML='Language';
        document.querySelector('#info').innerHTML='About';
        document.querySelector('#versao').innerHTML='Version: 1.0';
        document.querySelector('#desenvolvedores').innerHTML='<p class="description" id="desenvolvedores">Developers<p><div id="alunos">';
        document.querySelector('#alunos').innerHTML='<p class="devs">Ana Luisa Silva de Oliveira</p><p class="devs">André Felipe dos Santos</p><p class="devs">Annye Ferreira dos Santos</p><p class="devs">Argélia Nirlandia Lemos Martins</p><p class="devs">Bruno Augusto Miltersteiner do Amaral de Oliveira</p><p class="devs">Caique Palermo dos Santos</p><p class="devs">Calvin Vinicius Costa da Silva</p><p class="devs">Caroline Oliveira da Silva</p><p class="devs">Cristina Motinha Martins</p><p class="devs">Daniel de Araújo Canedo</p><p class="devs">Daniel Tavares Figueira</p><p class="devs">Danilo Tambara da Silva</p><p class="devs">Denyver Lopes Silva</p><p class="devs">Douglas Cardoso Damasceno</p><p class="devs">Douglas Willian Feu Pereira</p><p class="devs">Edilayne Cristina da Silva Moutinho</p><p class="devs">Fabio Rodrigues de Oliveira</p><p class="devs">Fabricio Tadeu Dias</p><p class="devs">Fred Sales Junior</p><p class="devs">Gabriel de Oliveira Topini</p><p class="devs">Gabriel Marques de Carvalho</p><p class="devs">Gabriel Silva Rodrigues</p><p class="devs">Guilherme Alves dos Santos</p><p class="devs">Guilherme Cordeiro Campos</p><p class="devs">Gustavo Fonseca de Almeida</p><p class="devs">Iago Jônatas Gomes de Souza</p><p class="devs">Igor da Silva Felizardo de Azevedo</p><p class="devs">Jefferson Claudino Leal</p><p class="devs">Jessica Carvalho da Silva Brandão</p><p class="devs">João Pedro da Costa Silva</p><p class="devs">Jonathan Duarte de Souza</p><p class="devs">Jonathan Luiz Braga dos Santos</p><p class="devs">Jorge Luiz Vieira da Silva Junior</p><p class="devs">Karina Lorraine Ribeiro Barbosa</p><p class="devs">Larissa Chrislaine da Silva Ferreira</p><p class="devs">Larissa de Faria Machado</p><p class="devs">Leando da Costa Lima</p><p class="devs">Leonardo Rocha Garconi</p><p class="devs">Lucas Esteves Aderne</p><p class="devs">Lucas Soares Marques</p><p class="devs">Luiz Felipe Torres de Siqueira</p><p class="devs">Macleine Xavier de Souza</p><p class="devs">Marcelo Vicente Santos Pereira Filho</p><p class="devs">Marcos Vinicius da Silva Melo</p><p class="devs">Mariane Silva Ferreira</p><p class="devs">Matheus de Carvalho Luz</p><p class="devs">Maycon Douglas Gomes da Silva</p><p class="devs">Maycon Luiz Pires Joaquim</p><p class="devs">Millene Gomes Amaral da Silva</p><p class="devs">Nayra Gomes de Lima Ferreira</p><p class="devs">Patrick Ribeiro de Resende</p><p class="devs">Paulo Henrique Rocha Simões</p><p class="devs">Pedro Henrique Marques Ayres</p><p class="devs">Pedro do Nascimento Moraes</p><p class="devs">Rafael Alves da Silva</p><p class="devs">Rafael Marinho de Oliveira Fernandes</p><p class="devs">Rennan Daniel Almeida dos Santos</p><p class="devs">Sara Gomes do Nascimento</p><p class="devs">Suzana Maria Barela da Silva</p><p class="devs">Thamiris da Silva Ribas</p><p class="devs">Thiago de Souza Freitas</p><p class="devs">Thiago dos Santos Coutinho</p><p class="devs">Verônica da Silva Dionisio</p><p class="devs">Victor Hugo Billi de Oliveira Dias</p><p class="devs">Weldes Furtado Cacique</p><p class="devs">Wendell Reis da Silva</p><p class="devs">Weslley Castro da Silva dos Santos</p><p class="devs">William dos Reis Cacho</p><p class="devs">Yago Bezerra da Cruz</p><p class="devs">Yuri Costa de Oliveira</p><p class="devs">Yuri da Costa Araujo Martins</p><p class="devs">Yuri Pereira de Souza</p></div>';
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




