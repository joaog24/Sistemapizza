const pizzas = [
  {
    nome: "Pizzas de Queijo",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Queijo"],
    descricao: "Pizza de queijo mussarela"
  },
  {
    nome: "Pizza de Calabresa",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Calabresa"],
    descricao: "Pizza de Calabresa"
  },
  {
    nome: "Pizza de Queijo e Calabresa",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Queijo", "Calabresa"],
    descricao: "Pizza de queijo mussarela e calabresa"
  },
  {
    nome: "Pizza de Brócolis",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Vegetariana"],
    descricao: "Pizza de Brócolis"
  },
  {
    nome: "Pizza de Brigadeiro",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Doce"],
    descricao: "Pizza de brigadeiro"
  }
];

// Restante do seu código...

function criarCartaoPizza(pizza, index) {
  const li = document.createElement('li');
  li.classList.add('cartao-pizza');

  const informacoes = document.createElement('div');
  informacoes.classList.add('informacoes');
  const span = document.createElement('span');
  span.textContent = pizza.nome;
  informacoes.appendChild(span);

  const imagem = document.createElement('img');
  imagem.src = pizza.imagem;
  imagem.alt = 'Pizza';

  const tiposUl = document.createElement('ul');
  tiposUl.classList.add('tipos');
  pizza.tipos.forEach((tipo, tipoIndex) => {
    const tipoLi = document.createElement('li');
    tipoLi.classList.add('tipo');
    tipoLi.textContent = tipo;

    // Adicione um ID único com base no índice da pizza e do tipo
    tipoLi.id = `pizza-${index}-tipo-${tipoIndex}`;

    tiposUl.appendChild(tipoLi);
  });

  const descricao = document.createElement('p');
  descricao.classList.add('descricao');
  descricao.textContent = pizza.descricao; // Usar a descrição da pizza aqui

  const quantidadeInput = document.createElement('input');
  quantidadeInput.type = 'number';
  quantidadeInput.classList.add('quantidade');
  quantidadeInput.placeholder = 'Quantidade';

  li.appendChild(informacoes);
  li.appendChild(imagem);
  li.appendChild(tiposUl);
  li.appendChild(descricao);
  li.appendChild(quantidadeInput);

  return li;
}


function listar() {
  const ul = document.querySelector('.listagem-pizza');

  // Remova todos os elementos filhos da lista
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  pizzas.forEach(function (pizza, index) {
    const cartaoPizza = criarCartaoPizza(pizza, index);
    ul.appendChild(cartaoPizza);
  });
}

function adicionarNovasPizzas() {
  const ul = document.querySelector('.listagem-pizza');
  
  pizzas.forEach(function (pizza, index) {
    const cartaoPizza = criarCartaoPizza(pizza, index);
    ul.appendChild(cartaoPizza);
  });

  const botaoCarregar = document.querySelector('#botao-carregar');
  botaoCarregar.style.display = 'none';
}

// Chame a função para adicionar as novas pizzas quando necessário
const botaoAdicionar = document.querySelector('#botao-adicionar'); // Selecione o botão adequado
botaoAdicionar.addEventListener('click', adicionarNovasPizzas);


// Chame a função para listar as pizzas quando o botão for clicado
const botaoCarregar = document.querySelector('button');
botaoCarregar.addEventListener('click', listar);
