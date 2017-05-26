// JS aqui.
function clearData(nome) {
  $('#nome').html(nome);
  $('#origem').html('');
  $('#descricao').html('');
  $('#informacao-nutricional, #legenda').css('display', 'none');
}

$(function() {
  $('select').change(function() {
    clearData('');
    var regiao = $('#regiao').val();
    var tipo = $('#tipo').val();
    var data = alimentos[regiao][tipo];
    var regiaoSelect =  $("#regiao option:selected").text();
    var tipoSelect = $("#tipo option:selected").text();
    var items = [];
    tipoSelect
    items.push("<label class='list-group-item'>" + tipoSelect + " do " + regiaoSelect + "</label>");
    $.each(data, function(key, val) {
      if (val && val.nome) {
        items.push("<a href='#' data-nome='" + key + "' class='list-group-item'>" + val.nome + "</a>");
      }
    });
    $('#lista').html(items.join(""));
  });

  $('select').trigger('change');

  $('#list-container').on('click', 'a.list-group-item', function(event) {
    event.preventDefault();
    var regiao = $('#regiao').val();
    var tipo = $('#tipo').val();
    var nome = $(this).data('nome');

    var alimento = alimentos[regiao][tipo][nome];
    if (!$.isEmptyObject(alimento)) {
      $('#nome').html(alimento.nome);
      $('#origem').html('Origem: ' + alimento.origem);
      $('#descricao').html(alimento.descricao);
      $('#energia').html(alimento.energia);
      $('#ptn').html(alimento.ptn);
      $('#lip').html(alimento.lip);
      $('#carb').html(alimento.carb);
      $('#fibra').html(alimento.fibra);
      $('#calcio').html(alimento.calcio);
      $('#fosforo').html(alimento.fosforo);
      $('#ferro').html(alimento.ferro);
      $('#retinol').html(alimento.retinol);
      $('#b1').html(alimento.b1);
      $('#b2').html(alimento.b2);
      $('#niacina').html(alimento.niacina);
      $('#c').html(alimento.c);
      $('#informacao-nutricional, #legenda').css('display', 'block');
    } else {
      clearData(nome);
      $('#descricao').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    }
  });
});
