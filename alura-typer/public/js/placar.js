$('#botao-placar').click(mostarPlacar);


function mostarPlacar(){
  $('.placar').slideToggle(600);
}


function inserePlacar(){
            var corpoTabela = $('.placar').find('tbody');
            var palavras = $('#contador-palavras').text();
            var usuario = 'luiz henrique';

            linha = criarLinha(usuario,palavras);

            linha.find('.remover').click(removerLinhas);

            corpoTabela.prepend(linha);
}


function criarLinha(usuario,palavras){
    linha = $('<tr>');
    colunaUsuario = $('<td>').text(usuario);
    colunaPalavras = $('<td>').text(palavras);
    colunaRemover = $('<td>');

    link = $('<a>').addClass('remover','center');

    icone = $('<i>').addClass('material-icons').text('delete');

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}


function removerLinhas(event) {
    event.preventDefault();
    $(this).parents('tr').remove();
};
