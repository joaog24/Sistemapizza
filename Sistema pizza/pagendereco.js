
var metodoPagamento = document.getElementById("metodoPagamento");

var cartaoCredito = document.querySelector(".cartao-credito");


metodoPagamento.addEventListener("change", function () {
    if (metodoPagamento.value === "cartao") {
        
        cartaoCredito.style.display = "block";
    } else {
        cartaoCredito.style.display = "none";
    }
});

const retirarPedidoCheckbox = document.getElementById("retirarPedido");
const enderecoCampos = document.querySelector(".endereco");

retirarPedidoCheckbox.addEventListener("change", function () {
    if (this.checked) {
        enderecoCampos.style.display = "none";
    } else {
        enderecoCampos.style.display = "block";
    }
});


