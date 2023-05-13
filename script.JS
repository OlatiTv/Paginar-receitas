function ativar(elemento) {
  let itens = document.getElementsByClassName('item')
  let paginas = document.getElementsByClassName('page-link')

  for (let i = 0; i < paginas.length; i++) {
    paginas[i].parentNode.classList.remove('active')
  }

  elemento.classList.add('active')

  for (let i = 0; i < itens.length; i++) {
    itens[i].classList.remove('active')
  }

  let paginaId = elemento.getAttribute('onclick')
  let match = paginaId.match(/paginar\('(.+)'\)/)
  if (match && match[1]) {
    paginaId = match[1]
    document.getElementById(paginaId).classList.add('active')
  }
}

function paginar(pagina) {
  // Esconder todos os itens
  let itens = document.getElementsByClassName('item')
  for (let i = 0; i < itens.length; i++) {
    itens[i].style.display = 'none'
  }

  // Mostrar o item da página selecionada
  let paginaElement = document.getElementById(pagina)
  if (paginaElement) {
    paginaElement.style.display = 'block'
  }
}
