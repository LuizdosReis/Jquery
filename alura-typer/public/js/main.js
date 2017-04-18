qtPalavras = $(".frase").text().split(" ").length;
$('#qt_palavras').text(qtPalavras);

var campo = $('.campo-digitacao');

campo.on('input', function() {
    $('#contador-palavras').text(campo.val().split(/\S+/).length -1);
    $('#contador-caracter').text(campo.val().length);
});



