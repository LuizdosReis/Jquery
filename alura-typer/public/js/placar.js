$('#botao-placar').click(mostarPlacar);
$('#botao-sync').click(sincronizarPlacar);


function mostarPlacar(){
  $('.placar').stop().slideToggle(600);
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
    setTimeout(function(){
        linha.remove();
    },1000);
};

function sincronizarPlacar(){
  let placar = [];
  let linhas = $('tbody>tr');

  linhas.each(function(){
    let usuario = $(this).find('td:nth-child(1)').text();
    let palavras = $(this).find('td:nth-child(2)').text();

    let score = {
      usuario: usuario,
      pontos: palavras
    }

    placar.push(score);
  });

  let dados = {
    placar: placar
  }

  $.post("http://localhost:3000/placar",dados,function(){
    console.log("dados enviados");
  })
}


function atualizaPlacar(){
  $.get("http://localhost:3000/placar",function(data){
    $(data).each(function(){
      let linha = criarLinha(this.usuario,this.pontos);
      linha.find('.remover').click(removerLinhas);
      $('tbody').append(linha);
    });
  })
  .fail(function(){
    $('#erro').toggle();
    setTimeout(function(){
        $('#erro').toggle();
    },2000);
  });
}
