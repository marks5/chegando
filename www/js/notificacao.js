function avisonotificacao(idevento, nomeesporte, data){
    var opcaoantecedencia = window.localStorage.getItem("antecedencia");

    function notificar(idevento, nomeesporte, antecedencia, data) {
                var now = new Date(data).getTime();
                var antecedenciaemms = antecedencia * 60 * 60 * 1000;
                var tocarem = new Date(now - antecedenciaemms);
                cordova.plugins.notification.local.schedule({
                    id: idevento,
                    title: 'Prepare-se!',
                    text: 'O seu evento de '+nomeesporte+ ' irá começar em '+antecedencia + 'hora(s)',
                    at: tocarem,
                });
                window.alert("Você será notificado "+antecedencia+"hora(s) antes do seu evento começar");
            }
    notificar(idevento,nomeesporte,opcaoantecedencia,data);

    
}


