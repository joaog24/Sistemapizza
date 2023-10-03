// Obtém o elemento select
var metodoPagamento = document.getElementById("metodoPagamento");
// Obtém o elemento div que contém os campos do cartão de crédito
var cartaoCredito = document.querySelector(".cartao-credito");

// Adiciona um ouvinte de eventos para detectar a mudança no método de pagamento
metodoPagamento.addEventListener("change", function () {
    if (metodoPagamento.value === "cartao") {
        // Se "Cartão de Crédito" for selecionado, exibe os campos do cartão
        cartaoCredito.style.display = "block";
    } else {
        // Caso contrário, oculta os campos do cartão
        cartaoCredito.style.display = "none";
    }
});

const retirarPedidoCheckbox = document.getElementById("retirarPedido");
const enderecoCampos = document.querySelector(".endereco");

retirarPedidoCheckbox.addEventListener("change", function () {
    if (this.checked) {
        // Se a checkbox "Retirar Pedido" estiver marcada, oculte os campos de endereço
        enderecoCampos.style.display = "none";
    } else {
        // Se a checkbox "Retirar Pedido" estiver desmarcada, exiba os campos de endereço
        enderecoCampos.style.display = "block";
    }
});


