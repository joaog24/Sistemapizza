const pizzas = [
  {
    nome: "Pizzas de Queijo",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Queijo"],
    descricao: "Pizza de queijo mussarela",
    preco:34.90
  },
  {
    nome: "Pizza de Calabresa",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Calabresa"],
    preco:35.00
  },
  {
    nome: "Pizza de Queijo e Calabresa",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Queijo", "Calabresa"],
    preco:36.00
  },
  {
    nome: "Pizza de Brócolis",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Vegetariana"],
    preco:28.00
  },
  {
    nome: "Pizza de Brigadeiro",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Doce"],
    preco:10.00
  },
  {
    nome: "Pizza de Pizza Marguerita",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Vegetariana"],
    preco:30.00
  },
  {
    nome: "Pizza Romeu e Julieta",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Doce","Queijo"],
    preco:10.00
  },
  {
    nome: "Pizza de Brigadeiro",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Doce"],
    preco:10.00
  },
  {
    nome: "Pizza Morango e chocolate",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Doce","Frutas"],
    preco:50.00
  },
  {
    nome: "Pizza Frango com catupiry",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Frango"],
    preco:10.00
  },
  {
    nome: "Pizza Quatro queijos",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Queijo"],
    preco:50.00
  },
  {
    nome: "Pizza Baiana",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Exóticas"],
    preco:38.00
  },
  {
    nome: "Pizza de Atum ",
    imagem: "/img/8355992_stock-vector-pepperoni-pizza-removebg-preview.png",
    tipos: ["Exóticas"],
    preco:45.00
  }
  
];


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


  
    tipoLi.id = `pizza-${index}-tipo-${tipoIndex}`;

    tiposUl.appendChild(tipoLi);
  });

  const preco = document.createElement('p');
  preco.textContent = `Preço: R$ ${pizza.preco.toFixed(2)}`;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('selecionar-pizza');

  li.appendChild(informacoes);
  li.appendChild(imagem);
  li.appendChild(tiposUl);
  li.appendChild(preco);
  li.appendChild(checkbox);

  return li;
}

function listar(filtro) {
  const ul = document.querySelector('.listagem-pizza');
  ul.innerHTML = ''; 
  pizzas.forEach(function (pizza, index) {

    if (filtro === 'todos' || pizza.tipos.includes(filtro)) {
      const cartaoPizza = criarCartaoPizza(pizza, index);
      ul.appendChild(cartaoPizza);
    }
  });

  
  const checkboxes = document.querySelectorAll('.selecionar-pizza');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      calcularTotal();
    });
  });
}

function adicionarNovasPizzas(filtro) {
  const ul = document.querySelector('.listagem-pizza');
  ul.innerHTML = ''; 
  pizzas.forEach(function (pizza, index) {
    
    if (filtro === 'todos' || pizza.tipos.includes(filtro)) {
      const cartaoPizza = criarCartaoPizza(pizza, index);
      ul.appendChild(cartaoPizza);
    }
  });

  
  const checkboxes = document.querySelectorAll('.selecionar-pizza');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      calcularTotal();
    });
  });

  const botaoCarregar = document.querySelector('#botao-carregar');
  botaoCarregar.style.display = 'none';
}

function coletarPizzasSelecionadas() {
  const checkboxes = document.querySelectorAll('.selecionar-pizza');
  const pizzasSelecionadas = [];

  checkboxes.forEach(function (checkbox, index) {
    if (checkbox.checked) {
      pizzasSelecionadas.push(pizzas[index]);
    }
  });

  return pizzasSelecionadas;
}
listar('todos');

function calcularTotal() {
  const pizzasSelecionadas = coletarPizzasSelecionadas();
  const totalElement = document.getElementById('total');
  let total = 0;

  pizzasSelecionadas.forEach(function (pizza) {
    total += pizza.preco;
  });

  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}


const checkboxes = document.querySelectorAll('.selecionar-pizza');
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    calcularTotal();
  });
});

function limparCarrinho() {
  const checkboxes = document.querySelectorAll('.selecionar-pizza');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  const totalElement = document.getElementById('total');
  totalElement.textContent = 'Total: R$ 0.00';

  const carrinhoLista = document.getElementById('carrinho-lista');
  carrinhoLista.innerHTML = '';
}

