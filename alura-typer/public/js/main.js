qtPalavras = $(".frase").text().split(" ").length;
$('#qt_palavras').text(qtPalavras);

var campo = $('.campo-digitacao');

campo.on('input', function() {
    $('#contador-palavras').text(campo.val().split(/\S+/).length -1);
    $('#contador-caracter').text(campo.val().length);
});


campo.one('focus',function(){
     var tempo = $('#tempo').text();
     var cronometroId  = setInterval(function(){
            tempo--;
            $('#tempo').text(tempo);
            if(tempo < 1){
                campo.attr('disabled', 'true');
                clearInterval(cronometroId);
            }
        },1000);


});




