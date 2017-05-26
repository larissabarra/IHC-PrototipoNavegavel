// JS aqui.
function clearData(nome) {
  $('#nome').html(nome);
  $('#origem').html('');
  $('#descricao').html('');
  $('#informacao-nutricional, #legenda').css('display', 'none');
}
$(function() {
 
  $('select').change(function() {
	var items = [];
    clearData('');
    var regiaoFiltro = $('#regiao').val();
    var tipoFiltro = $('#tipo').val();  
  $.each( alimentos, function( regiao, dadosRegiao ) {
    $.each( dadosRegiao, function( tipo, tipoAlimento ) {
      $.each( tipoAlimento, function( key, val ) {
        if (!$.isEmptyObject(val) && regiao == regiaoFiltro && tipo == tipoFiltro) {
          var nome = val.nome;
          items.push( "<a href='#' data-regiao='" + regiao + "' data-tipo='" + tipo + "' data-nome='" + key + "' class='list-group-item'>" + nome + "<span class='badge'>+</span></a>" );
        }
      });
    });
  });
  $('#lista').html(items.join( "" ));
  });

  $('#informacao-nutricional, #legenda').css('display', 'block');
  

  $('select').trigger('change');

  $('#list-container').on('click', 'a.list-group-item', function(event) {
    event.preventDefault();
    var regiao = $(this).data('regiao');
    var tipo = $(this).data('tipo');
    var nome = $(this).data('nome');

    var alimento = alimentos[regiao][tipo][nome];

    $('#alimentos-adicionados').append('<span class="badge">' + alimento.nome + '</span> &nbsp');

    var en = parseFloat($('#energia').text(), 10);
    en = $.isNumeric(en) ? en : 0;
    en += alimento.energia;
    $('#energia').html(en.toFixed(2));

    var ptn = parseFloat($('#ptn').text(), 10);
    ptn = $.isNumeric(ptn) ? ptn : 0;
    ptn += alimento.ptn;
    $('#ptn').html(ptn.toFixed(2));

    var lip = parseFloat($('#lip').text(), 10);
    lip = $.isNumeric(lip) ? lip : 0;
    lip += alimento.lip;
    $('#lip').html(lip.toFixed(2));

    var carb = parseFloat($('#carb').text(), 10);
    carb = $.isNumeric(carb) ? carb : 0;
    carb += alimento.carb;
    $('#carb').html(carb.toFixed(2));

    var fibra = parseFloat($('#fibra').text(), 10);
    fibra = $.isNumeric(fibra) ? fibra : 0;
    fibra += alimento.fibra;
    $('#fibra').html(fibra.toFixed(2));

    var calcio = parseFloat($('#calcio').text(), 10);
    calcio = $.isNumeric(calcio) ? calcio : 0;
    calcio += alimento.calcio;
    $('#calcio').html(calcio.toFixed(2));

    var fosforo = parseFloat($('#fosforo').text(), 10);
    fosforo = $.isNumeric(fosforo) ? fosforo : 0;
    fosforo += alimento.fosforo;
    $('#fosforo').html(fosforo.toFixed(2));

    var ferro = parseFloat($('#ferro').text(), 10);
    ferro = $.isNumeric(ferro) ? ferro : 0;
    ferro += alimento.ferro;
    $('#ferro').html(ferro.toFixed(2));

    var retinol = parseFloat($('#retinol').text(), 10);
    retinol = $.isNumeric(retinol) ? retinol : 0;
    retinol += alimento.retinol;
    $('#retinol').html(retinol.toFixed(2));

    var b1 = parseFloat($('#b1').text(), 10);
    b1 = $.isNumeric(b1) ? b1 : 0;
    b1 += alimento.b1;
    $('#b1').html(b1.toFixed(2));

    var b2 = parseFloat($('#b2').text(), 10);
    b2 = $.isNumeric(b2) ? b2 : 0;
    b2 += alimento.b2;
    $('#b2').html(b2.toFixed(2));

    var niacina = parseFloat($('#niacina').text(), 10);
    niacina = $.isNumeric(niacina) ? niacina : 0;
    niacina += alimento.niacina;
    $('#niacina').html(niacina.toFixed(2));

    var c = parseFloat($('#c').text(), 10);
    c = $.isNumeric(c) ? c : 0;
    c += alimento.c;
    $('#c').html(c.toFixed(2));
  });

  $('#clear-calc').on('click', function(event) {
    event.preventDefault();
    $('#alimentos-adicionados').text('');
    $('#energia').html('');
    $('#ptn').html('');
    $('#lip').html('');
    $('#carb').html('');
    $('#fibra').html('');
    $('#calcio').html('');
    $('#fosforo').html('');
    $('#ferro').html('');
    $('#retinol').html('');
    $('#b1').html('');
    $('#b2').html('');
    $('#niacina').html('');
    $('#c').html('');
  });
});
