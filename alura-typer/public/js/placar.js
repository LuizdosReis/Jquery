$('#botao-placar').click(mostarPlacar);


function mostarPlacar(){
  $('.placar').stop().slideToggle(600);
  scrollParaPlacar();
}

function scrollParaPlacar(){
  let posicaoPlacar = $('.placar').offset().top;

  $('body').animate({
    scrollTop: posicaoPlacar + 'px'
  },1000);
}

function mostarPlacar(){
  $('.placar').stop().slideToggle(600);
}

function scrollParaPlacar(){
  let posicaoPlacar = $('.placar').offset().top;

  $('body').animate({
    scrollTop: posicaoPlacar + 'px'
  },1000);
}


function inserePlacar(){
  var corpoTabela = $('.placar').find('tbody');
  var palavras = $('#contador-palavras').text();
  var usuario = 'luiz henrique';

  linha = criarLinha(usuario,palavras);
  linha.find('.remover').click(removerLinhas);

  corpoTabela.prepend(linha);

  $('.placar').slideDown(600);
  scrollParaPlacar();

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
    let linha = $(this).parents('tr');
    linha.fadeOut(1000);
    setTimeOut(function(){
        linha.remove();
    },1000);
};
