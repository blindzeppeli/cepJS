function consultaCep() {
  $('.barra-progresso').show()
  var cep = document.getElementById('cep').value
  var url = "https://viacep.com.br/ws/" + cep + "/json/"
    
  console.log(url)
    
  $.ajax({                             //Requisição Ajax
    url: url,
    type: "GET",
    success: function(response) {
      console.log(response)
      $('#titulo_cep').html('CEP ' + cep)
      $('#logradouro').html(response.logradouro)  //JQuery
      //document.getElementById('logradouro').innerHTML = response.logradouro
      $('#bairro').html(response.bairro)
      //document.getElementById('bairro').innerHTML = response.bairro
      $('#localidade').html(response.localidade)
      //document.getElementById('localidade').innerHTML = response.localidade
      $('#uf').html(response.uf)
      //document.getElementById('uf').innerHTML = response.uf
      $('.cep').show()
      $('.barra-progresso').hide()
    }    
  })
}

$(function() {
  $('.cep').hide()
  $('.barra-progresso').hide()
})