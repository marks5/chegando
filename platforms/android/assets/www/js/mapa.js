var endlat = null;
var endlng = null;
var meulocal_lat = null;
var meulocal_lng = null;
var directionsDisplay = null;
var directionsService = null;
var miguel = {
  inferno: function(){
    console.log('O miguel rodou em algum lugar');
    
    miguel.onDeviceReady();

  },

  onDeviceReady: function(){
    console.log('Deixando o cordova "ativo"');
    miguel.startMap();
    //window.addEventListener('load', miguel.startMap, false);
    //Pega os dados do Local passado pelo link
    //miguel.pegaDadosLocal();
    //Pega a localização do cliente
    miguel.geraLocalizacao();
    //Gera rota depois do mapa inicializar e ter os dados salvos no sessionStorage
    
    //document.addEventListener('onchange', miguel.geraRota);
  },

  geraLocalizacao: function(){
    var Opcoes = {
            maximumAge: 5000,
            timeout: 10000,
            enableHighAccuracy: true
        };

    navigator.geolocation.getCurrentPosition(miguel.mappingSuccess, miguel.mappingError, Opcoes);

  },

  startMap: function(){
    directionsDisplay = new google.maps.DirectionsRenderer;
    directionsService = new google.maps.DirectionsService;
   
    var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 18,
     center: {lat: -22.904306, lng: -43.191515}
   });
   
   var infoWindow = new google.maps.InfoWindow({map: map});
   
   directionsDisplay.setMap(map);
   directionsDisplay.setPanel(document.getElementById('right-panel'));

    

  },

  mappingSuccess: function(position){
    //Economizando linhas
    endlat = miguel.pegaDadosLocal("latitude");
    endlng = miguel.pegaDadosLocal("longitude");

    meulocal_lat = position.coords.latitude;
    meulocal_lng = position.coords.longitude;

    miguel.geraRota();
    
  },

  mappingError: function(error){
    window.alert("Code: "+ error.code+ "Message: " + error.message);
  },

  pegaDadosLocal: function(parameter){
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
  },

  geraRota: function(){
    //var meulocal_lng = String(window.sessionStorage.getItem("meulocal_lng"));
    //var meulocal_lat = String(window.sessionStorage.getItem("meulocal_lat"));
    var meulocal = meulocal_lat+","+meulocal_lng;
    console.log("CARA AQUI VAI O STRING DO CAPETA DO MEU LOCAL"+meulocal);
    //var endlat = String(window.sessionStorage.getItem("endereco_lat"));
    //var endlng = String(window.sessionStorage.getItem("endereco_lng"));
    var endereco = endlat+","+endlng;
    console.log("CARA AQUIVAI O STRING DO CAPETA DO ENDEREÇO QUE QUERO IR"+endereco);

    mudaRota(directionsService,directionsDisplay);
    function mudaRota(directionsService,directionsDisplay){
      directionsService.route({
        origin: meulocal,
        destination: endereco,
        travelMode: google.maps.TravelMode.TRANSIT
           },

      function(response,status){
        if(status === google.maps.DirectionsStatus.OK){
          directionsDisplay.setDirections(response);
        }else{
          window.alert('Erro de direção'+status);
        }
      })
    }
  }
};

//miguel.inferno();