var tempoInicial = $('#tempo').text();
var campo = $('.campo-digitacao');


$(function(){
    atualizaTamanhoFrase();
    atualizaContadores();
    cronometro();
    $('#botao-reiniciar').click(reiniciaJogo);

});

function atualizaTamanhoFrase(){
    var qtPalavras = $(".frase").text().split(" ").length;
    $('#qt_palavras').text(qtPalavras);
}

function atualizaContadores(){
    campo.on('input', function() {
        $('#contador-palavras').text(campo.val().split(/\S+/).length -1);
        $('#contador-caracter').text(campo.val().length);
    });
}

function cronometro(){
    campo.one('focus',function(){
        var tempo = tempoInicial;
        $('#botao-reiniciar').attr('disabled', true);
        var cronometroId  = setInterval(function(){
            tempo--;
            $('#tempo').text(tempo);
            if(tempo < 1){
                campo.attr('disabled', true);
                $('#botao-reiniciar').attr('disabled', false);
                campo.addClass('campo-desativado');
                clearInterval(cronometroId);
            }
        },1000);
    });
};

function reiniciaJogo(){
        campo.attr('disabled', false);
        campo.val('');
        campo.removeClass('campo-desativado');
        $('#contador-palavras').text('0');
        $('#contador-caracter').text('0');
        $('#tempo').text( tempoInicial);
        cronometro();
};














