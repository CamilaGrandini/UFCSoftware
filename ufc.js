var nome = document.getElementById('nome')
var idade = document.getElementById('idade')
var sexo = document.getElementById('sexo')
var pais = document.getElementById('pais')
var categoria = document.getElementById('categoria')
var peso = document.getElementById('peso')
var botao = document.getElementById('botao')

var lutadores = JSON.parse(localStorage.getItem('lista_lutadores')) || []


function adicionarLutador(){
  var lutador = {
    "Nome": nome.value,
    "Idade": idade.value,
    "Sexo": sexo.value,
    "Pais": pais.value,
    "Categoria": categoria.value,
    "Peso": peso.value
  }
  // Push ==> Metodo que coloca o item ao final do array
  lutadores.push(lutador)

  salvarNoStorage()
}

botao.onclick = adicionarLutador

function salvarNoStorage(){
  localStorage.setItem('lista_lutadores', JSON.stringify(lutadores))
}






