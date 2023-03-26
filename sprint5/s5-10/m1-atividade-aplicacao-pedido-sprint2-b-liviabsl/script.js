// Pedido de um cliente que montaremos conforme id dos itens
let pedido = {
  nomes: [],
  precoTotal: 0,
  pesos: {
    'gramas': 0,
    'mililitros': 0
  },
}

// Função será responsável por atualizar a variável nomes
function definirNome(minhaListaDeProdutos){
  for (let i = 0; i<minhaListaDeProdutos.length; i++){
    let nomelista = minhaListaDeProdutos[i].nome
    pedido.nomes.push(nomelista)
  }

}

// Função será responsável por atualizar a variável precoTotal
function definirPrecoTotal(minhaListaDeProdutos){
}

// Função será responsável por atualizar a variável pesos
function definirGramasEMililitros (produtos){

}

// Função será responsavel por atualizar a variavel minhaListaDeProdutos 
function encontrarItensPeloId(idList){
  let itensencontrados = []
  for (let i = 0; i < idList.length; i++) {
    let index = idList[i]
    itensencontrados.push(cardapio[index])
  }
return itensencontrados
}
console.log(encontrarItensPeloId([3, 5, 2]))
// Função será responsável pela apresentação do pedido. Obs: usar console.log() invés return na string criada.
function apresentacao() {

}

// Função principal da nossa aplicação, será responsável por chamar as funções.
function principal(idDosProdutosComprados){
  // objetos que serão filtrados conforme o id dos itens. Obs: esse sera nosso array de objetos.
  const minhaListaDeProdutos = encontrarItensPeloId(idDosProdutosComprados);

  // atualizar nomes
  definirNome(minhaListaDeProdutos);

  // atualiar pesos
  definirGramasEMililitros(minhaListaDeProdutos);

  // atualizar precoTotal
  definirPrecoTotal(minhaListaDeProdutos);

  // apresentação do pedido
  apresentacao()
}


console.log(principal([1, 3, 7]))
console.log(pedido)
